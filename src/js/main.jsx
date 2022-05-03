import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/css/index.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./Layout";
import {ContextWrapper} from "./store/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextWrapper>
      <Layout />
  </ContextWrapper>
);
