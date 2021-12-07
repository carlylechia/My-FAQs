const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question__button");

  function showAnswer() {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });

    question.classList.toggle("show-answer");
  }

  btn.addEventListener("click", showAnswer);
});