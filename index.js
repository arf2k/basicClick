document.addEventListener("DOMContentLoaded", function (e) {
  const button = document.querySelector("#button");

  button.addEventListener("click", function (e) {
    const span = document.querySelector("#clickSpan");
    const currentNum = parseInt(span.textContent);
    const newNum = currentNum + 1;

    span.textContent = newNum;
  });
});
