let imgProfileInput = document.getElementById('imgProfile')
let imgProfileArea = document.querySelector('.img')
let imgProfile = document.querySelector('img')
let addIcon = document.querySelector('.bxs-plus-circle')
let subjectName = document.querySelector('.subjectName')

function imgProfileHandle(){
  let icon = document.querySelector('.bxs-plus-circle')
  imgProfileInput.onchange = function () {
      let file = new FileReader();
      file.readAsDataURL(imgProfileInput.files[0]);
      file.onload = function () {
          imgProfile.style.display = 'block'
          addIcon.style.display = 'none'
          imgProfile.src = file.result
          imgProfileInput.remove()
          icon.remove()
      }
  };
}
imgProfileArea.addEventListener('click',()=>{
  imgProfileHandle()
})


function detectLanguage(text) {
  var arabicCharacters = /[\u0600-\u06FF]/;

  if (arabicCharacters.test(text)) {
    return 'Arabic';
  }
}

let textToCheck = subjectName.innerHTML;
let language = detectLanguage(textToCheck);

function profileChanges(){
  let subjectGrade = document.querySelectorAll('.subject-grade')
  let subjectGradeName = document.querySelectorAll('.subject-grade p')

  if (language === 'Arabic') {
    subjectGradeName.forEach((gradeName)=>{
      if (gradeName.innerHTML === 'Oral') {
        gradeName.innerHTML = 'شفوي'
      }else if (gradeName.innerHTML === 'Practical') {
        gradeName.innerHTML = 'عملي'
      }else {
        gradeName.innerHTML = 'ميدترم'
      }
    })
    subjectGrade.forEach((subject)=>{

      subject.style.margin = '0 22px 0 0'
    })

  }
}

profileChanges()

// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Profile'
    }
}, 3000);

// ------------------------------------ Dropdown -------------------------------------- //
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
