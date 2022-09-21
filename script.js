const day = document.getElementById('day');
const getBtn = document.getElementById('get-btn');
const inputDate = document.getElementById('date');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year')

getBtn.addEventListener('click', ()=>{
    let date  = new Date(`${inputYear.value} ${inputMonth.value} ${inputDate.value}`);
    let dateToStr = date.toString();
    if(dateToStr.includes('Inv')){
        day.style.color = 'red'
    }else{
        day.style.color = 'black'
    }
    day.textContent = dateToStr.slice(0, 3)
})