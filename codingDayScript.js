document.getElementById("btnClick").addEventListener("click", yourDayFunction);



function yourDayFunction() {
    let y = new Date().toISOString().substr(0, 10); 
  
    let x = document.getElementById("birthDate").value; 
    let arr =[];
    arr = x.split('-').concat(y.split('-'));
    let sum= 0;
    arr.forEach(item=> {sum+=parseInt(item, 10)});
    let yourNum= sum%9 || 9;
  
   let output ={1: {message:"You will resolve a bug that you’ve been trying to track down for days. YaY!", image: "assets/image1.jpg"},
  2: {message:"You will successfully ward off your impostor syndrome for the rest of the month. Yahoo!", image: "assets/image2.jpg"},
  3: {message:"You’ll be left to wander aimlessly! Don’t connect to empty database.", image:"assets/image3.jpeg"},
  4:{message:"You’ll totally nail tricky piece of code. Woo! Hoo!", image: "assets/image4.png"},
  5:{message:"Sometimes looking at a problem with fresh eyes will make it much clearer. Take a coffee break.", image:"assets/image5.jpg"},
  6:{message:"Don’t burn yourself out, check stackoverflow.", image: "assets/image6.jpg"},
  7:{message:"Today is learning day. Programmers should never stop learning.", image: "assets/image7.png"},
  8:{message:"There is nothing wrong & right in coding as long as it works, so pat yourself!", image: "assets/image8.jpg"},
  9:{message:"Save your work. Go out and take fresh air.", image: "assets/image9.jpeg"}
  };

  document.getElementById("messageBox").innerHTML = output[yourNum].message ;
  document.getElementById("imageBox").src = output[yourNum].image.replace('90x90', '225x225') ;
}

  let todayDate;
  todayDate =new Date().toISOString().substr(0, 10); 
  document.getElementById("birthDate").value=todayDate;
