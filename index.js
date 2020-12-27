document.addEventListener("DOMContentLoaded", function (e) {
  const up = document.querySelector("#up");
  const down = document.querySelector("#down");
  const reset = document.querySelector("#reset");
  const span = document.querySelector("#clickSpan");

  up.addEventListener("click", function (e) {
    const currentNum = parseInt(span.textContent);
    const addNum = currentNum + 1;

    span.textContent = addNum;
  });

  reset.addEventListener("click", function (e) {
    span.textContent = 0;
  });

  down.addEventListener("click", function (e) {
    const currentNum = parseInt(span.textContent);
    const subNum = currentNum - 1;
    span.textContent = subNum;
  });
});

// add stopwatch to show num of clicks in num of seconds
