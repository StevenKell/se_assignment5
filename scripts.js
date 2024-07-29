
let submitbtn = document.querySelector('.submitbtn');
let name1 = 0;

const bmi1output = document.getElementById('bmi1output');
const bmi2output = document.getElementById('bmi2output');
const bmi3output = document.getElementById('bmi3output');


function calcBMI(weight, height) {
    return weight / (height * height);


}

submitbtn.addEventListener('click', function () {
    name1 = document.getElementById("name1").value;
    console.log(name1);

    weight1 = document.getElementById("weight1").value;
    console.log(weight1);

    height1 = document.getElementById("height1").value;
    console.log(height1);

    /* BMI 1 output */
    let bmi1 = Math.round(calcBMI(weight1, height1));
    bmi1output.textContent = bmi1;


    name2 = document.getElementById("name2").value;
    console.log(name2);

    weight2 = document.getElementById("weight2").value;
    console.log(weight2);

    height2 = document.getElementById("height2").value;
    console.log(height2);

    /* BMI 2 output */
    let bmi2 = Math.round(calcBMI(weight2, height2));
    bmi2output.textContent = bmi2;
    /* Comapare BMI and outputs which is */
    

    if (bmi1 > bmi2) {
        bmi3output.textContent = `${name1}s BMI at ${bmi1} is higher than ${name2}s `;
    } else {
        bmi3output.textContent = `${name2}s BMI at ${bmi2} is higher than ${name1}s `;

    }
    

    console.log(resultHolder)
    bmi3output.textContent = resultHolder;


}
)