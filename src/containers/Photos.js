import React, { Component } from "react";
import Photo from "../components/Photo";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Photos.css";

class Photos extends Component {
  state = {
    photoArray: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/api/photos").then(response => {
      this.setState({
        photoArray: response.data
      });
    });
  }

  render() {
    return (
      <div className="d-flex align-content-center flex-wrap d-flex justify-content-center">
        {this.state.photoArray.map(photo => (
          <Link to={`/${photo.code}`} key={photo.code} className="Link m-3">
            <Photo
              caption={photo.caption}
              display_src={photo.display_src}
              code={photo.code}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Photos;
