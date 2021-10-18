import React, { memo } from "react";
import { Grid } from "@mui/material";
import MainComment from "./MainComment";

const list = [
  {
    main: "1",
    reply: [
      { main: "a" },
      { main: "b" },
      { main: "c" },
      { main: "d" },
      { main: "e" },
    ],
  },
  { main: "2", reply: "2" },
  { main: "1", reply: "1" },
  { main: "2", reply: "2" },
  { main: "1", reply: "4" },
  { main: "2", reply: "3" },
];
interface CommentListProps {
  // list: Array<CommentItems>;
  list: any;
  // index: any;
  // item: Object;
  // main: any;
}
const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <Grid container direction="row" spacing={2}>
      {list.map((item, index) => (
        <Grid item xs={8} key={index}>
          <MainComment
            mode={null}
            main={item.main}
            reply={item.reply}
            paperWidth={400}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(CommentList);
