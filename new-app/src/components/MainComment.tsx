import React, { memo } from "react";
import { Emoji, ReplyList } from ".";
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

interface MainCommentProps {
  mode: string | null;
  // index: any;
  // user:any;
  main: string;
  reply?: any; //array
  paperWidth: number;
}

const Comment: React.FC<MainCommentProps> = (props) => {
  // const [mode, setMode] = React.useState(props.mode);
  // const [reply, setReply] = React.useState(1);

  // React.useEffect(() => {
  //   if (props.mode) {
  //     setMode(mode);
  //   }
  // }, [props.mode, setMode]);

  const replyFunction = () => {
    console.log(props.reply);
    props.reply.splice(0, 0, {});
    console.log(props.reply);
    // alert("need to add reply comment area");
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
        // justifyContent: "center",
        minWidth: props.paperWidth || 300,
      }}
    >
      <Grid container direction="column">
        <Grid container direction="row" id="main" alignItems="center">
          <Avatar
            sx={{ width: 28, height: 28, bgcolor: colors.deepOrange[500] }}
            alt="User"
            src="/broken-image.jpg"
            // variant="rounded"
          >
            a
          </Avatar>
          <Divider
            sx={{ height: 28, m: 0.5, p: "2px" }}
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
              sx={{ p: "10px" }}
              aria-label="send"
              type="submit"
            >
              {props.mode === "add" ? <SendIcon /> : <EditIcon />}
            </IconButton>
          )}
          {props.mode !== "add" && (
            <IconButton
              // color="secondary"
              sx={{ p: "10px" }}
              aria-label="reply"
              // type="submit"
              onClick={replyFunction}
            >
              <ReplyIcon />
            </IconButton>
          )}
        </Grid>
        {
          <Grid container direction="row" id="reply">
            {props.reply && <ReplyList list={props.reply} />}
          </Grid>
        }
      </Grid>
    </Paper>
  );
};

export default memo(Comment);
