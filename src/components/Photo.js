import React from "react";
import { connect } from "react-redux";
import setPhotoDetail from "../store/actions/setPhotoDetail";
import "./Photo.css";

const photo = props => {
  var width = {
    width: "18rem"
  };
  return (
    <div className="card shadow p-3 bg-white rounded-border height-100" style={width}>
      <img
        className="card-img-top"
        src={props.display_src}
        alt={props.caption}
        onClick={() => props.setPhotoDetail(props.caption, props.display_src)}
      />
      <div className="card-body">
        <p className="card-text"> <strong>{props.caption}</strong> </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setPhotoDetail: (caption, display_src) =>
      dispatch(setPhotoDetail(caption, display_src))
  };
};

export default connect(null, mapDispatchToProps)(photo);
