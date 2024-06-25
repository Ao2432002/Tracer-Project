let imgProfileInput = document.getElementById('imgProfile')
let imgProfileArea = document.querySelector('.img')
let imgProfile = document.querySelector('img')
let addIcon = document.querySelector('.bxs-plus-circle')


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


