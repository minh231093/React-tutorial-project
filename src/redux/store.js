// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../redux/reducers/rootReducer";
// import thunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducers/rootReducer";
// import thunk from "redux-thunk";

// Kiểm tra xem Redux DevTools có sẵn hay không
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer
  //   composeEnhancers(applyMiddleware(thunk))
);

export default store;
