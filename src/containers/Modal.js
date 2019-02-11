import React, { Component } from "react";
import "./Modal.css";
import axios from "axios";
import { connect } from 'react-redux';

class Modal extends Component {
    state = {
        comments : []
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/comments/${this.props.match.params.id}`).then((response) => {
            this.setState({
                comments: response.data
            })
        });
    }
  render() {
    return (
      <div className="container mt-5 shadow p-3 mb-5 bg-white rounded-border ">
        <div className="card width-400px rounded-border ">
          <img
            className="card-img-top width-100 img mt-2"
            src={this.props.display_src}
            alt="Card"
          />
          <hr/>
          <div className="card-body">
            <h3>{this.props.caption}</h3>
            <hr/>
            <div>
              {this.state.comments.map((comment) => {
                  return <div className="card-text"><p key={Math.random()}><strong>{comment.user} : </strong>{comment.text}</p></div>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
    return { 
        display_src: state.display_src,
        caption: state.caption
    };
}
export default connect(mapStateToProps)(Modal);
