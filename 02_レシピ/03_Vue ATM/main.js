// const nyuuRyokuGaku = document.getElementById("nyuuryokugaku")
// const nyuuKin = document.getElementById("nyuukin")
// const syukKin = document.getElementById("syukkin")
// const zanDaka = document.getElementById("zandaka")
const now = new Date()

//  入力額を表示するには？
//入力額にinputタグの入力文字を反映するには？
Vue.createApp({
  data() {
    return {
      //deposit_amountの中身
      deposit_amount: 0,
      //zandakaの中身
      zandaka: 0,
      //logの中身
      logs: [
        {
          date: now,
          type: "入金出金のどっちか",
          money: "金額表示",
        },
        {
          date: "日付",
          type: "入金出金のどっちか",
          money: "金額表示",
        },
      ],
    }
  },
  methods: {
    deposit: function () {
      //入金の処理
      this.zandaka += Number(this.deposit_amount)
      // 入金後の取引記録を表示
      this.logs.push(this.logs)
    },
    // 出金の処理
    withdraw: function () {
      this.zandaka -= Number(this.deposit_amount)
    },
  },
}).mount("#deposit_amount")

// Vue.createApp({
//   data() {
//     return {
//       zandaka: 0,
//     }
//   },
// }).mount("#zandaka")

// Vue.createApp({
//   //取引記録の追加を行う
//   data() {
//     return {}
//   },
// }).mount("#logs")
