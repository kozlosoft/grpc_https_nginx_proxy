# based on https://mherman.org/blog/dockerizing-a-react-app/
FROM node:9.6.1

# set working directory
WORKDIR /data

# install and cache app dependencies
COPY package.json /data/package.json
RUN rm -rf node_modules/ && npm install

# start app
CMD npm start
