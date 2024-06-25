
let dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach(dropdown =>{

  const select = dropdown.querySelector('.select')
  const selected = dropdown.querySelector('.selected')
  const caret = dropdown.querySelector('.caret i')
  const menu = dropdown.querySelector('.menu')
  const options = dropdown.querySelectorAll('.option')

// ---------------- فتح وغلق القائمه عند الضغط عليها -------------- //
  select.addEventListener('click',(e)=>{
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('menu-open')
  })

// ----------------  غلق القائمه عند اختيار عنصر من القائمه  -------------- //
  options.forEach(option =>{
    option.addEventListener('click', ()=>{
      selected.innerHTML = option.innerHTML
      caret.classList.remove('caret-rotate')
      menu.classList.remove('menu-open')
    })
  })
})
