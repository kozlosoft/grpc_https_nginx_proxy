FROM envoyproxy/envoy:latest
COPY ./envoy.yaml /etc/envoy/envoy.yaml
ADD ./ssl/example-com.crt /etc/example-com.crt
ADD ./ssl/example-com.key /etc/example-com.key
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml
