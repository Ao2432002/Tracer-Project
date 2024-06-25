
let quizForm = document.getElementById('add-question-form');

let flash = document.getElementById('flash');

quizForm.addEventListener('submit', (e) => {
// ------------------------------------------ Date Time Validate ------------------------ //
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const flashElement = document.querySelector('.flash');

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const currentDate = new Date();
    let totalPoints = document.querySelector('.total-point');
    let isValid = true;
    
    if (isNaN(totalPoints.value) || totalPoints.value.trim() === "") {
        isValid = false;
        let flash = document.createElement('p')
        flash.id = 'flash'
        flash.textContent = `You must enter a valid point value`
        
        totalPoints.parentElement.after(flash)
        e.preventDefault();
        flash.style.display = 'block';
        
    }

    if (startDate > endDate) {
        flashElement.textContent = 'Start date must be before end date.';
        endDateInput.value = '';
        e.preventDefault();
        return;
    } else if (startDate < currentDate) {
        flashElement.textContent = 'Start date cannot be in the past.';
        startDateInput.value = '';
        e.preventDefault();
        return;
    } else if (endDate < currentDate) {
        flashElement.textContent = 'End date cannot be in the past.';
        endDateInput.value = '';
        e.preventDefault();
        return;
    } else {
        flashElement.textContent = '';
    }

    if (!isValid) {
        e.preventDefault();
    }
});


// ------------------------------------------ Quiz Timer ------------------------ //
let quizTimerBtn = document.querySelector('.timer')
let timerOptions = document.querySelector('.timer-options')
let upDownBtn = document.querySelector('.up-down')
let closedBtn = document.querySelector('.close')
let testBtn = document.querySelector('.test')


quizTimerBtn.addEventListener('click',()=>{
    timerOptions.classList.toggle('show')
    timerOptions.classList.toggle('hidden')
})

upDownBtn.addEventListener('click',()=>{
    timerOptions.classList.toggle('down')
    upDownBtn.classList.toggle('rotate')
})

closedBtn.addEventListener('click',()=>{
    timerOptions.classList.toggle('show')
    timerOptions.classList.toggle('hidden')
})



