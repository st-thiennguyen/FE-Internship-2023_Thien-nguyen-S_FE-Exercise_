window.onload = () => {
  calculation();
};

const calculation = () => {
  const btn = document.querySelector("#btn-submit");
  btn.addEventListener("click", () => {
    var numOne = Number(document.querySelector("#numOne").value) ?? 0;
    var numTwo = Number(document.querySelector("#numTwo").value) ?? 0;
    const sum = numOne + numTwo;
    const minus = numOne - numTwo;
    document.querySelector("#result").innerText =
      "SUM : " + sum + "\nMINUS : " + minus;
  });
};
