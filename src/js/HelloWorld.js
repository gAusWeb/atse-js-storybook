export const HelloWorld = {
  init() {
    const buttonTest = document.querySelector(".btn-click");

    if (!buttonTest) {
      return;
    }

    this.applyClickHandler(buttonTest);
  },

  applyClickHandler(button) {
    button.addEventListener("click", () => {
      console.log("Clicked!");
    });
  },
};
