let money = parseInt(prompt("値段"))

if (Number.isFinite(money)) {
  document.write(`<p>${money}円</p>`);
} else {
  document.write('見つかりませんでした');
}
