
var SaylaniStudent = confirm('You already enroll in saylani?');
var coding = confirm('Do you know coding?');
var pElement = document.querySelector('.msg');
pElement.style.color = 'white';
pElement.style.padding = '10px';


if(SaylaniStudent || coding ){
    pElement.innerHTML = "Congrats! You are allowed.";
    pElement.style.backgroundColor = "green";
}

else{
    pElement.innerHTML = "Sorry! you are not allowed.";
    pElement.style.backgroundColor = "red";
}





var matric = confirm('Have you passed matric?');
var marks = +prompt('What was your marks of matric?');
var p = document.querySelector('.msg');
p.style.color='#fff';
p.style.padding='20px';

if(matric && marks >=70){
  p.innerHTML = 'Congrats! You have got the addmission.'
p.style.backgroundColor="green";
}

else{
    p.innerHTML = 'Plaese!Try again later. ';
    p.style.backgroundColor="red";
}





var p = document.querySelector(".msg");
var domecile = prompt('which domecile do you have?');


if(domecile === 'Karachi'){
    var isEducated = confirm('are you educated?');
    if(isEducated){
        p.innerHTML = 'Congrats! you have secured this job.';
   
    }
}
else{
    p.innerHTML= "Sorry! you are not eligible.";
    p.style.backgroundColor="red";
  
}

