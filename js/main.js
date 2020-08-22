
// $("#input__color-hex").val()

// HEX
let inputColorHex = document.getElementById("input__color-hex")

inputColorHex.addEventListener("keyup", (event) => {
  let inputColorHexValue = event.target.value
  // document.getElementById("user-p").innerText = inputColorHexValue
  console.log(inputColorHexValue)
  document.getElementById("div__color-hex").style.background = inputColorHexValue;
})

// RGB
let inputColorRgb = document.getElementById("input__color-rgb")

inputColorRgb.addEventListener("keyup", (event) => {
  let inputColorRgbValue = event.target.value
  // document.getElementById("user-p").innerText = inputColorRgbValue
  console.log(inputColorRgbValue)
  // document.getElementById("div__color-rgb").style.background = inputColorRgbValue;
  document.getElementById("div__color-rgb").style.background = `rgb(${inputColorRgbValue})`;
})
