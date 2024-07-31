let celsiusInput = document.getElementById('inputCelsius').value
const tempsubmitbtn = document.querySelector('.tempsubmitbtn')
let fout = document.getElementById('fout')



/*Arrow to convert C to F*/
let fahrenheitOutPut = celsiusInput => (celsiusInput * 1.8) + 32;
let celsiusOutPut = fahrenheitInput => (fahrenheitInput - 32) / 1.8;

console.log(fahrenheitOutPut(45));

tempsubmitbtn.addEventListener('click', function () {

    fout.innerHTML = fahrenheitOutPut('celsiusInput');
    console.log("fahrenheitOutPut")
})