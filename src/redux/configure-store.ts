import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import userSlice from "./userSlice";
import LoaderSlice from "./LoaderSlice";
import feedbacksSlice from "./feedbacksSlice";


const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({ history: createBrowserHistory() });
  
  export const store = configureStore({
    reducer: combineReducers({
      router: routerReducer,
      user: userSlice,
      loading: LoaderSlice,
      feedbacks: feedbacksSlice,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
  });
  
  export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
