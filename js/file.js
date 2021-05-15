/*global document*/
/*eslint-disable no-mixed-spaces-and-tabs*/
var myInput = document.querySelector("input"),
	myButton = document.getElementById("button");
myButton.onclick = function () {
	'use strict';
	var myLi = document.createElement("li"),
	    myText = document.createTextNode(myInput.value),
		myUl = document.getElementById("myUl"),
	    close = document.createElement("button"),
	    x = document.createTextNode("x"),
		myIcon = document.createElement("i"),
		myAttr = document.createAttribute("class"),
		myP = document.getElementById("myP");
	if(myInput.value === ""){
		myP.innerHTML = "Please Enter A Value...";
		myP.style.fontSize = "18px";
		myP.style.textAlign = "left";
		myP.style.marginLeft = "75px";
	}
	else {
		myAttr.value = "fa fa-check";
		myIcon.setAttributeNode(myAttr);
		myUl.appendChild(myLi);
		myLi.appendChild(myText);
		myUl.style.listStyle = "none";
		myLi.style.padding = "10px";
		myLi.style.color = "#555";
		myLi.style.backgroundColor = "#fcfcfc";
		myLi.style.fontSize = "20px";
		myLi.style.borderBottom = "2px solid #333";
		myLi.appendChild(close);
		close.appendChild(x);
		myLi.childNodes[1].style.display = "inline";
		myLi.childNodes[1].style.float = "right";
		myLi.childNodes[1].style.border = "none";
		myLi.childNodes[1].style.background = "none";
		myLi.childNodes[1].style.fontSize = "20px";
		myLi.childNodes[1].style.cursor = "pointer";
		myLi.childNodes[1].style.padding = "0 5px";
		myLi.childNodes[1].onclick = function () {
			this.parentElement.style.display = "none";
		};
		myLi.onclick = function () {
			myLi.appendChild(myIcon);
			myLi.style.textDecoration = "line-through";
			myLi.childNodes[2].style.float = "left";
			myLi.childNodes[2].style.margin = "0 10px";
		};
		myP.innerHTML = "";
	}
};
