const words=[
"Cybersecurity Analyst",
"CEH Certified",
"VAPT Specialist",
"Web Security Researcher"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

const current=words[wordIndex];

const element=document.getElementById("typing");

if(!deleting){

element.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;
}

}else{

element.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;
}
}

setTimeout(type,deleting?50:100);
}

type();