#!/bin/bash
openssl req -nodes -x509 -newkey rsa:4096 -keyout example-com.key -out example-com.crt -days 365
