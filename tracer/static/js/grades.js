//---------------------------------------- Filters ----------------------------------------//
function filterBoxes() {
    var sectionsDropdown = document.getElementById("sections");
    var sectionSelectedValue = sectionsDropdown.value;
  
    var boxes = document.getElementById("tbody");
    var students = boxes.getElementsByClassName("tr");
  
    for (var i = 0; i < students.length; i++) {
      var student = students[i];
  
      var sectionSpan = student.querySelector(".section-filter");
      var section = sectionSpan.textContent.trim();
  
      if ((sectionSelectedValue === "all" || section === sectionSelectedValue)) {
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








  let title = document.querySelector('title')
  setInterval(() => {
      if (title.innerHTML !== 'Tracer') {
          title.innerHTML = 'Tracer'
      } else {
          title.innerHTML = 'Grades'
      }
  }, 3000);

  let button = document.querySelector('.submit')
      let tbody = document.querySelector('tbody > tr')

      if (tbody === null) {
          button.style.display = 'none'
          button.after('There are no students for this subject')
      }else{
          button.style.display = 'block'
          // tbody.innerHTML = `<h4>There are no students for this subject</h4>`
      }