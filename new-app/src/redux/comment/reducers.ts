import { ICommentState, initCommentState } from "./state";
import {
  ICommentActions,
  SET_IS_PROCESSING,
  SET_LIST_COMMENT,
  UPDATE_COMMENT_FAIL,
  UPDATE_COMMENT_SUCCESS,
} from "./actions";

export const commentReducers = (
  state: ICommentState = initCommentState,
  action: ICommentActions
): ICommentState => {
  switch (action.type) {
    case SET_IS_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      };

    case SET_LIST_COMMENT:
      return {
        ...state,
        listComment: action.listComment,
      };

    case UPDATE_COMMENT_SUCCESS:
      const listComment2 = state.listComment.slice();
      // console.log("action.idx", action.idx);
      listComment2[action.idx].content = action.content;
      return {
        ...state,
        isProcessing: false,
        listComment: listComment2,
      };

    case UPDATE_COMMENT_FAIL:
      return {
        ...state,
        isProcessing: false,
      };

    default:
      return state;
  }
};
