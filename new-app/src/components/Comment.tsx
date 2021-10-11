import React, { memo } from "react";
import Emoji from "./Emoji";
import {
  Paper,
  InputBase,
  IconButton,
  Avatar,
  colors,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";

export default memo(function Comment(props) {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <Paper
      component="form"
      sx={{ p: "4px", display: "flex", alignItems: "center", width: 600 }}
    >
      <Avatar
        sx={{ width: 28, height: 28, bgcolor: colors.deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
        // variant="rounded"
      >
        b
      </Avatar>
      <Divider sx={{ height: 28, m: 0.5, p: "2px" }} orientation="vertical" />

      <Emoji />

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Feel free to leave us comment here..."
        inputProps={{ "aria-label": "comment" }}
      />

      <IconButton
        // color="secondary"
        sx={{ p: "10px" }}
        aria-label="send"
        type="submit"
      >
        {editMode ? <EditIcon /> : <SendIcon />}
      </IconButton>
    </Paper>
  );
});
