// // vendor js
// import { createPopper } from "@popperjs/core";
// import Modal from "bootstrap/js/src/Modal";
// import Dropdown from "bootstrap/js/src/Dropdown";
// import Collapse from "bootstrap/js/src/Collapse";

// // custom js
import { HelloWorld } from "./HelloWorld";

let handleDomLoaded = function () {
  // Declare JS Components
  HelloWorld.init();
};

// domReady Events
if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.scroll)
) {
  handleDomLoaded();
} else {
  // Initialise JS components
  document.addEventListener("DOMContentLoaded", handleDomLoaded);
}

// window.onresize = () => {
//     NavigationMenu.resize();
//     StaticLogoGrid.resize();
// };
