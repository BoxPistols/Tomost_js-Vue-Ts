const money = parseInt(prompt("値段"))
const tax = 10

if (Number.isFinite(money)) {
  document.write(`<p>${ Math.round(money + ((money * tax) / 100)) }円</p>`);
} else {
  document.write('数字入れて');
}
