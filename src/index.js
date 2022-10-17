import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

// const theme = {
//   colors: { text: "black", accent: "orange" },
//   fonts: {
//     body: "Helvetica, sans-serif",
//     heading: "Roboto, sans-serif",
//     monospace: "monospace",
//   },
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

/**
 * Так як ThemeProvider огортає весь додаток, всі наші стилізовані компоненти у своїх пропсах
 * отримують проп theme ду будуть повністю ці обєкти theme = { colors: { text: "black", accent: "orange" } };
 */
