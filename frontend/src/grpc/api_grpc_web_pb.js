/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



// @ts-ignore
const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.HelloServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.HelloServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.api.HelloServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.api.HelloServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.HelloRequest,
 *   !proto.api.HelloResponse>}
 */
const methodInfo_say_hello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.HelloResponse,
  /** @param {!proto.api.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.api.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.HelloServiceClient.prototype.say_hello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.HelloService/say_hello',
      request,
      metadata,
      methodInfo_say_hello,
      callback);
};


/**
 * @param {!proto.api.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.HelloServicePromiseClient.prototype.say_hello =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.say_hello(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.api;

