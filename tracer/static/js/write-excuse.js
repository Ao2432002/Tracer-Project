// ------------------------------------ Upload DOM Elements ------------------------------------ //
let inputFields = document.querySelectorAll('.imges .img input')
let imagesArea = document.querySelectorAll('.imges .img')
let images = document.querySelectorAll('.imges .img img')
let HelpText = document.querySelector('.help-text')
let lable = document.querySelectorAll('.lable')

// ------------------------------------ Img One Handel -------------------------------------- //
function imgOneHandle() {
    inputFields[0].click();

    inputFields[0].onchange = function() {
        lable[0].innerHTML = ``
        let file = new FileReader();
        file.readAsDataURL(inputFields[0].files[0]);
        file.onload = function() {
            images[0].style.display = 'block'
            images[0].src = file.result;
        }
    };
}

imagesArea[0].addEventListener('click', () => {
    imgOneHandle()
})


// ------------------------------------ NavBar DropDown -------------------------------------- //
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
