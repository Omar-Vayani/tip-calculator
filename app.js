const ammount = document.querySelector(".ammount");
const tip = document.querySelector(".tip");
const tipAmmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  tipAmmount.innerHTML = `Tip ammount: $${(ammount.value / 100) * tip.value}`;
  total.innerHTML = `Total Ammount: $${
    ammount.value * 1 + (ammount.value / 100) * tip.value
  }`;
  ammount.value = null;
  tip.value = null;
});
