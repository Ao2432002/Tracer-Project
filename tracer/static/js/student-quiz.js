document.querySelector(".Submit").onclick = function() {
    document.querySelector(".center").style.opacity = "1";
    document.querySelector(".center").style.pointerEvents = "all";
}

document.querySelector(".Cancel").onclick = function() {
    document.querySelector(".center").style.opacity = "0";
    document.querySelector(".center").style.pointerEvents = "none";
}

// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Quiz'
    }
}, 3000);

// Save student answers to localStorage
document.querySelector('.StudentTaskForm').addEventListener('change', function() {
    const formData = new FormData(this);
    const answers = {};

    for (const [key, value] of formData.entries()) {
        answers[key] = value;
    }
    localStorage.setItem('studentAnswers', JSON.stringify(answers));
});

// Retrieve data from localStorage and display it
document.addEventListener('DOMContentLoaded', function() {
    const storedAnswers = localStorage.getItem('studentAnswers');
    if (storedAnswers) {
        const answers = JSON.parse(storedAnswers);
        Object.entries(answers).forEach(([key, value]) => {
            const input = document.querySelector(`input[name="${key}"][value="${value}"]`);
            if (input) {
                input.checked = true;
            }
        });
    }
});

// Clear localStorage on form submission
document.querySelector('.StudentTaskForm').addEventListener('submit', function() {
    localStorage.removeItem('studentAnswers');
});

// ------------------- Submit form when end time is ended ----------------- //

let endDateElement = document.querySelector('.end_date');

let endDate = new Date(endDateElement.textContent);

let form = document.querySelector('.StudentTaskForm');

function checkTime() {
    let currentTime = new Date();
    
    if (currentTime >= endDate) {
        form.submit();
    }
}

setInterval(checkTime, 1000);







