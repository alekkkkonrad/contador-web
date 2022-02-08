let numberhtml = document.getElementById('valor');
let number = 0;



const elemento1 = document.getElementById('sub');
elemento1.addEventListener("click", sub);
const elemento2 = document.getElementById('sum');
elemento2.addEventListener("click", sum);

function sub(){
    if(number<=(-10)){
        alert("Botão desabilitado!");
    }
    else{
        number = number-1;
        numberhtml.innerHTML = number;
    }
    if(number<0){
        numberhtml.style.color = 'red';
    }
}
function sum(){
    if(number>=10){
        alert("Botão desabilitado!");
    }
    else{
        number = number+1;
        numberhtml.innerHTML = number;
        numberhtml.style.color = 'black';
    }
}
