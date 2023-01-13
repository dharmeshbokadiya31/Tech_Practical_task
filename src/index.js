import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./tailwind.generated.css";
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

