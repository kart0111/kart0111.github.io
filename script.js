
document.getElementById("aboutME_btn").addEventListener("click", myFunction);

function myFunction() {
  alert("Hello");
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
