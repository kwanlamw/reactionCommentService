import React, { memo } from "react";
import { Grid } from "@mui/material";
import Comment from "./Comment";

const list = ["a", "b", "c", "d", "e"];
interface ReplyListProps {
  // list: Array<CommentItems>;
  list: any;
  // reply: any;
  // index: any;
  // items: any;
  // item: any;
}
const ReplyList: React.FC<ReplyListProps> = (props) => {
  return (
    <Grid container direction="row" spacing={2} justifyContent="flex-end">
      {list.map((item, index) => (
        <Grid item xs={8} key={index}>
          <Comment
            mode={null}
            main={item}
            // reply={item.reply}
            paperWidth={200}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ReplyList);
