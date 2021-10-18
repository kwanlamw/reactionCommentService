import { Dispatch } from "redux";
// import { ICommentProps } from "../../components/Comment";
import {
  setIsProcessing,
  setListComment,
  updateCommentFail,
  updateCommentSuccess,
} from "./actions";

const { REACT_APP_API_SERVER } = process.env;

export const getListCommentThunk = () => {
  return async (dispatch: Dispatch) => {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   dispatch(loginFail(""));
    // }
    const res = await fetch(`${REACT_APP_API_SERVER}/comment`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
    });
    // if (res.status === 401) {
    //   dispatch(loginFail(""));
    // }
    if (res.status === 200) {
      const data = await res.json();
      dispatch(setListComment(data.listComment));
    }
  };
};

interface IUpdatedData {
  index_value: number;
  item_id: number;
  main: string;
  user_id: number;
  //   group_id: number;
  date: Date;
  //   image: string;
}

export const updateCommentThunk = (updatedData: IUpdatedData) => {
  return async (dispatch: Dispatch) => {
    // console.log("In update thunk");

    // const token = localStorage.getItem("token");

    // if (!token) {
    //   dispatch(loginFail(""));
    // }
    dispatch(setIsProcessing());
    const res = await fetch(`${REACT_APP_API_SERVER}/comment/update`, {
      method: "PUT",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: updatedData.item_id,
        // inventory_id: updatedData.inventory_id,
        // quantity: updatedData.quantity,
        // updated_quantity: updatedData.updated_quantity,
      }),
    });

    // if (res.status === 401) {
    //   dispatch(loginFail(""));
    // }
    if (res.status === 200) {
      const message = await res.json();
      // console.log(message);
      dispatch(updateCommentSuccess(updatedData.index_value, updatedData.main));
    } else {
      // console.log("delete fail")
      dispatch(updateCommentFail());
    }
  };
};
