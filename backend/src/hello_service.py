from our_grpc import api_pb2, api_pb2_grpc

class HelloService(api_pb2_grpc.HelloServiceServicer):
    def say_hello(self, request: api_pb2.HelloRequest, context) -> api_pb2.HelloResponse:
        print("backend got request!")
        response = api_pb2.HelloResponse()
        response.greetings = 'hello ' + request.name
        return response
