import React, { memo } from "react";
import { Emoji } from ".";
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

interface CommentProps {
  mode: string | null;
  // index: any;
  // user:any;
  content: string;
  reply?: Array<CommentProps>;
  paperWidth: number;
}

const Comment: React.FC<CommentProps> = (props) => {
  // const [mode, setMode] = React.useState(props.mode);
  // const [reply, setReply] = React.useState(1);

  // React.useEffect(() => {
  //   if (props.mode) {
  //     setMode(mode);
  //   }
  // }, [props.mode, setMode]);

  const replyFunction = () => {
    if (props.reply) {
      console.log(props.reply);
      // props.reply.splice(0, 0, [{ content: "" }]);
      console.log(props.reply);
    }
    alert("need to add reply comment area");
  };

  const randomColor = () => {
    const anyColors = colors as any;
    const colorOpts = Object.keys(anyColors);
    const randomKey = Math.floor(Math.random() * colorOpts.length);
    const randomColorTheme = colorOpts[randomKey]; //     _.shuffle(Object.keys(anyColors))[0];
    const colorKeys = Object.keys(anyColors[randomColorTheme]);
    const randomKey2 = Math.floor(Math.random() * colorKeys.length);
    const randomColorCode = colorKeys[randomKey2];

    return anyColors[randomColorTheme][randomColorCode];
  };

  // randomColor();

  return (
    <Paper
      component="form"
      sx={{
        p: "0px 2px",
        display: "flex",
        alignItems: "center",
        minWidth: props.paperWidth || 300,
      }}
    >
      <Grid container flexDirection="column">
        <Grid container flexDirection="row" id="main">
          <Avatar
            sx={{
              m: "6px 2px",
              p: "4px",
              width: 20,
              height: 20,
              bgcolor: randomColor(),
            }}
            alt="User"
            src="/broken-image.jpg"
            // variant="rounded"
          >
            a
          </Avatar>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Emoji />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            readOnly={!props.mode}
            placeholder="Feel free to leave us comment here..."
            inputProps={{ "aria-label": "comment" }}
            // value={props.value}
            defaultValue={props.content}
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
        {props.reply && (
          <Grid
            container
            flexDirection="row"
            justifyContent="flex-end"
            // id="reply"
          >
            {props.reply?.map((item, index) => (
              <Grid item xs={8} key={index} p="1px" id="reply">
                <Comment
                  mode={item.mode}
                  content={item.content}
                  reply={item.reply}
                  paperWidth={200}
                  // bgcolor={colors.blueGrey[500]}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default memo(Comment);
