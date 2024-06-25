let search = document.getElementById('searchQueryInput');
let searchBtn = document.querySelector('.search-btn');
let searchResultArea = document.querySelector('.search-result');
let subjectNameSearch = document.querySelectorAll('.subject-name p');
let subjectUniCodeSearch = document.querySelectorAll('.subject-code p');

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
    sidebar.classList.toggle("open");
});

// -------------------------------------- Img Src Error -------------------------------------- //
function handleImageError(img) {
    var userImageContainer = img.parentElement;
    var noImageText = userImageContainer.querySelector('.no-image');
    img.style.display = 'none';
    noImageText.style.display = 'block';
}

// -------------------------------------- Add Subject Validate -------------------------------------- //
let addSubjectForm = document.querySelector('.subject-management');

addSubjectForm.addEventListener('submit', (e) => {
    let subjectCode = document.querySelector('.subject.code');
    let subjectName = document.querySelector('.subject.name');
    // let subNameREG = /^[A-Za-z]+$/;|| subNameREG.test(subjectName.value) === false

    if (subjectCode.value === "" || subjectName.value === "" ) {
        e.preventDefault();
    }
});

// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Subjects'
    }
}, 3000);

// ------------------------------------ Search -------------------------------------- //

// Bind the searchHandle function to the input event of the search input field
search.addEventListener('input', searchHandle);

function searchHandle() {
  let searchText = search.value.trim();
  let resultFound = false;

  // Remove Match
  if (search.value === "") {
    console.log('empty');
    let textMatch = document.querySelectorAll('.match')
    console.log(textMatch);
    textMatch.forEach(match =>{
      match.classList.remove('match')
      console.log('removed');
    })
  }

    // Search by Subject name
    // subjectNameSearch.forEach(ele => {
    //   let text = ele.textContent;
    
    //   if (text.toLowerCase().includes(searchText.toLowerCase())) {
    //     let markedText = text.replace(new RegExp(searchText, 'gi'), match => `<span class='match'>${match}</span>`);
    //     ele.innerHTML = markedText;
    //     ele.closest('.subject-box').style.display = 'flex';
    //     resultFound = true;
    //   } else {
    //     let markedText = text.replace(new RegExp(searchText, 'gi'), match => `<span>${match}</span>`);
    //     ele.innerHTML = markedText;
    //     ele.closest('.subject-box').style.display = 'none';
    //   }
    // });

    // Search by Subject code
    subjectUniCodeSearch.forEach(ele => {
      let text = ele.textContent;
      console.log(text);
      if (text.toLowerCase().includes(searchText.toLowerCase())) {
        ele.closest('.subject-box').style.display = 'flex';
        resultFound = true;
      } else {
        ele.closest('.subject-box').style.display = 'none';
      }
    });

  
  // Display search result area based on resultFound
  if (!resultFound) {
    searchResultArea.innerHTML = `No result found about "<b>${search.value}</b>"`;
    searchResultArea.style.display = 'block';
  } else {
    searchResultArea.style.display = 'none';
  }
}
