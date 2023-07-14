//METHOD-1
// var currentPos = 0;
// var targetPos = 1000;
// var scrollInterval = setInterval( function(){
//     if( currentPos >= targetPos ){
//     	clearInterval(scrollInterval);
//     }
//     else{
//      	currentPos = currentPos + 50;
//      	window.scrollBy(0,50);
//     }
//   }	, 50 );


//METHOD-2
// var anchorArrays = document.querySelectorAll(".navigation-list a");
// for( let i = 0; i < anchorArrays.length; i++ ){
// 	anchorArrays[i].addEventListener("click", function(event){
// 		event.preventDefault();
// 	var targetID = anchorArrays[i].textContent .trim().toLowerCase();// instead of accessing text content you can also access using href. Also remember,since you are accessing through text content, text content and id should be same. 
// 	var targetSection = document.getElementById(targetID);
// 	var scrollInterval = setInterval( function(){
// 		var targrtCoordinates = targetSection.getBoundingClientRect();//understand why its inside the function and not outside.
// 		//getBoundingClientRect() gives us the coordinates (distance) between our current position and out target. Since we scroll inside this setInterval function, we need to get the updated coordinates in the same function only.
// 		var top = targrtCoordinates.top;
//         if( top <= 0){// the value of top goes on decreasing as we reach more and more towards the target.
//         	clearInterval(scrollInterval);
//         }
//         else{
//         	window.scrollBy(0,50);
//         }
// 	}, 20);
//   });
// }


//METHOD-3
// var anchorArrays = document.querySelectorAll(".navigation-list a");
// var scrollInterval;
// for( let i = 0; i < anchorArrays.length; i++ ){
// 	anchorArrays[i].addEventListener("click", function(event){
// 		// anchorArrays gets executed with for loop and like for loop it gets executed only once.
// 		// And when it is executing, that time it maps the dom elements with its event listener
// 		// and thats why if u are doing let, you dont need to put 'this' over there. 
// 		// but if you are using var, you will have to use 'this' in place of anchorArrays[i].textContent .trim().toLowerCase();
// 		event.preventDefault();
// 	var targetID = anchorArrays[i].textContent .trim().toLowerCase();
//      // var targetID = anchorArrays[i].getAttribute("href");
//      // And then since # also comes, you should trim the 1st char.If you choose to not do the triming after getting the href then you can directly do the quey selector like below. But if you are doing triming then do by .getelementbyId.
// 	// instead of accessing text content you can also access using href. Also remember,since you are accessing through text content, text content and id should be same. 
// 	var targetSection = document.getElementById(targetID);
// 	//var targetSection = document.querySelector(targetID);
// 	//console.log(targetSection);
// 	scrollInterval = setInterval( scrollVertical, 20, targetSection);
// //we cant do setInterval( scrollVertical(targetSection), 20) coz scrollVertical(targetSection) becomes a function call and we dont need to do a function call as setInterval function does the work of function call and we dont need to do it.
// //we are supposed to write it as  setInterval( functionname, duration, parameter1..) and setInterval does the work of doing the function call for us and we dont need to do it. so it becomes wrong if we do scrollVertical(targetSection).
// //in this we are not calling scrollVertically. We arejust passing the function as a parameter using reference ie. functionName and hence targetSection also we wrote a a parameter.
//     });
//  }   
//  // abc is the function and abc(xyz)/abc(xyz,x1y1z1,...)/abc() is the function call. Understand the difference between just a function and function call.
// function scrollVertical(targetSection){
// var targrtCoordinates = targetSection.getBoundingClientRect();//understand why its inside the function and not outside.
// //getBoundingClientRect() gives us the coordinates (distance) between our current position and out target. Since we scroll inside this setInterval function, we need to get the updated coordinates in the same function only.
// var top = targrtCoordinates.top;
//  if( top <= 0){// the value of top goes on decreasing as we reach more and more towards the target.
// 	clearInterval(scrollInterval);
//  }
//  else{
//  	window.scrollBy(0,50);
//  }
// }


//METHOD-4
var anchorArrays = document.querySelectorAll(".navigation-list a");
var scrollInterval;
for( let i = 0; i < anchorArrays.length; i++ ){
	anchorArrays[i].addEventListener("click", function(event){
		event.preventDefault();
	var targetID = anchorArrays[i].textContent .trim().toLowerCase();// instead of accessing text content you can also access using href. Also remember,since you are accessing through text content, text content and id should be same. 
	var targetSection = document.getElementById(targetID);
	scrollInterval = setInterval( function(){
		scrollVertical(targetSection);
    },20);
// here we are passing a new function as a parameter to the setInterval and then inside the function we are calling the scrollVertical function with parameters.
// we can do a function call inside a function but we cant do a function call  inside a function parameter.
// this is like another method/trick of writing the same above method-3 in another way.      
 });   
}
function scrollVertical(targetSection){
var targrtCoordinates = targetSection.getBoundingClientRect();//understand why its inside the function and not outside.
//getBoundingClientRect() gives us the coordinates (distance) between our current position and out target. Since we scroll inside this setInterval function, we need to get the updated coordinates in the same function only.
var top = targrtCoordinates.top;
 if( top <= 0){// the value of top goes on decreasing as we reach more and more towards the target.
	clearInterval(scrollInterval);
  }
  else{ 
 	window.scrollBy(0,50);
  }
}


