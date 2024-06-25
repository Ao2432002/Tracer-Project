// -------------------------------------- Show List Of Link In The SideBar -------------------------------------- //
let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
          let arrowParent = e.target.parentElement.parentElement;
          arrowParent.classList.toggle("showMenu");
    });
}

// -------------------------------------- SideBar Open & Close -------------------------------------- //
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// -------------------------------------- Change Title -------------------------------------- //
let title = document.querySelector('title')
    setInterval(() => {
        if (title.innerHTML !== 'Tracer') {
            title.innerHTML = 'Tracer'
        }else{
            title.innerHTML = 'Academic Year'
        }
    }, 3000);