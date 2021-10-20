import React, { memo } from "react";
import { Grid } from "@mui/material";
import Comment from "./Comment";

interface CommentListProps {
  list: any[];
  // index: any;
  // item: any[];
  // main: any;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <Grid container direction="row" spacing={2}>
      {props.list.map((item: any, index: React.Key | null | undefined) => (
        <Grid item xs={8} key={index}>
          <Comment
            mode={null}
            content={item.content}
            reply={item.reply}
            paperWidth={300}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(CommentList);
