#!/usr/bin/env python3
import time
from concurrent import futures

import grpc

from our_grpc import api_pb2, api_pb2_grpc
from hello_service import HelloService

if __name__ == "__main__":
    server = grpc.server(futures.ThreadPoolExecutor(
        max_workers=2))
    api_pb2_grpc.add_HelloServiceServicer_to_server(
        HelloService(), server
    )
    server_address = '[::]:9090'
    print("Server listening on {0}".format(server_address))
    server.add_insecure_port(server_address)
    server.start()
    try:
        while True:
            time.sleep(3600)
    except KeyboardInterrupt:
        server.stop(0)
