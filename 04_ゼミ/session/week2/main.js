let memo = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")

console.log(memo.textContent)
addButton.onclick = function () {
  console.log(memo.value)

  const add = document.createElement("div")
  add.textContent = memo.value
  container.append(add)

  memo.value = ""
}
console.dir(addButton)
console.dir(memo)
