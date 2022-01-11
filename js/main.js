var form =document.getElementById('form')
var oneelement =document.getElementById('isinput')
var twoelement =document.getElementById('isinput2')
var sureelement =document.getElementById('isinput3')
var fourelement =document.getElementById('isinput4')
var isbutton =document.getElementById('button')
var isresalt =document.getElementById('resalt')

isbutton.style.background='green'
isresalt.style.background='aqua'
form.addEventListener('submit',event=>{
    event.preventDefault()
    
    var a = Number(oneelement.value)
    var b = Number(twoelement.value)
    var c = Number(sureelement.value)
    var d = Number(fourelement.value)
    

    var arr1 =[a,b,c,d]
    let hisob = 0

    for(let index=0;index<arr1.length; index++){
          hisob +=  arr1[index]
    }
    isresalt.textContent=hisob
})