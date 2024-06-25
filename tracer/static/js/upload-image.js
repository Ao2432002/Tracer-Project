// -------------------------- DOM Elements --------------------------------------//


// --------------------------Upload DOM Elements -----------------------------//
let uploadForm = document.getElementById('uploadForm')
// All Input Fields
let inputFields = document.querySelectorAll('.imges .img input')
// All Images
let imagesArea = document.querySelectorAll('.imges .img')
let images = document.querySelectorAll('.imges .img img')
let helpText = document.querySelector('.help-text')
let lable = document.querySelectorAll('.lable')

// -------------------------- upload-image Validate----------------------------------------//

// التاكد من ان المستخدم قام باختيار ثلاثة صور
function numberOfImgs() {
    let counter = 0;
    images.forEach((img) => {
        if (!img.hasAttribute('src')) {
            counter++;
        }
    });
    return counter;
}

function validateForm() {
    let counter = numberOfImgs();

    if (counter !== 0) {
        helpText.innerHTML = 'You must choose three personal photos';
        return false;
    } else {
        helpText.innerHTML = '';
        return true;
    }
}

uploadForm.onsubmit = function (e) {
    if (!validateForm()) {
        e.preventDefault();
    }
};

// ------------------------------------ Upload Img ----------------------------------------- //

// ------------------------------------ Img One Handel -------------------------------------- //

function imgOneHandle(){
    inputFields[0].click();

    inputFields[0].onchange = function () {
        lable[0].innerHTML = ``
        let file = new FileReader();
        file.readAsDataURL(inputFields[0].files[0]);
        file.onload = function () {
            images[0].style.display = 'block'
            images[0].src = file.result;
        }
    };
}

imagesArea[0].addEventListener('click',()=>{
    imgOneHandle()
})



// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Upload Image'
    }
}, 3000);