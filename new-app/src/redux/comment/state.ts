export interface IListReply {
  item_id: number;
  main: string;
  user_id: number;
  date: Date;
  //   image: string;
}

export interface IListComment {
  item_id: number;
  content: string;
  reply?: Array<IListReply>;
  user_id: number;
  date: Date;
  //   image: string;
}

export interface ICommentState {
  isProcessing: boolean;
  listComment: Array<IListComment>;
}

export const initCommentState: ICommentState = {
  isProcessing: false,
  listComment: [] as Array<IListComment>,
};
