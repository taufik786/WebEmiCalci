function submit(){

const p = document.getElementById('principal').value;
const r = document.getElementById('rate').value;
const t =document.getElementById('time').value;

    let Emi = (p*r/(100*12)*(Math.pow((1+r/(100*12)), t))) / (Math.pow((1+r/(100*12)), t)-1)
    
    document.getElementById('emi').value=Emi;

    let ta = Emi*t;
    document.getElementById('ta').value=ta;

    let ti = ta - p;
    document.getElementById('ti').value = ti;
}

let inputs = document.querySelectorAll('input');
let Reset = document.getElementById('reset');
Reset.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
})


// 5 to the power 2
// Math.pow(5, 2)