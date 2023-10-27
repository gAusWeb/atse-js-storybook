// // vendor js
// import { createPopper } from "@popperjs/core";
// import Modal from "bootstrap/js/src/Modal";
// import Dropdown from "bootstrap/js/src/Dropdown";
// import Collapse from "bootstrap/js/src/Collapse";

// // custom js
import { HelloWorld } from "./HelloWorld";

// on domLoad handler
// let handleDomLoaded = function () {
//   // Declare JS Components
//   HelloWorld.init();
//   // HelloWorld.applyClickHandler();
//   // createPopper;
//   // Modal;
//   // Dropdown;
//   // Collapse;
//   // AOS.init({ duration: 1000 });
//   // NavigationMenu.init();
//   // HomeCarousel.init();
//   // AnimatedCircles.init();
//   // StaticLogoGrid.init();
//   // InsightsLoadMoreArticles.init();

//   console.log("yo test-123", document.querySelector(".test-123"));
// };

// // domReady Events
// if (
//   document.readyState === "complete" ||
//   (document.readyState !== "loading" && !document.documentElement.scroll)
// ) {
//   console.log("domReady");
//   handleDomLoaded();
// } else {
//   // Initialise JS components
//   console.log("domReady DOMContentLoaded", document);
//   document.addEventListener("DOMContentLoaded", handleDomLoaded);
//   // document.addEventListener("scroll", NavigationMenu.scroll);
//   // document.addEventListener("scroll", AnimatedCircles.scroll);
// }

// window.onresize = () => {
//     NavigationMenu.resize();
//     StaticLogoGrid.resize();
// };

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
