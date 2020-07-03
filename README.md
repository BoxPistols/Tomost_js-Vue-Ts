# Tomost_js-Vue-Ts


## Whats this rep?
ReCurrent JS to TS / Vue

---

- app.js
  - text order use indexOf


```js
const book = "吾輩は熊である"

let keyword = prompt("検索文字")
// pos = index of book / input strings
let pos = book.indexOf(keyword)

if (pos >= 0) {
  document.write(`<p>${book}</p>`);
  document.write(`<p>${keyword}は、${pos + 1}文字目に見つかりました</p>`);
} else {
  document.write('見つかりませんでした');
}

```

### app2.js
```js
const money = parseInt(prompt("値段"))
const tax = 10

if (Number.isFinite(money)) {
  document.write(`<p>${ Math.round(money + ((money * tax) / 100)) }円</p>`);
} else {
  document.write('数字入れて');
}const money = parseInt(prompt("値段"))
const tax = 10

if (Number.isFinite(money)) {
  document.write(`<p>${ Math.round(money + ((money * tax) / 100)) }円</p>`);
} else {
  document.write('数字入れて');
}

```
