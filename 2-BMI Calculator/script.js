const form = document.querySelector('form')
// this usecase will give empty value
// const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')

    if (weight === '' || weight <= 0 || isNaN(weight) || weight >= 150) {
        result.innerHTML = 'Please Give Valid Weight'
    } else if (height === '' || height <= 0 || isNaN(height) || height >= 215) {
        result.innerHTML = 'Please Give Valid Height'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);

        //to check bmi weight guideline
        if (bmi <= 18.6) {
            result.innerHTML = `Your BMI is ${bmi} & You're Under Weight`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `Your BMI is ${bmi} & Your Weight Is Normal`;
        } else if (bmi > 24.9) {
            result.innerHTML = `Your BMI is ${bmi} & You're Overweight`;
        }
    }
})