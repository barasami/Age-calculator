//year
//month
//day


let btn=document.querySelector('.btn')
let sirName=document.querySelector('.sir')
let month=document.querySelector('.monthdata')
let date=document.querySelector('.date')



let today=new Date()
let tod=new Intl.DateTimeFormat('en-us',{
    dateStyle:'long'
})

let todaysDate=(tod.format(today))
console.log(todaysDate);

btn.addEventListener('click',()=>{
    console.log(sirName.value);
    console.log(month.value);
    console.log(date.value);
})


