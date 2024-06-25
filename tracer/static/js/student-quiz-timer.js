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

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.querySelector('.StudentTaskForm');

    quizForm.addEventListener('submit', function(e) {
        localStorage.removeItem('studentAnswers');
    });
});


// ---------------------------------- Quiz Timer ----------------------------//

let form = document.querySelector('.StudentTaskForm')
let audioBtn = document.querySelector('.bx-alarm')

// audioBtn.addEventListener('click', ()=>{
//     audioBtn.classList.toggle('active')
// });

// Convert the countdown time to a Date object
// ------------------------------ if exist duration -------------------------#
let audio = new Audio("../static/audio/alarm.mp3");
let timeArea = document.querySelector('.total-time');
var countdown = new Date(timeArea.getAttribute('data-end_time'));
var duration = timeArea.getAttribute('data-duration') * 60;
let timeLeft = document.querySelector('.time-left');

function updateRemainingTime() {
    var currentTime = new Date();
    
    var difference = countdown.getTime() - currentTime.getTime();
    
    var seconds = Math.floor(difference / 1000);
    
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;
    
    var timeString = '';
    if (hours > 0) {
        if (hours < 10) {
            timeString += "0" + hours + ':';
        }else{
            timeString += hours + ':';
        }
    }
    if (minutes > 0 || hours > 0) {
        if (minutes < 10) {
            timeString += "0" + minutes + ':';
        }else{
            timeString += minutes + ':';
        }
    }
    if (remainingSeconds < 10) {
        timeString += "0" + remainingSeconds;
    }else{
        timeString += remainingSeconds;
    }
    timeArea.textContent = timeString;
    
    var totalTimeSec = hours * 3600 + minutes * 60 + remainingSeconds;

    // ---------------------------- Alarm after 2 min left -----------------------#
    if (totalTimeSec == 120) {
            audio.play();
    }
    
    if (totalTimeSec <= 0) {

        form.setAttribute('novalidate', true)
        form.submit();
    }

    var progress = (totalTimeSec / duration) * 100;
    timeLeft.style.width = progress + '%';
}

updateRemainingTime();

var counter =setInterval(updateRemainingTime, 1000);

if (form.clientHeight >= 593) {
    form.classList.add('over')
}

// ---------------------------------- Submit form after end time----------------------------//
function autoSubmitForm() {
    let currentTime = new Date();
    let endTime = new Date(timeArea.getAttribute('data-end_date'));
    if (currentTime >= endTime) {
        form.setAttribute('novalidate', true);
        form.submit();
    }
}

autoSubmitForm();
setInterval(autoSubmitForm, 1000);