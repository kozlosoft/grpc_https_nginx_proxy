FROM python:latest
WORKDIR /data/src
# copy it to move pip step from runtime into container's building stage
COPY ./src/requirements.txt requirements.txt 
RUN pip install -r requirements.txt
COPY . /data
CMD python -u main.py
