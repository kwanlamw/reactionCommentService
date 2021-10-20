import React, { memo } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Box, Grid } from "@mui/material";
import { Comment, CommentList } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "./redux/store";
import { Switch, Route } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector(
  //   (state: IRootState) => state.auth.isAuthenticated
  // );
  // console.log(isAuthenticated);

  const test = [
    {
      content: "1",
      reply: [
        { content: "a" },
        { content: "b" },
        // { content: "c" },
        // { content: "d" },
        // { content: "e" },
      ],
    },
    {
      content: "2",
      reply: [
        { content: "a" },
        // { content: "b" },
        // { content: "c" },
        // { content: "d" },
        { content: "e" },
      ],
    },
    {
      content: "1",
      reply: [
        { content: "a" },
        // { content: "b" },
        // { content: "c" },
        { content: "d" },
        { content: "e" },
      ],
    },
    {
      content: "2",
      reply: [
        // { content: "a" },
        { content: "b" },
        { content: "c" },
        { content: "d" },
        { content: "e" },
      ],
    },
    {
      content: "1",
      reply: [
        { content: "a" },
        // { content: "b" },
        // { content: "c" },
        // { content: "d" },
        { content: "e" },
      ],
    },
    {
      content: "2",
      reply: [
        { content: "a" },
        // { content: "b" },
        // { content: "c" },
        // { content: "d" },
        // { content: "e" },
      ],
    },
  ];

  return (
    <div className="App">
      <Box margin={2}>
        <Grid container justifyContent="space-around" alignItems="flex-start">
          <Grid xs={"auto"}>
            <Grid container alignItems="center">
              {/* Input Area: */}
              <Comment mode="add" content="" reply={[]} paperWidth={400} />
            </Grid>
          </Grid>

          <Grid xs={8}>
            {/* Record as below: */}
            <CommentList list={test} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default memo(App);
