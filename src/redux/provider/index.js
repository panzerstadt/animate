import React from "react";

import { Provider } from "react-redux";
import store from "../store";

const withProvider = BaseComponent => ({ ...rest }) => (
  <Provider store={store}>
    <BaseComponent {...rest} />
  </Provider>
);

export default withProvider;
