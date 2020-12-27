document.addEventListener("DOMContentLoaded", function (e) {
  const button = document.querySelector("#button");
  const reset = document.querySelector("#reset");
  const span = document.querySelector("#clickSpan");

  button.addEventListener("click", function (e) {
    const currentNum = parseInt(span.textContent);
    const addNum = currentNum + 1;

    span.textContent = addNum;
  });

  reset.addEventListener("click", function (e) {
    span.textContent = 0;
  });
});
