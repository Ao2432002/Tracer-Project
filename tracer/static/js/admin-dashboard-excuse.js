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

// -------------------------------------- Delete All Users -------------------------------------- //
let confirmation = document.getElementById("confirmation");

function showConfirmation() {
  confirmation.style.display = "block";
}

function hideConfirmation() {
  confirmation.style.display = "none";
}

// -------------------------------------- Searsh -------------------------------------- //
let search = document.getElementById('searchQueryInput');
let searchBtn = document.getElementById('searchQuerySubmit');
let searchResultArea = document.querySelector('.search-result');
let nameSearch = document.querySelectorAll('h4:first-of-type');
let uniCodeSearch = document.querySelectorAll('h4:nth-of-type(2)');
let acYearSearch = document.querySelectorAll('h4:nth-of-type(3)');

// Bind the searchHandle function to the input event of the search input field
search.addEventListener('input', searchHandle);

function searchHandle() {
  let searchText = search.value.trim();
  let resultFound = false;
  let searchReg = /^[a-zA-Z\s]+$/; // Match alphabetic characters and spaces

  // Remove Match
  if (search.value === "") {
    let textMatch = document.querySelectorAll('.match')
    textMatch.forEach(match =>{
      match.classList.remove('match')
    })
  }

  if (searchReg.test(search.value)) {

    // Search by full name
    nameSearch.forEach(ele => {
      let text = ele.textContent;
    
      if (text.toLowerCase().includes(searchText.toLowerCase())) {
        ele.closest('.box').style.display = 'block';
        resultFound = true;
      } else {
        ele.closest('.box').style.display = 'none';
      }
    });
  }
  else {
    // Search by uni code
    
    uniCodeSearch.forEach(ele => {
      let text = ele.textContent;
    
      if (text.toLowerCase().includes(searchText.toLowerCase())) {
        ele.closest('.box').style.display = 'block';
        resultFound = true;
      } else {
        ele.closest('.box').style.display = 'none';
      }
    });
  }
  
  if (!resultFound) {
    searchResultArea.innerHTML = `No result found about "<b>${search.value}</b>"`;
    searchResultArea.style.display = 'block';
  } else {
    searchResultArea.style.display = 'none';
  }
}