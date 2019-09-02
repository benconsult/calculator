//CODE  LOGIC

//VARIABLE DECLARATION
var one = document.getElementById("one");// button 1
var two = document.getElementById("two");// button 2
var three = document.getElementById("three");// button 3
var four = document.getElementById("four");// button 4
var five = document.getElementById("five");// button 5
var six = document.getElementById("six");// button 6
var seven = document.getElementById("seven");// button 7
var eight = document.getElementById("eight");//button 8 
var nine = document.getElementById("nine");// button 9
var zero = document.getElementById("zero");//button 0
var plus = document.getElementById("plus");//button +
var minus = document.getElementById("minus");//button -
var multiply = document.getElementById("multiply");//*
var divide = document.getElementById("divide");// button /
var clear = document.getElementById("clear");//button CR
var dot = document.getElementById("dot");//button .
var equals = document.getElementById("equals");//button =
var inverse = document.getElementById("inverse");//button Inverse x-1
var tripple = document.getElementById("tripple");//button x3
var twice = document.getElementById("twice");//button x2

var result ="";//variable to hold the overall result from the 2 operands
var operation = -1;//Initializing the arithmetic operations
var data = 0;// Initializing a variable to hold the user first value/operand

//Setting on click events to all the buttons and attaching a value to them 
one.addEventListener("click", function(){
    if(one){
    	display.value=(display.value + "1");
   }
 })
two.addEventListener("click", function(){
    if(two){
    	display.value=(display.value + "2");
   }
})
three.addEventListener("click", function(){
    if(three){
    	display.value=(display.value + "3");
   }
})
four.addEventListener("click", function(){
    if(four){
    	display.value=(display.value + "4");
   }
})
five.addEventListener("click", function(){
    if(five){
    	display.value=(display.value + "5");
   }
})
six.addEventListener("click", function(){
    if(six){
    	display.value=(display.value + "6");
   }
})
seven.addEventListener("click", function(){
    if(seven){
    	display.value=(display.value + "7");
   }
})
eight.addEventListener("click", function(){
    if(eight){
    	display.value=(display.value + "8");
   }
})
nine.addEventListener("click", function(){
    if(nine){
    	display.value=(display.value + "9");
   }
})
zero.addEventListener("click", function(){
    if(zero){
    	display.value=(display.value + "0");
   }
})

//Initializing each operation to different values 
plus.addEventListener("click", function(){
    if(plus){
    	data = display.value;
    	operation = 1;
    	display.value = ("");
   }
})
minus.addEventListener("click", function(){
    if(minus){
        data = display.value;
        operation = 2;
        display.value = ("");
   }
})
multiply.addEventListener("click", function(){
    if(multiply){
        data = display.value;
        operation = 3;
        display.value = ("");
   }
})

divide.addEventListener("click", function(){
    if(divide){
    	data = display.value;
    	operation = 4;
    	display.value = ("");
   }
})

inverse.addEventListener("click", function(){
    if(inverse){
    	data = display.value;
    	operation = 5;
    	display.value = ("");
   }
})
twice.addEventListener("click", function(){
    if(twice){
    	data = display.value;
    	operation = 6;
    	display.value = ("");
   }
})
tripple.addEventListener("click", function(){
    if(tripple){
    	data = display.value;
    	operation = 7;
    	display.value = ("");
   }
})

dot.addEventListener("click", function(){
    if(dot){
    	display.value=(display.value + ".");
   }
})
clear.addEventListener("click", function(){
    if(clear){
    	display.value=("");
   }
})
//Equals evaluates the result based on the values of operation passed to it, therefore, a SWITCH expression is used
equals.addEventListener("click", function(){
    if(equals){
    	var secondOperand = display.value;//Declaring a variable for the secound user input
    	switch(operation){
    		case 1:
    		var answer = (+data) + (+secondOperand);
    		display.value = answer;
    		  break;
    		case 2:
    		var answer = data - secondOperand;
    		display.value = answer;
    		  break;
    		case 3:
    		var answer = data * secondOperand;
    		display.value = answer;
    		  break;
    		case 4:
    		var answer = data / secondOperand;
    		display.value = answer;
    		  break;
    		case 5:
    		var answer = 1 / data ;
    		display.value = answer;
    		  break;
    		case 6:
    		var answer = data * data;
    		display.value = answer;
    		 break;
    		case 7:
    		var answer = data * data * data;
    		display.value = answer;
    		 break;
    		}

   }

})




















