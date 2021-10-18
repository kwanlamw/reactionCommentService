import React, { memo } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Box, Grid } from "@mui/material";
import { Comment, CommentList } from "./components";
// import { useSelector, useDispatch } from "react-redux";
// import { IRootState } from "./redux/store";
// import { Switch, Route } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector(
  //   (state: IRootState) => state.auth.isAuthenticated
  // );
  // console.log(isAuthenticated);

  return (
    <div className="App">
      <Box margin={2}>
        <Grid container justifyContent="space-around" alignItems="flex-start">
          <Grid xs={"auto"}>
            <Grid container alignItems="center">
              {/* Input Area: */}
              <Comment mode="add" main="" paperWidth={400} />
            </Grid>
          </Grid>

          <Grid xs={8}>
            {/* Record as below: */}
            <CommentList list={undefined} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
