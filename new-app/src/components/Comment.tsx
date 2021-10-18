import React, { memo } from "react";
import { Emoji } from "../components";
import {
  Paper,
  InputBase,
  IconButton,
  Avatar,
  colors,
  Divider,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";

interface ICommentProps {
  mode: string | null;
  // index: any;
  // user:any;
  main: string;
  // reply?: any; //array
  paperWidth: number;
}

const Comment: React.FC<ICommentProps> = (props) => {
  // const [mode, setMode] = React.useState(props.mode);
  // const [reply, setReply] = React.useState(1);

  // React.useEffect(() => {
  //   if (props.mode) {
  //     setMode(mode);
  //   }
  // }, [props.mode, setMode]);

  const replyFunction = () => {
    alert("need to add reply comment area");
  };
  const randomColor = () => {
    console.log(typeof colors);
  };

  // randomColor(10, 20);

  return (
    <Paper
      component="form"
      sx={{
        p: "4px",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        minWidth: props.paperWidth || 200,
      }}
    >
      <Grid container direction="column">
        <Grid container direction="row" id="reply" alignItems="center">
          <Avatar
            sx={{ width: 14, height: 14, bgcolor: colors.blueGrey[500] }}
            alt="User"
            src="/broken-image.jpg"
            // variant="rounded"
          >
            a
          </Avatar>
          <Divider
            sx={{ height: 14, m: 0.5, p: "2px" }}
            orientation="vertical"
          />

          <Emoji />

          <InputBase
            readOnly={!props.mode}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Feel free to leave us comment here..."
            inputProps={{ "aria-label": "comment" }}
            // value={props.value}
            defaultValue={props.main}
            multiline
          />

          {props.mode && (
            <IconButton
              // color="secondary"
              sx={{ p: "5px" }}
              aria-label="send"
              type="submit"
            >
              {props.mode === "add" ? <SendIcon /> : <EditIcon />}
            </IconButton>
          )}
          {props.mode !== "add" && (
            <IconButton
              // color="secondary"
              sx={{ p: "5px" }}
              aria-label="reply"
              // type="submit"
              onClick={replyFunction}
            >
              <ReplyIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(Comment);