/**
 * Math.random() = 0 ~ 1 random
 * parseInt(Math.random())
 */

// console.log(parseInt(Math.random()*10))
// document.write(parseInt(Math.random()*10))
// document.write(Math.floor(Math.random()*10))

const q1 = Math.floor(Math.random() * 10)
const q2 = Math.floor(Math.random() * 10)

const total = q1 + q2

const answer = parseInt(prompt(`足し算、${q1} + ${q2}は?`))

document.write(`<p>足し算、${q1} + ${q2}は?</p>`)

if (total === answer) {
  document.write(`<p>${answer}は正解！</p>`)
} else {
  document.write(`<p>${answer}は間違い。。。</p>`)
}
