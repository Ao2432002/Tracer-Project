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

// ------------------------------------ Search -------------------------------------- //
let search = document.getElementById('searchQueryInput');
let searchResultArea = document.querySelector('.search-result');
let subjectNameGradeSearch = document.querySelectorAll('.subject-name');

// Bind the searchHandle function to the input event of the search input field
search.addEventListener('input', searchHandle);

function searchHandle() {
  let searchText = search.value.trim();
  let resultFound = false;

  // Remove Match
  if (search.value === "") {
    let textMatch = document.querySelectorAll('.match')
    textMatch.forEach(match =>{
      match.classList.remove('match')
    })
  }

    // Search by Subject Name For Admin Subject Grades
    subjectNameGradeSearch.forEach(ele => {
      let text = ele.textContent;
      if (text.toLowerCase().includes(searchText.toLowerCase())) {
        ele.closest('.box').style.display = 'flex';
        resultFound = true;
      } else {
        ele.closest('.box').style.display = 'none';
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
// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Subject Grades'
    }
}, 3000);