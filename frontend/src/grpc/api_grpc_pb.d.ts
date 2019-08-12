// package: api
// file: api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as api_pb from "./api_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    say_hello: IHelloServiceService_Isay_hello;
}

interface IHelloServiceService_Isay_hello extends grpc.MethodDefinition<api_pb.HelloRequest, api_pb.HelloResponse> {
    path: string; // "/api.HelloService/say_hello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<api_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<api_pb.HelloRequest>;
    responseSerialize: grpc.serialize<api_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<api_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer {
    say_hello: grpc.handleUnaryCall<api_pb.HelloRequest, api_pb.HelloResponse>;
}

export interface IHelloServiceClient {
    say_hello(request: api_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: api_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    say_hello(request: api_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    say_hello(request: api_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public say_hello(request: api_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: api_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public say_hello(request: api_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public say_hello(request: api_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
