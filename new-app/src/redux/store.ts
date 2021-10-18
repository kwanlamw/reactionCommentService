import {
  RouterState,
  connectRouter,
  routerMiddleware,
  CallHistoryMethodAction,
} from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk, { ThunkDispatch as OldThunkDispatch } from "redux-thunk";
// // import logger from 'redux-logger';

// import { IAuthState } from './auth/state';
// import { authReducers } from './auth/reducers';
// import { IAuthActions } from './auth/actions';

import { ICommentState } from "./comment/state";
import { commentReducers } from "./comment/reducers";
import { ICommentActions } from "./comment/actions";

export const history = createBrowserHistory();

// // Step 1: IRootState
export interface IRootState {
  // auth: IAuthState;
  comment: ICommentState;
  //   emoji: IEmojiState;
}

// // Step 2: IRootAction
export type IRootAction =
  // | IAuthActions
  ICommentActions;
// | IEmojiActions
// | CallHistoryMethodAction;

// // Step 3: rootReducers
const rootReducers = combineReducers<IRootState>({
  // auth: authReducers,
  comment: commentReducers,
  // emoji: IEmojiReducers,
  // router: connectRouter(history),
});

// // Step 4: Middleware
declare global {
  /* tslint:disable:interface-name */
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export type ThunkDispatch = OldThunkDispatch<IRootState, null, IRootAction>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // Step 5: createStore
export default createStore<IRootState, IRootAction, {}, {}>(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk),
    // applyMiddleware(logger),
    applyMiddleware(routerMiddleware(history))
  )
);
