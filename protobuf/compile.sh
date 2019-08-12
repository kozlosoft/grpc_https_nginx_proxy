#!/bin/bash

JS_OUT_DIRECTORY=/build/js
PY_OUT_DIRECTORY=/build/py

function add_eslint_disable() {
    # add to each js file this line to work in react-app without error: /* eslint-disable */
    FILE_NAME=$1
    echo "/* eslint-disable */" | cat - $FILE_NAME > /tmp/temp && mv /tmp/temp $FILE_NAME
}

function add_typescript_ignore() {
    # add // @ts-ignore right before line "const grpc = {};" (11 line)
    # to suppress Type error: Cannot compile namespaces when the '--isolatedModules' flag is provided.  TS1208
    FILE_NAME=$1
    sed -i.bak $'s/const grpc = {};/\/\/ @ts-ignore\\\nconst grpc = {};/g' $FILE_NAME
}

echo Compiling protobuf files to js/ts/py ...

protoc -I=/data/src api.proto \
    --js_out=import_style=commonjs:$JS_OUT_DIRECTORY \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$JS_OUT_DIRECTORY \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --ts_out="service=true:${JS_OUT_DIRECTORY}" \
    --plugin=protoc-gen-grpc_python=`which grpc_python_plugin` \
    --python_out=$PY_OUT_DIRECTORY \
    --grpc_python_out=$PY_OUT_DIRECTORY \
    --mypy_out=$PY_OUT_DIRECTORY
STATUS=$?

echo Adding eslint-disable line to compiled js files
add_eslint_disable "$JS_OUT_DIRECTORY/api_pb.js"
add_eslint_disable "$JS_OUT_DIRECTORY/api_grpc_web_pb.js"

echo Suppressing typescript errors
add_typescript_ignore "$JS_OUT_DIRECTORY/api_grpc_web_pb.js"

echo Done

return $STATUS
