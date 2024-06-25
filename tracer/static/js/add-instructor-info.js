// //---------------------------------------- DOM Elements ----------------------------------------//
// let signupForm = document.getElementById('add-form')
// let fullName = document.getElementById('fullname')
// let section = document.getElementById('sec-number')
// let unCode = document.getElementById('Uncode')
// let acdYear = document.getElementById('acd-year')
// let ID = document.getElementById('ID')

// // -------------------------- Sign Up Form Validate ----------------------------------------//
// signupForm.onsubmit = function(e) {
//         let fullNameValidate = false
//         let secNumValidate = false
//         let unCodeValidate = false
//         let IDValidate = false

// //---------------------------------------- Full Name Handle ----------------------------------------//
//         function fullNameHandle() {
//             let name = fullName.value
//             let fullNameReg = /^[a-zA-Z\s]{15,}$/
//             if (fullNameReg.test(name)) {
//                 fullNameValidate = true
//             }
//         }
//         fullNameHandle()

// //---------------------------------------- Section Handle ----------------------------------------//
//         function sectionHandle() {
//             let Section = section.value
//             let sectionReg = /^\d{1,2}$/
//             if (sectionReg.test(Section)) {
//                 secNumValidate = true
//             }
//         }
//         sectionHandle()

// //----------------------------------------  University Code Handle ----------------------------------------//
//         function unCodeHandle() {
//             let code = unCode.value
//             let unCodeReg = /^\d{14}$/
//             if (unCodeReg.test(code)) {
//                 unCodeValidate = true
//             }
//         }
//         unCodeHandle()

// //---------------------------------------- National ID Hand ----------------------------------------//
//         function IDHandle() {
//             let IDValue = ID.value
//             let IDReg = /^\d{14}$/
//             if (IDReg.test(IDValue)) {
//                 IDValidate = true
//             }
//         }
//         IDHandle()
//     }

//---------------------------------------- DropDown ----------------------------------------//
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("input-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
            rotateBackground(h);
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        rotateBackground(this);
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
            rotateBackground(y[i]);
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);