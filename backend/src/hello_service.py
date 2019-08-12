from our_grpc import api_pb2, api_pb2_grpc

class HelloService(api_pb2_grpc.HelloServiceServicer):
    def say_hello(request: api_pb2.HelloRequest) -> api_pb2.HelloResponse:
        response = api_pb2.HelloResponse()
        response.message = 'hello ' + request.message
        return response
