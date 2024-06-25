// // -------------------------- DOM Elements --------------------------------------//

// // -------------------------- Form Side ----------------------------------------//
// let signupForm = document.getElementById('signupform')
// let fullName = document.getElementById('fullname')
// let section = document.getElementById('sec-number')
// let unCode = document.getElementById('Uncode')
// let acdYear = document.getElementById('acd-year')
// let ID = document.getElementById('ID')





// // -------------------------- Sign Up Form Validate----------------------------------------//
// signupForm.onsubmit = function(e) {

//         let fullNameValidate = false
//         let secNumValidate = false
//         let unCodeValidate = false
//         let IDValidate = false

//         // -------------------------- Full Name Handle ----------------------------------------//
//         function fullNameHandle() {

//             let name = fullName.value

//             // للتأكد من ان الاسم المكتوب هو احرف فقط ولا يحتوي علي ارقام ولا يقل عن 15 حرف من بينهم المسافات
//             let fullNameReg = /^[a-zA-Z\s]{15,}$/
//             if (fullNameReg.test(name)) {
//                 fullNameValidate = true
//             }
//         }
//         fullNameHandle()

//         // -------------------------- Section Handle ----------------------------------------//
//         function sectionHandle() {
//             let Section = section.value

//             let sectionReg = /^\d{1,2}$/

//             if (sectionReg.test(Section)) {
//                 secNumValidate = true
//             }
//         }
//         sectionHandle()

//         // --------------------------  University Code Handle ----------------------------------------//
//         function unCodeHandle() {
//             let code = unCode.value

//             // التاكد من ان الكود المدخل هو عباره عن ارقام و عددهم 14 رقم بدون مسافات
//             let unCodeReg = /^\d{14}$/

//             if (unCodeReg.test(code)) {
//                 unCodeValidate = true
//             }
//         }
//         unCodeHandle()

//         // -------------------------- National ID Handle--------------------------------------//
//         function IDHandle() {
//             let IDValue = ID.value

//             // التاكد من ان الرقم القومي المدخل هو عباره عن ارقام و عددهم 14 رقم بدون مسافات
//             let IDReg = /^\d{14}$/

//             if (IDReg.test(IDValue)) {
//                 IDValidate = true
//             }
//         }
//         IDHandle()



//     }
//     // ----------------------------------- End Validation --------------------------------- //

// // ----------------------------------- Academic Year --------------------------------- //

// function academicYear() {
//     if (acdYear.value === 'first' || acdYear.value === 'second') {
//         department.style.opacity = '.5'
//         department.disabled = true
//         department.value = 'general'
//     } else {
//         department.style.opacity = '1'
//         department.disabled = false

//     }
// }
// acdYear.onchange = function() {
//     academicYear()
// }


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
}

document.addEventListener("click", closeAllSelect);