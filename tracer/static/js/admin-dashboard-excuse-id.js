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

// -------------------------------------- Img Src Error -------------------------------------- //
function handleImageError(img) {
    var userImageContainer = img.parentElement;
    var noImageText = userImageContainer.querySelector('.no-image');
    img.style.display = 'none';
    noImageText.style.display = 'block';
}

// -------------------------------------- Show Image Excuse -------------------------------------- //
let imgShowimgBox = document.querySelector('.excuse-img')
let closeImg = document.querySelector('.close-img')
let showImgBox = document.querySelector('.show-excuse-img')

imgShowimgBox.addEventListener('click',()=>{
    showImgBox.classList.toggle('show')
})

closeImg.addEventListener('click',()=>{
    showImgBox.classList.toggle('show')
})

// -------------------------------------- Image Zoom In -------------------------------------- //
const container = document.querySelector('.img-box')
const image = document.querySelector('.Show-img')
const zoomAmount = 2

container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const offsetX = (x / width) * 100;
    const offsetY = (y / height) * 100;

    image.style.transformOrigin = `${offsetX}% ${offsetY}%`;
    image.style.transform = `scale(${zoomAmount})`;
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});

// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Excuse'
    }
}, 3000);