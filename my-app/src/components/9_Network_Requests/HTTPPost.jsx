import React, { Component } from "react";
import axios from "axios";

export class HTTPPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiSuccessfulResponse: null,
      error: null,
    };
  }

  // -- Axios --
  postToApi = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello world!",
        body: "It works",
        userId: 123,
      })
      .then((response) =>
        this.setState({
          apiSuccessfulResponse: response.data,
        })
      )
      .catch((error) => {
        console.log(error);
        this.setState({
          error: error,
        });
      });
  };

  // -- Vanilla JS --
  /* postToApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: "Hello world!",
            body: "It works",
            userId: 123,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      this.setState({
        apiSuccessfulResponse: data,
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  }; */

  render() {
    const { apiSuccessfulResponse } = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
        {apiSuccessfulResponse && (
          <div>
            <h1>{apiSuccessfulResponse.title}</h1>
            <p>{apiSuccessfulResponse.body}</p>
            <p>{apiSuccessfulResponse.id}</p>
            <p>{apiSuccessfulResponse.userId}</p>
          </div>
        )}
        {this.state.error && (
          <div>
            <p>{this.state.error.message}</p>
          </div>
        )}
      </div>
    );
  }
}

export default HTTPPost;
