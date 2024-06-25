const addOptionButton = document.getElementById('add-option');
const optionsContainer = document.getElementById('options-container');
const correctAnswerDropdown = document.getElementById('correct-answer');
let optionCount = 1;

addOptionButton.addEventListener('click', function() {
    const optionWrapper = document.createElement('div');
    optionWrapper.className = 'option-wrapper'; // Adding a class to the wrapper for styling purposes

    const newOptionInput = document.createElement('input');
    newOptionInput.type = 'text';
    newOptionInput.className = 'new-option';
    newOptionInput.id = 'new-option';
    newOptionInput.name = `newOption_1`; // Using optionCount to generate unique names
    newOptionInput.placeholder = `Option`;
    newOptionInput.required = true;

    const deleteButton = document.createElement('i');
    deleteButton.className = 'bx bx-x';
    deleteButton.addEventListener('click', function() {
        optionsContainer.removeChild(optionWrapper); // Removing the wrapper containing the option and delete button
        updateCorrectAnswerOptions();
    });

    optionWrapper.appendChild(newOptionInput);
    optionWrapper.appendChild(deleteButton);
    optionsContainer.appendChild(optionWrapper);
    updateCorrectAnswerOptions();
    optionCount++; // Incrementing optionCount for unique names
});

function updateCorrectAnswerOptions() {
    correctAnswerDropdown.innerHTML = ''; // Clear existing options
    const newOptions = document.querySelectorAll('#options-container .new-option');
    newOptions.forEach(option => {
        const newOptionValue = option.value.trim();
        if (newOptionValue !== '') {
            const newOption = document.createElement('option');
            newOption.value = newOptionValue;
            newOption.textContent = newOptionValue;
            correctAnswerDropdown.appendChild(newOption);
        }
    });
}

optionsContainer.addEventListener('input', updateCorrectAnswerOptions);


