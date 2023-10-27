// // vendor js
// import { createPopper } from "@popperjs/core";
// import Modal from "bootstrap/js/src/Modal";
// import Dropdown from "bootstrap/js/src/Dropdown";
// import Collapse from "bootstrap/js/src/Collapse";

// // custom js
import { HelloWorld } from "./HelloWorld";

const runOnInit = () => {
  // console.log("Init");
};

const runOnPageChange = () => {
  // console.log("Page has changed!");
  HelloWorld.init();
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    runOnInit();
    const callback = function (mutationsList) {
      for (let i = 0, len = mutationsList.length; i < len; i++) {
        if (mutationsList[i].type == "childList") {
          runOnPageChange();
          break;
        }
      }
    };

    const observer = new MutationObserver(callback);
    const config = { childList: true, subtree: false };
    observer.observe(document.getElementById("storybook-root"), config);
  },
  false
);
