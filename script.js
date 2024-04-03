let neonText = document.querySelector('.neonText');
let submitBtn = document.querySelector('.submitIcon');
let inputText = document.querySelector('.textinput');

// input box Text ----->   Neon Text
submitBtn.addEventListener('click', (evt) => {
     neonText.innerHTML = inputText.value
})


// changing font style of Neon Text ---> 
let styleBtn = document.querySelectorAll('.style-btn');
console.log(styleBtn)
styleBtn.forEach((val,idx) => {
     val.addEventListener('click',(evt) => {
          console.log(val.innerHTML)
          neonText.classList.remove('rubik-scribble-regular')
          neonText.classList.remove('pacifico-regular')
          neonText.classList.remove('cursive')
          if(val.innerHTML === 'Rubik'){
             neonText.classList.add('rubik-scribble-regular')
             console.log('if condi after 1')
          }else if(val.innerHTML === 'Pacifico'){
               neonText.classList.add('pacifico-regular')
               console.log('if condi after 2')
          }else if(val.innerHTML === 'Cursive'){
               neonText.classList.add('cursive')
               console.log('if condi after 3')
          }
     })
})

// color choosing js -->
let colorBtn = document.querySelectorAll('.color-btn');
let bgColor = document.querySelector('.Cop-1')

colorBtn.forEach((val,idx) => {
     val.addEventListener('click', (evt) => {
     let bgColorClass = evt.target.classList[1];
     console.log(bgColorClass)
     let bgColor = getComputedStyle(evt.target).backgroundColor;
     console.log(bgColor)
     neonText.style.color = bgColor;
     })
})
