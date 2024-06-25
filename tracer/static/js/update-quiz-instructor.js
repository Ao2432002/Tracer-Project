document.addEventListener('DOMContentLoaded', function() {
    function addDeleteButtonToOption(optionWrapper, questionContainer) {
        const deleteOptionIcon = document.createElement('i');
        deleteOptionIcon.classList.add('bx', 'bx-x', 'delete-option');
        deleteOptionIcon.addEventListener('click', function() {
            optionWrapper.remove();
            updateCorrectAnswerOptions(questionContainer);
        });
        optionWrapper.appendChild(deleteOptionIcon);
    }

    function addOptionButtonListener(button) {
        button.addEventListener('click', function() {
            const questionContainer = button.closest('.questions-container');
            const optionsContainer = questionContainer.querySelector('.options-container');

            const newOptionIndex = optionsContainer.querySelectorAll('.option-wrapper').length + 1;
            const newOptionWrapper = document.createElement('div');
            newOptionWrapper.classList.add('option-wrapper');
            newOptionWrapper.id = `option-wrapper-${newOptionIndex}`;

            const newOptionInput = document.createElement('input');
            newOptionInput.type = 'text';
            newOptionInput.classList.add('new-option');
            newOptionInput.dataset.number = newOptionIndex;
            newOptionInput.id = `new-option-${newOptionIndex}`;
            newOptionInput.name = `newOption_${questionContainer.dataset.index}`;
            newOptionInput.placeholder = 'Option';
            newOptionInput.required = true;

            newOptionWrapper.appendChild(newOptionInput);

            if (newOptionIndex > 1) {
                addDeleteButtonToOption(newOptionWrapper, questionContainer);
            }

            optionsContainer.appendChild(newOptionWrapper);

            newOptionInput.addEventListener('input', function() {
                updateCorrectAnswerOptions(questionContainer);
            });
        });
    }

    function updateCorrectAnswerOptions(questionContainer) {
        const correctAnswerSelect = questionContainer.querySelector('.correct-answer-container select');
        correctAnswerSelect.innerHTML = '';

        const optionInputs = questionContainer.querySelectorAll('.new-option');
        optionInputs.forEach(optionInput => {
            const optionValue = optionInput.value.trim();
            if (optionValue !== '') {
                const option = document.createElement('option');
                option.classList.add('correct-answer-option');
                option.value = optionValue;
                option.textContent = optionValue;
                correctAnswerSelect.appendChild(option);
            }
        });
    }

    function addInputFieldListeners(inputField) {
        inputField.addEventListener('input', function() {
            const questionContainer = inputField.closest('.questions-container');
            updateCorrectAnswerOptions(questionContainer);
        });
    }

    function updateQuestionIndexes() {
        document.querySelectorAll('.questions-container').forEach((questionContainer, index) => {
            const newIndex = index + 1;
            questionContainer.dataset.index = newIndex;
            questionContainer.id = `questions-container-${newIndex}`;

            questionContainer.querySelectorAll('.new-option').forEach(optionInput => {
                optionInput.name = `newOption_${newIndex}`;
            });

            questionContainer.querySelector('.point').name = `Point_${newIndex}`;
            questionContainer.querySelector('.correct-answer-container select').name = `correctAnswer_${newIndex}`;
        });
    }

    document.querySelectorAll('.questions-container').forEach(questionContainer => {
        questionContainer.querySelectorAll('.option-wrapper').forEach(optionWrapper => {
            if (optionWrapper.querySelector('.new-option').dataset.number > 1) {
                addDeleteButtonToOption(optionWrapper, questionContainer);
            }
        });

        questionContainer.querySelectorAll('.new-question, .point, .new-option').forEach(inputField => {
            addInputFieldListeners(inputField);
        });

        const addOptionButton = questionContainer.querySelector('#add-option');
        if (addOptionButton) {
            addOptionButtonListener(addOptionButton);
        }

        const deleteQuestionButton = questionContainer.querySelector('.delete-question');
        if (deleteQuestionButton) {
            deleteQuestionButton.addEventListener('click', function() {
                questionContainer.remove();
                updateQuestionIndexes();
            });
        }
    });

    document.querySelector('#add-question').addEventListener('click', function() {
        const questionsContainers = document.querySelectorAll('.questions-container');
        const lastQuestionIndex = questionsContainers.length;
        const newQuestionIndex = lastQuestionIndex + 1;

        const newQuestionContainer = document.createElement('div');
        newQuestionContainer.classList.add('questions-container');
        newQuestionContainer.dataset.index = newQuestionIndex;
        newQuestionContainer.id = `questions-container-${newQuestionIndex}`;

        newQuestionContainer.innerHTML = `
            <div class="question ${newQuestionIndex}">
                <div class="new-question-container">
                    <input type="text" class="new-question" id="new-question" name="newQuestion" placeholder="Question" required>
                    <input type="text" class="point" id="point" name="Point_${newQuestionIndex}" placeholder="Point" required>
                </div>
                    
                <div class="content-option ${newQuestionIndex}">
                    <div class="options-container" id="options-container-${newQuestionIndex}">
                        <!-- Add one initial option -->
                        <div class="option-wrapper" id="option-wrapper-1">
                            <input type="text" class="new-option" id="new-option-1" name="newOption_${newQuestionIndex}" placeholder="Option" required>
                        </div>
                    </div>
                    <button type="button" id="add-option"><i class='bx bx-plus'></i></button>
                </div>
                <label>Correct Answer:</label>
                <div class="correct-answer-container">
                    <select id="correct-answer" name="correctAnswer_${newQuestionIndex}" required>
                        <!-- Initial correct answer option -->
                        <option class="correct-answer-option" value="">Choose correct answer</option>
                    </select>
                    <div class="icon">
                        <i class='bx bx-chevron-down'></i>
                    </div>
                </div>
                <button type="button" class="delete-question"><i class="bx bx-trash"></i></button>
            </div>
        `;

        const mainContainer = document.querySelector('.btn');
        mainContainer.before(newQuestionContainer);

        newQuestionContainer.querySelectorAll('.new-question, .point, .new-option').forEach(inputField => {
            addInputFieldListeners(inputField);
        });

        const newAddOptionButton = newQuestionContainer.querySelector('#add-option');
        addOptionButtonListener(newAddOptionButton);

        const deleteQuestionButton = newQuestionContainer.querySelector('.delete-question');
        deleteQuestionButton.addEventListener('click', function() {
            newQuestionContainer.remove();
            updateQuestionIndexes();
        });

        updateQuestionIndexes();
        });
    updateQuestionIndexes();
});


let quizForm = document.getElementById('add-question-form');
let flash = document.getElementById('flash');

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



