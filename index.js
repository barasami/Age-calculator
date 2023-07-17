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
let allmonth=today.getMonth()+1


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
    else if(getcalcYear < 1000 || getcalcYear > allyear){
        return
    }
    

    if(getcalcMonth === '' || getcalcMonth === null){
        return
    }
    else if(getcalcMonth < 1 || getcalcMonth > 12){
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

    let getToday=Number(todaysDate.slice(5,7));
 
    let calcYears=allyear-getcalcYear
    let calcMonths=allmonth-getcalcMonth
    let calcDay=getToday-sDate


    if (calcYears > 1) {
        old.innerHTML=`Hi ${sName} you are ${calcYears} Years Old`
        return
    }

    if(calcMonths > 0 ){
        old.innerHTML=`Hi ${sName} you are ${calcMonths} Months Old`
        return
    }
    else{
        old.innerHTML=`Hi ${sName} you are ${calcMonths * -1} Months Old`
    }

    if(calcDay > 0 ){
        old.innerHTML=`Hi ${sName} you are ${calcDay} Days Old`
        return
    }
    else{
        old.innerHTML=`Hi ${sName} you are ${calcDay * -1} Days Old`
        return
    }
    
})
