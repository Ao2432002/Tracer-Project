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

//---------------------------------------- Filters ----------------------------------------//
function filterBoxes() {
    var subjectDropdown = document.getElementById("subject");
    var selectedSubject = subjectDropdown.value;

    var sessionDropdown = document.getElementById("session");
    var selectedSession = sessionDropdown.value;

    var sessionTypeDropdown = document.getElementById("session-type");
    var selectedSessionType = sessionTypeDropdown.value;

    var boxes = document.getElementById("boxes");
    var students = boxes.getElementsByClassName("box");

    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        var subjectSpan = student.querySelector(".subject-name span");
        var subject = subjectSpan.textContent.trim();

        var sessionSpan = student.querySelector(".session-num span");
        var session = sessionSpan.textContent.replace("Session Number: ", "").trim();

        var sessionTypeSpan = student.querySelector(".session-type span");
        var sessionType = sessionTypeSpan.textContent.trim();

        if (
            (selectedSubject === "all" || subject === selectedSubject) &&
            (selectedSession === "all" || session === selectedSession) &&
            (selectedSessionType === "all" || sessionType === selectedSessionType)
        ) {
            student.style.display = "";
        } else {
            student.style.display = "none";
        }
    }
}

//---------------------------------------- DropDown ----------------------------------------//
var selectElements = document.querySelectorAll("select");
var i, j, l, ll, a, b, c;

for (i = 0, l = selectElements.length; i < l; i++) {
    var selElmnt = selectElements[i];
    var ll = selElmnt.length;

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    selElmnt.parentNode.appendChild(a);

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    
    for (j = 0; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var s, h, sl, y, k, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (k = 0; k < sl; k++) {
                if (s.options[k].innerHTML == this.innerHTML) {
                    s.selectedIndex = k;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (j = 0; j < yl; j++) {
                        y[j].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    selElmnt.parentNode.appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl;
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            continue;
        }
        y[i].classList.remove("select-arrow-active");
    }
    
    for (i = 0; i < xl; i++) {
        if (elmnt == y[i]) {
            continue;
        }
        x[i].classList.add("select-hide");
    }
    filterBoxes()
}

document.addEventListener("click", closeAllSelect);