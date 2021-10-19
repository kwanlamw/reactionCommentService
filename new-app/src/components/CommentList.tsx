import React, { memo } from "react";
import { Grid } from "@mui/material";
import Comment from "./Comment";
import CommentProps from "./Comment";
// const list = [
//   {
//     content: "1",
//     reply: [
//       { content: "a" },
//       { content: "b" },
//       { content: "c" },
//       { content: "d" },
//       { content: "e" },
//     ],
//   },
//   { content: "2", reply: "2" },
//   { content: "1", reply: "1" },
//   { content: "2", reply: "2" },
//   { content: "1", reply: "4" },
//   { content: "2", reply: "3" },
// ];
interface CommentListProps {
  list: any[];
  // index: any;
  // item: any[];
  // main: any;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  console.log(props.list);
  return (
    <Grid container direction="row" spacing={2}>
      {props.list.map((item: any, index: React.Key | null | undefined) => (
        <Grid item xs={8} key={index}>
          <Comment
            mode={null}
            content={item.content}
            reply={item.reply}
            paperWidth={400}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(CommentList);
