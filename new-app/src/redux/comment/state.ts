export interface IListComment {
  item_id: number;
  main: string;
  user_id: number;
  //   group_id: number;
  date: Date;
  //   image: string;
}

export interface IListReply {
  item_id: number;
  main: string;
  user_id: number;
  //   image: string;
  date: Date;
}

export interface ICommentState {
  isProcessing: boolean;
  listReply: Array<IListReply>;
  listComment: Array<IListComment>;
}

export const initCommentState: ICommentState = {
  isProcessing: false,
  //   //   shortageItems: [] as Array<IShortageItem>,
  //   //   expiryItems: [] as Array<IExpiryItem>,
  //   //   group_id: 0,
  //   //   categoryObj: { category: "All" },
  //   //   categories: [] as Array<ICategoryObj>,
  listReply: [] as Array<IListReply>,
  listComment: [] as Array<IListComment>,
};