document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('questions-container');
    let questionCount = 1;

    function updateCorrectAnswerOptions(optionsContainer, correctAnswerDropdown) {
        correctAnswerDropdown.innerHTML = '';
        const newOptions = optionsContainer.querySelectorAll('.new-option');
        newOptions.forEach(option => {
            const newOptionValue = option.value.trim();
            if (newOptionValue !== '') {
                const newOption = document.createElement('option');
                newOption.value = newOptionValue;
                newOption.textContent = newOptionValue;
                correctAnswerDropdown.appendChild(newOption);
            }
        });
    }

    function createNewQuestion() {
        questionCount++;
        const newQuestionDiv = document.createElement('div');
        newQuestionDiv.className = `question ${questionCount}`;

        const newQuestionContainer = document.createElement('div');
        newQuestionContainer.className = 'new-question-container';
    
        const newQuestionInput = document.createElement('input');
        newQuestionInput.type = 'text';
        newQuestionInput.className = 'new-question';
        newQuestionInput.name = `newQuestion`;
        newQuestionInput.placeholder = 'Question';
        newQuestionInput.required = true;
        
        const newPoint = document.createElement('input');
        newPoint.type = 'text';
        newPoint.className = 'point';
        newPoint.name = `Point_${questionCount}`;
        newPoint.placeholder = 'Point';
        newPoint.required = true;

        newQuestionContainer.appendChild(newQuestionInput);
        newQuestionContainer.appendChild(newPoint);

        const contentOption = document.createElement('div');
        contentOption.className = `content-option ${questionCount}`;
    
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
    
        function createNewOptionInput(isFirstOption, optCount) {
            const optionWrapper = document.createElement('div');
            optionWrapper.className = 'option-wrapper'; // Adding a wrapper for option and delete button
            
            const newOptionInput = document.createElement('input');
            newOptionInput.type = 'text';
            newOptionInput.className = 'new-option';
            newOptionInput.id = 'new-option';
            newOptionInput.name = `newOption_${optCount}`;
            newOptionInput.placeholder = 'Option';
            newOptionInput.required = true;
            
            const deleteButton = document.createElement('i');
            deleteButton.className = 'bx bx-x';
            
            if (!isFirstOption) {
                deleteButton.addEventListener('click', function() {
                    optionsContainer.removeChild(optionWrapper); // Removing the option wrapper
                    updateCorrectAnswerOptions(optionsContainer, correctAnswerDropdown);
                });
            } else {
                deleteButton.style.display = 'none'; // Hide delete button for first option
            }
            
            optionWrapper.appendChild(newOptionInput);
            optionWrapper.appendChild(deleteButton);
            optionsContainer.appendChild(optionWrapper);
        }
        
        createNewOptionInput(true, questionCount);
    
        const addOptionButton = document.createElement('button');
        addOptionButton.type = 'button';
        addOptionButton.id = 'add-option';
        addOptionButton.innerHTML = "<i class='bx bx-plus'></i>";
        addOptionButton.addEventListener('click', function(e) {
            let optCount = e.target.parentNode.classList[1];
            createNewOptionInput(false, optCount);
        });

        contentOption.appendChild(optionsContainer);
        contentOption.appendChild(addOptionButton);
        
        const correctAnswerContainer = document.createElement('div');
        correctAnswerContainer.className = 'correct-answer-container';

        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.innerHTML = '<i class="bx bx-chevron-down"></i>';

        const labelCorrectAnswerDropdown = document.createElement('label');
        labelCorrectAnswerDropdown.textContent = 'Correct Answer:';

        const correctAnswerDropdown = document.createElement('select');
        correctAnswerDropdown.id = 'correct-answer'
        correctAnswerDropdown.name = `correctAnswer_${questionCount}`;
        correctAnswerDropdown.required = true;
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Correct Answer';
        correctAnswerDropdown.appendChild(defaultOption);
        optionsContainer.addEventListener('input', function() {
            updateCorrectAnswerOptions(optionsContainer, correctAnswerDropdown);
        });

        correctAnswerContainer.appendChild(correctAnswerDropdown)
        correctAnswerContainer.appendChild(icon)
    
        const deleteQuestionButton = document.createElement('button');
        deleteQuestionButton.innerHTML = "<i class='bx bx-trash'></i>";
        // deleteQuestionButton.textContent = "Delete Question";
        deleteQuestionButton.className = 'delete-question';
        deleteQuestionButton.type = 'button';
        deleteQuestionButton.addEventListener('click', function() {
            questionsContainer.removeChild(newQuestionDiv);
            questionCount--
            updateQuestionNames();
        });
    
        newQuestionDiv.appendChild(newQuestionContainer);
        newQuestionDiv.appendChild(contentOption);
        newQuestionDiv.appendChild(labelCorrectAnswerDropdown);
        newQuestionDiv.appendChild(correctAnswerContainer);
        newQuestionDiv.appendChild(deleteQuestionButton);
    
        questionsContainer.appendChild(newQuestionDiv);
    }

    function updateQuestionNames() {
        const questions = questionsContainer.querySelectorAll('.question');
        questions.forEach((question, index) => {
            const inputs = question.querySelectorAll('input, select');
            question.className = `question ${index + 1}`.trim();
            inputs.forEach(input => {
                let name = input.getAttribute('name');
                if (name) {
                    const newName = name.replace(/\d+/, index + 1);
                    input.setAttribute('name', newName);
                }
            });
        });
        updateContentOptionNames()
    }

    function updateContentOptionNames() {
        const contentOptions = questionsContainer.querySelectorAll('.content-option');
        contentOptions.forEach((contentOption, index) => {
            contentOption.className = contentOption.className.replace(/\bcontent-option \d+\b/, `content-option ${index + 1}`);
    
            const optionInputs = contentOption.querySelectorAll('.new-option');
            optionInputs.forEach(input => {
                let name = input.getAttribute('name');
                if (name) {
                    const newName = name.replace(/\d+/, index + 1);
                    input.setAttribute('name', newName);
                }
            });
    
            const addOptionButton = contentOption.querySelector('#add-option');
            if (addOptionButton) {
                addOptionButton.parentNode.className = `content-option ${index + 1}`;
            }
        });
    }
    const addQuestionButton = document.getElementById('add-question');
    addQuestionButton.addEventListener('click', createNewQuestion);
});


let quizForm = document.getElementById('add-question-form');

quizForm.addEventListener('submit', (e) => {
    let points = document.querySelectorAll('.point');
    let isValid = true; 
    
    points.forEach(point => {
        if (isNaN(point.value) || point.value.trim() === '') {
            isValid = false;
            let flash = document.createElement('p')
            flash.id = 'flash'
            flash.textContent = `You must enter a valid point value`
            
            point.parentElement.after(flash)
            e.preventDefault();
            flash.style.display = 'block';
            return;
        }
    });

// ------------------------------------------ Date Time Validate ------------------------ //
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const flashElement = document.querySelector('.flash');

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const currentDate = new Date();

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



