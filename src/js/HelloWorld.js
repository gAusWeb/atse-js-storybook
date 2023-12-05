export const HelloWorld = {
  init() {
    console.log("Hello Worlds!");
    const buttonTest = document.querySelector(".btn-click");

    if (!buttonTest) {
      return;
    }

    this.applyClickHandler(buttonTest);
  },

  createButton() {
    const button = document.createElement("button");
    button.classList.add("bg-rose-600", "hover:bg-cyan-600", "p-4");
    button.innerHTML = "Click me!";
    return button;
  },

  applyClickHandler(button) {
    button.addEventListener("click", () => {
      console.log("Button clickSSS!", document.querySelector("body"));
      document.querySelector("body").appendChild(this.createButton());
    });
  },
};
