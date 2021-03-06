import React from 'react';
import './App.css';
import { HelloServiceClient } from './grpc/api_grpc_web_pb';
import { HelloRequest } from './grpc/api_pb';

export default class App extends React.Component {
  helloService = new HelloServiceClient(
    `https://${window.location.hostname}:7070`,
    null,
    null
  )

  state = {
    error: null,
    response: null
  }

  constructor() {
    super()

    const request = new HelloRequest();
    request.setName("Alexey");
    this.helloService.say_hello(
      request,
      null,
      (error, response) => {
        this.setState({
          error: error ? error.message : null,
          response: response ? JSON.stringify(response.toObject()) : null
        })
      }
    );
  }

  render() {
    return (
      <div>
        <ul>Look what I've got:
          <li>this.state.error = {this.state.error}</li>
          <li>this.state.response = {this.state.response}</li>
        </ul>
      </div>
    );
  }
}
