# what is this?
Grpc API with web-grpc js client and python server. 
Server is behind nginx. Web-client knocks through https.
Nginx has reverse-proxy to convert requests into plain http.

# how to run
```
docker-compose up --build
```