import React, { memo } from "react";
import { Grid } from "@mui/material";
import Comment from "./Comment";

export default memo(function CommentList(props) {
  return (
    <Grid container direction="row" spacing={2}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={8} key={index}>
          <Comment />
        </Grid>
      ))}
    </Grid>
  );
});
