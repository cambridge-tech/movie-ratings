#!/bin/bash

virtualenv -p python3 -q venv
source venv/bin/activate
pip3 install -r requirements.txt
