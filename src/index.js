import List from "./lib/list.js";
import Lecture from "./lib/lecture.js";
import { readButton } from "./lib/helpers";

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector("body");
  const isLecturePage = page.classList.contains("lecture-page");

  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load();
  } else {
    const list = new List();
    list.load();
    const buttons = document.querySelectorAll(".buttons__button");
    for (const button of document.querySelectorAll(".buttons__button")) {
      button.addEventListener("click", readButton);
    }
    console.log(buttons.length);
  }
});
