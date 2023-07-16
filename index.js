//year
//month
//day


let btn=document.querySelector('.btn')
let sirName=document.querySelector('.sir')
let month=document.querySelector('.monthdata')
let date=document.querySelector('.date')
let years=document.querySelector('.years')
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

    //get Month
    let sMonth=month.value
    if(sMonth === '' || sMonth === null){
        return
    }
    else if(sMonth < 1 || sMonth > 12){
        return
    }
    else{
        let getcalcYear=Number((sMonth.slice(0,4)));//year
        let getcalcMonth=Number((sMonth.slice(5,7)));//month

        console.log(getcalcMonth);
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
    

    //get Year
    let syear=years.value
    if(syear === '' || syear > allyear){
        return
    }
    // console.log(syear);

    let calcYears=allyear-syear


    old.innerHTML=`Hi ${sName} you are ${calcYears} Years Old`

    
})


