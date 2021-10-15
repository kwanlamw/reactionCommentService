import React, { memo } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Box, Grid } from "@mui/material";
import { Comment, CommentList } from "./components";

function App() {
  // const [mode, setMode] = React.useState("");
  return (
    <div className="App">
      <Box margin={2}>
        <Grid container justifyContent="space-around" alignItems="flex-start">
          <Grid xs={"auto"}>
            <Grid container alignItems="center">
              {/* Input Area: */}
              <Comment mode="add" main="" reply="" paperWidth={400} />
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
