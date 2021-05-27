

'use strict';

/* About_me button eventListner  */
document.getElementById("aboutME_btn").addEventListener("click", myFunction);

function myFunction() {
  alert("Hello,\nI am Kalyani Gophane, 40 years old mum of wonderful young  twins, living in London. After taking 10 years of gap from technical career to raise family, I am looking forward to make full time career in software development.\nSince my graduation, programming fascinated me. Analysing the problem, understanding input attributes, applying different logics and creating satisfactory output, give a sense of creation, achievement and immense happiness to me. I am happy that I am working towards my dream.\nAfter my post-graduation in Biomedical Instrumentation, I had extensive career in Automobile certification & homologation field. Execution of projects of having varied scope and complexity, enhanced my project management and interpersonal skills. Experience of working with expert from public sectors, certification agencies and worldwide giant companies in automobile fields helped me to improve my communication skill which is key when we work as a team on large scale project. At present I am doing part time work as administrator. \n Before looking for career in software field, I did GCSE maths & English exams. To help my children in study was my moto, but I loved these classroom sessions with group discussions and group assignments. \n In person I am kind, honest and hardworking, ready to help my peers and friends. My ethics are simple which allow me to be effective and efficient.  I am social animal and friendly. I believe that my strong academic skill & experience along with my dedication will bring valuable perspective in my new career as web developer.");
}









/*slide Show Code*/
var i = 0; 			
var imageArr = [];	// Images Array
var time = 2000;	// Time Between Switch
var continuousPlay =true;	 

imageArr[0] = "assets/painting.gif";
imageArr[1] = "assets/cooking.gif";
imageArr[2] = "assets/primary_Education.gif";
imageArr[3] = "assets/meditation.gif";


// Change Image
function changeImg(){
    if(continuousPlay=== true){
	    document.slide.src = imageArr[i];
        i+=1;
        i=i%imageArr.length;
        // Run function every x seconds
        setTimeout("changeImg()", time);
    }
}

//function for prev button
function prevFunction(){
    if(continuousPlay=== true){
        continuousPlay= false;
        i=2;
        }    // it will stop continous slideshow
        else{
            i--;
        }
    if(i<0){
        i=imageArr.length-1;
    }
     document.slide.src=imageArr[i];
}

//function for next button
function nextFunction(){
    if(continuousPlay=== true){
    continuousPlay= false;
    }    // it will stop continous slideshow
    else{
        i++;
    }
    i=i%imageArr.length;
    document.slide.src=imageArr[i];
}


//function for start button
function startFunction(){
    continuousPlay=true;
    changeImg();
}

//function for stop button
function stopFunction(){
if(continuousPlay=== true){
    continuousPlay=false; 
    i--;
    if(i<0) i=imageArr.length;
}
document.slide.src=imageArr[i];
}


// Run function when page loads
window.onload=changeImg;



/*light-dark toggle button*/

const toggler = document.querySelector('.btn');
toggler.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')
    var className = document.body.className;
    if(className == "base") {
        this.textContent = "Light";
    }
    else {
        this.textContent = "Dark";
    }
   
});


document.querySelector('.coding_dayBtn').addEventListener("click", codesite);
function codesite(){
    location.href="codingDay.html" ;
}
