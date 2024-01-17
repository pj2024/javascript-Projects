const value = document.querySelector(".values");
const btns = document.querySelectorAll(".impbtn");
const equalBtn = document.querySelector("#equlto");
const cancelBtn = document.querySelector("#cancel");

btns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        let btnVal = btn.value;
        value.value += btnVal;
   
    });
});


equalBtn.addEventListener("click" , () =>{
    if(value.value === ''){
        value.value = "";
    }else{
        let ans = eval(value.value);
        value.value = ans;
    }
}); 

cancelBtn.addEventListener('click', ()=>{
    value.value = "";
});