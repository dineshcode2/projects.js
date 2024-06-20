const selectedButtons = document.querySelectorAll('.button')
console.log(selectedButtons);

const bodies = document.body;
console.log(bodies);

selectedButtons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        console.log(e.target.id)

        if (e.target.id == "grey") {
            bodies.style.backgroundColor = e.target.id
        }
        if (e.target.id == "white") {
            bodies.style.backgroundColor = e.target.id
        }
        if (e.target.id == "blue") {
            bodies.style.backgroundColor = e.target.id
        }
        if (e.target.id == "yellow") {
            bodies.style.backgroundColor = e.target.id
        }
    })
})
