//---------------------------------------- Filters ----------------------------------------//
function filterBoxes() {
    var subjectDropdown = document.getElementById("subject");
    var selectedSubject = subjectDropdown.value;

    var sessionDropdown = document.getElementById("session");
    var selectedSession = sessionDropdown.value;

    var boxes = document.getElementById("boxes");
    var boxElements = boxes.getElementsByClassName("box");

    for (var i = 0; i < boxElements.length; i++) {
        var box = boxElements[i];
        
        var subjectName = box.querySelector(".subject-name").textContent.trim();
        var sessionNum = box.querySelector(".session-num").textContent.match(/\(([^)]+)\)/)[1].trim();

        if (
            (selectedSubject === "all" || subjectName === selectedSubject) &&
            (selectedSession === "all" || sessionNum === selectedSession)
        ) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var selectElements = document.querySelectorAll("select");
    for (var i = 0; i < selectElements.length; i++) {
        selectElements[i].addEventListener("change", filterBoxes);
    }
});
  
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