import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
const makeStore = (context: Context) => {
  const store: Store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
  );
  return store;
};

// Create a wrapper with Next.js context
export const wrapper = createWrapper(makeStore, { debug: true });

// Add support for server-side rendering
export const reducer = (state: RootState, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return rootReducer(state, action);
  }
};
