module.exports = {
  value: "test",
  userDefinedMethod: function () {
    console.log(arguments)
    console.log(this.value)
  }
}
