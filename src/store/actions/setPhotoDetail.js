import * as ActionTypes from "../actionTypes";

const setPhotoDetail = (caption, display_src) => {
  return {
    type: ActionTypes.SET_PHOTO_DETAIL,
    payload: {
      caption,
      display_src
    }
  };
};

export default setPhotoDetail;