// // AUTO FILL FOR SKILL BARS METHOD -1
// var skillBars = document.getElementsByClassName('skills-content-innerclass');
// var skillsSection = document.getElementById('skills');
// window.addEventListener("scroll", scrollFunction);
// 	var animationOnce = false;

// function initialiseBars(){
//     for( let i = 0; i < skillBars.length; i++ ){
//         skillBars[i].style.width = 0;
//     }
//     console.log('good night');
// }
// console.log('hello');
// initialiseBars();

// function fillBars(){
// 	console.log(' sneha');
// 	let currentPos = 0;
// 	let targetPos = document.getElementsByClassName('skills-content-innerclass');
//     let percentageArray = [];
//     for( let j of targetPos ){
//     	percentageArray.push(j.getAttribute('data-bar-width'));
//     }
//    // console.log(percentageArray);
// 	let fillUp = setInterval( function(){
// 			for( let i = 0; i < skillBars.length; i++ ){
// 				if( currentPos < percentageArray[i]){
// 					currentPos++;
// 					skillBars[i].style.width = currentPos + '%';
// 				}
// 				else{
// 					clearInterval(fillUp);
// 					return;
// 				}
// 			}
// 	}, 200);
// }

// function scrollFunction() {
// 	var distance = skillsSection.getBoundingClientRect();
// 	console.log(distance);
// 	//console.log(window.innerHeight);
// 	if( animationOnce == false && distance.top < window.innerHeight ){
//                animationOnce = true;
//                 fillBars();

// 	}
// 	else if( distance.top > window.innerHeight ){
//          animationOnce = false;
//            initialiseBars();
// 	}
// 	else if ( distance.bottom < 0 ){
// 		// when the bottom of the skills section wrt starting of your screen gives distance.bottom
// 		// so when we scroll down more, the distance.bottom goes 0 to negative and thats when we want to do that condition.
//           animationOnce = false;
//           initialiseBars();

// 	}
// }


 //AUTO FILL FOR SKILL BARS METHOD -2
var skillBars = document.getElementsByClassName('skills-content-innerclass');
window.addEventListener("scroll", scrollFunction);

// function initialiseBars() {
//     for (let i = 0; i < skillBars.length; i++) {
//         skillBars[i].style.width = 0 + '%';
//     }
// }
function initialiseBars(index) {
    skillBars[index].style.width = 0 + '%';
    
}

for (let i = 0; i < skillBars.length; i++) {
    initialiseBars(i);
}
//var animationOnce = false;
var animationOnce  = [false,false,false,false,false,false,false,false];
initialiseBars();
function scrollFunction() {
    for (let i = 0; i < skillBars.length; i++) {
        let distance = skillBars[i].getBoundingClientRect();
        // var animationOnce = false;
        if (animationOnce[i] == false && distance.top < window.innerHeight) {
            let currentPos = 0;
            let targetPos = skillBars[i].getAttribute('data-bar-width');
            let fillUp = setInterval(function () {
                if (currentPos < targetPos) {
                    currentPos++;
                    skillBars[i].style.width = currentPos + '%';
                }
                else {
                    clearInterval(fillUp);
                    animationOnce[i] = true;//this u hadnt done
                    return;
                }
            }, 5);
        }
        else if (distance.top > window.innerHeight) {
            animationOnce[i] = false;
            initialiseBars(i);
        }
        else if (distance.bottom < 0) {
            animationOnce[i] = false;
            initialiseBars(i);
        }
    }
}

//AUTO FILL FOR SKILL BARS METHOD -2
// var skillBars = document.getElementsByClassName('skills-content-innerclass');
// function initialiseBars(bar) {
//     bar.style.width = 0 + '%';
// }
// for (var bar of skillBars) {
//     initialiseBars(bar);
// }
// function fillBar(bar) {

//     var currentWidth = 0;
//     var targetWidth = bar.getAttribute("data-bar-width");
//     var interval = setInterval(function () {
//         if (currentWidth >= targetWidth) {
//             clearInterval(interval);
//             return;
//         }
//         currentWidth++;
//         bar.style.width = currentWidth + '%';
//     }, 1);

// }
// function scrollFunction() {
//     for (var bar of skillBars) {
//         fillBar(bar);
//     }
// }
// window.addEventListener("scroll", scrollFunction);
