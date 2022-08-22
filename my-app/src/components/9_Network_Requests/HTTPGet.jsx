import React, { Component } from "react";
import axios from "axios";

export class HTTPGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: null,
    };
  }

  componentDidMount() {
    // Axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: Array.isArray(response.data) ? response.data : [response.data],
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });

    // -- Vanilla JS --
    /* const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      this.setState({
        posts: Array.isArray(data) ? data : Array(data),
      });
    };

    fetchPosts().catch((error) => {
      this.setState({
        error: error.message,
      });
    }); */
  }

  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Posts:</h2>
        {/* {JSON.stringify(this.state.posts)} */}
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>
                {post.id}. {post.title}
              </h2>
              <h4>By User ID {post.userId}</h4>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        ) : (
          <div>
            {this.state.error ? (
              <p>{this.state.error}</p>
            ) : (
              <h2>Loading Posts...</h2>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default HTTPGet;
