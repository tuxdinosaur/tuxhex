// $("#input__color-hex").val()

// HEX
let inputColorHex = document.getElementById("input__color-hex")

inputColorHex.addEventListener("keyup", (event) => {
  let inputColorHexValue = event.target.value
  // document.getElementById("user-p").innerText = inputColorHexValue
  console.log(inputColorHexValue)
  document.getElementById("div__color-hex").style.background = inputColorHexValue;
})
