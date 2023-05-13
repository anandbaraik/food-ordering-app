import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MenuContextProvider, useMenuContext } from "./Context/MenuContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { useMenuContext };
root.render(
  <StrictMode>
    <Router>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </Router>
  </StrictMode>
);
