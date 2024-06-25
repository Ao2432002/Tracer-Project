let form = document.querySelector('.response-form')

form.addEventListener('submit', (e) => {
    let allDegrees = document.querySelectorAll('.degree-input')
    let totalPoints = parseInt(document.querySelector('.total-point').textContent)
    let flash = document.querySelector('.flash')

    let isValid = true
    allDegrees.forEach(degree => {
        let degreeValue = parseFloat(degree.value)
        if (degreeValue > totalPoints) {
            degree.value = ''
            isValid = false
            flash.innerHTML = 'Degree value cannot exceed total points'
        }
    })

    if (!isValid) {
        e.preventDefault()
    }
})


let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    } else {
        title.innerHTML = 'Responses'
    }
}, 3000);