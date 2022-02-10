let memo = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const tuika = document.getElementById("memo-container")

console.log(memo.textContent)
addButton.onclick = function () {
  const memo1 = memo.value
  console.log(memo1)

  const add = document.createElement("div")
  add.className = add
  add.textcontent = memo1

  tuika.append(memo1)
}
console.dir(addButton)
console.dir(memo)
