
function multi(n1,n2){
 resultat= n1 * n2 ;
   return resultat; 
};

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let button = document.getElementById("button");

 let p = document.querySelector('p');
  button.addEventListener('click', function(){
    p.innerHTML+=(multi(num1.value,num2.value));
    })
