//year
//month
//day


let btn=document.querySelector('.btn')
let sirName=document.querySelector('.sir')
let month=document.querySelector('.monthdata')
let date=document.querySelector('.date')
let old=document.querySelector('.old')

let allToday=document.getElementById("today")


let today=new Date()
let tod=new Intl.DateTimeFormat('en-us',{
    dateStyle:'long'
})

let allyear=today.getFullYear()
let alltoday=today.getMonth()+1
console.log(alltoday);

let todaysDate=(tod.format(today))


allToday.innerHTML=`${todaysDate}`





btn.addEventListener('click',()=>{

    //get Name
    let sName=sirName.value
    if(sName === '' || sName === null){
        return
    }

    //get Month and year
    let sMonth=month.value
    let getcalcYear=Number((sMonth.slice(0,4)));//year
    let getcalcMonth=Number((sMonth.slice(5,7)));//month
    if(getcalcYear === '' || getcalcYear === null){
        return
    }
    else if(getcalcYear < 1 || getcalcYear > allyear){
        return
    }
    
    

    //get Date
    let sDate=date.value
    if(sDate === '' || sDate === null){
        return
    }
    else if(sDate < 1 || sDate > 31){
        return
    }
    else{
        console.log(sDate);
    }
 
    let calcYears=allyear-getcalcYear


    old.innerHTML=`Hi ${sName} you are ${calcYears} Years Old`

    
})


