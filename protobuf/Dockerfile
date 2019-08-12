FROM znly/protoc:0.4.0

# typescript support
#   grpc has betta support for typescript: https://github.com/grpc/grpc-web/issues/447
#   so in future we can remove that extra plugin
RUN apk add --no-cache nodejs
RUN npm install grpc_tools_node_protoc_ts --save

# mypy python typing
RUN apk add --no-cache py-pip
RUN pip install mypy-protobuf google protobuf

ENTRYPOINT ["/bin/sh", "/data/compile.sh"]
