import React, { memo } from "react";
import { Box, Grid } from "@mui/material";
import { Comment, CommentList } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../redux/store";
import { Switch, Route } from "react-router-dom";

const HomePage: React.FC = () => {
  //   const dispatch = useDispatch();

  //   const group_id = useSelector((state: IRootState) => state.items.group_id);
  //   const profile = useSelector((state: IRootState) => state.groups.profile);

  //   useEffect(() => {
  //     dispatch(getUsernameByTokenThunk());
  //     const group_id = localStorage.getItem("group_id");
  //     if (!group_id) {
  //       dispatch(getDefaultGroupByTokenThunk());
  //     }
  //   }, [dispatch]);

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
    <div className="MainPage">
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
};

export default HomePage;
