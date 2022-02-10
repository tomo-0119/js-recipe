const nyuuRyokuGaku = document.getElementById("nyuuryokugaku")
const nyuuKin = document.getElementById("nyuukin")
const syukKin = document.getElementById("syukkin")
const zanDaka = document.getElementById("zandaka")
const hello = document.getElementById("hello")

//  入力額表示方法？
nyuuRyokuGaku.textContent = ""

// 入力ボタンの処理
nyuuKin.onclick = function () {
  // 表示の変更方法？
  zanDaka.textContent = zanDaka.textContent + nyuuRyokuGaku.textContent
  hello.textContent = "こんばんは"
}
// 出金ボタンの処理
syukKin.onclick = function () {}
