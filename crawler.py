import os

import abc
import datetime
import time
import csv
import requests
import pandas as pd
import numpy as np
import zipfile
import tempfile
from dateutil.relativedelta import relativedelta
from bs4 import BeautifulSoup



last_month = datetime.date.today() - relativedelta(months=2)
today = datetime.date.today()
oneday = datetime.timedelta(days=1)
yesterday = today - oneday
# file_path = 'C:\\Users\\grand\\github\\crawler'
file_path = 'C:\\Users\\ouchu\\github\\crawler'

class Crawler:

    def __init__(self, time, path, sheet = 0):
        self.time = time
        self.path = path
        self.sheet = sheet
        self.filename = ''
        self.url = ''
        self.data = [[]]
        self.header = []
    @abc.abstractmethod
    def get_data(self):
        
        return NotImplemented
    @abc.abstractmethod
    def processing(self):
        return NotImplemented

    def write(self):
        parsed_csv = self.data
        path = self.path
        file_name = self.filename
        with open(os.path.join(path, file_name + "_output.csv"), mode='a+', newline='', encoding='UTF-8') as f:
            line = list(csv.reader(f))

        with open(os.path.join(path, file_name + "_output.csv"), mode='r', newline='',  encoding='UTF-8') as f:
            line = list(csv.reader(f))

        with open(os.path.join(path, file_name + "_output.csv"), mode='a+', newline='', encoding='UTF-8_sig') as csvfile:
            writer = csv.writer(csvfile)
            if len(line) == 0:
                print("empty")
                writer.writerow(self.header)
                writer.writerows(parsed_csv)
            else:
                for i in range(0, len(parsed_csv)):
                    last_date = datetime.datetime.strptime(
                        line[len(line)-1][0], "%Y-%m-%d")
                    current_date = datetime.datetime.strptime(
                        parsed_csv[i][0], "%Y-%m-%d")
                    if current_date > last_date:
                        print('newdata')
                        writer.writerow(parsed_csv[i])

    def download_to_csv(self):
        self.get_data()
        self.processing()
        self.write()

class CsvCrawler(Crawler):
    def __init__(self, time, path):
        super().__init__(time, path)
    def get_data(self):
        resp = requests.get(self.url)
        if resp.status_code >= 399:
            assert False
        data = resp.text
        line = data.splitlines()
        reader = csv.reader(line)
        parsed_csv = list(reader)
        self.data = parsed_csv

class XlsxCrawler(Crawler):
    def __init__(self, time, path, sheet = 0):
        super().__init__(time, path, sheet)


    def get_data(self):
        resp = requests.get(self.url)
        if resp.status_code >= 399:
            assert False
        work = pd.read_excel(resp.content, sheet_name=self.sheet)
        self.data = work.values.tolist()
class ZipCrawler(Crawler):
    def __init__(self, time, path, sheet = 0):
        super().__init__(time, path, sheet)


    def get_data(self):
        resp = requests.get(self.url)
        if resp.status_code >= 399:
            assert False
        data = resp.content
        temp_file = tempfile.TemporaryFile()
        temp_file.write(data)
        zf = zipfile.ZipFile(temp_file, mode='r')
        f = zf.open(zf.namelist()[0])
        reader = pd.read_excel(f, sheet_name=self.sheet)
        self.data = reader.values.tolist()
class JsonCrawler(Crawler):
    def __init__(self, time, path, sheet = 0):
        super().__init__(time, path, sheet)


    def get_data(self):
        resp = requests.get(self.url)
        if resp.status_code >= 399:
            assert False
        data = requests.get(self.url)
        df_insert = pd.DataFrame(data.json()[self.sheet])
        self.data = df_insert

