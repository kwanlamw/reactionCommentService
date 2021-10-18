import { IListComment } from "./state";

export const SET_IS_PROCESSING = "@@comment/SET_IS_PROCESSING";

export const SET_LIST_COMMENT = "@@comment/SET_LIST_COMMENT";

export const UPDATE_COMMENT_SUCCESS = "@@comment/UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAIL = "@@comment/UPDATE_COMMENT_FAIL";

interface ISetIsProcessing {
  type: typeof SET_IS_PROCESSING;
}

interface ISetListComment {
  type: typeof SET_LIST_COMMENT;
  listComment: Array<IListComment>;
}

interface IUpdateCommentSuccess {
  type: typeof UPDATE_COMMENT_SUCCESS;
  idx: number;
  main: string;
}

interface IUpdateCommentFail {
  type: typeof UPDATE_COMMENT_FAIL;
}

export const setIsProcessing = (): ISetIsProcessing => {
  return {
    type: SET_IS_PROCESSING,
  };
};

export const setListComment = (
  listComment: Array<IListComment>
): ISetListComment => {
  return {
    type: SET_LIST_COMMENT,
    listComment,
  };
};

export const updateCommentSuccess = (
  idx: number,
  // quantity: number
  main: string
): IUpdateCommentSuccess => {
  return {
    type: UPDATE_COMMENT_SUCCESS,
    idx,
    main,
  };
};

export const updateCommentFail = (): IUpdateCommentFail => {
  return {
    type: UPDATE_COMMENT_FAIL,
  };
};

export type ICommentActions =
  | ISetIsProcessing
  | ISetListComment
  | IUpdateCommentSuccess
  | IUpdateCommentFail;
