import React, { memo } from "react";
import {
  Paper,
  Grid,
  InputBase,
  TextField,
  IconButton,
  Avatar,
  colors,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export default memo(function Comment(props) {
  return (
    // <Grid container>
    //   <TextField
    //     id="outlined-basic"
    //     fullWidth
    //     hiddenLabel
    //     // label="comment"
    //     variant="outlined"
    //     // focused
    //     size="small"
    //     color="secondary"
    //   />

    //   <Avatar
    //     sx={{ width: 24, height: 24, bgcolor: colors.deepOrange[500] }}
    //     alt="Remy Sharp"
    //     src="/broken-image.jpg"
    //   >
    //     B
    //   </Avatar>

    //   <IconButton
    //     color="secondary"
    //     aria-label="send"
    //     component="span"
    //     size="small"
    //   >
    //     <SendIcon />
    //   </IconButton>
    // </Grid>

    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
    >
      <Avatar
        sx={{ width: 24, height: 24, bgcolor: colors.deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
        variant="rounded"
      >
        B
      </Avatar>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px" }} aria-label="emoji">
        <InsertEmoticonIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Feel free to leave us comment here..."
        inputProps={{ "aria-label": "comment" }}
      />
      <IconButton
        color="secondary"
        sx={{ p: "10px" }}
        aria-label="send"
        type="submit"
      >
        <SendIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
    </Paper>
  );
});
