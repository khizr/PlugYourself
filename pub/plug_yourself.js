/* JS Library */
"use strict";
console.log('Js libraries')

// Let's make a small Jquery clone.
// one way to make a library is to write a function
// that returns an object with the library functions, important
// values, etc.

function $$$(selector) {

	const _self = {}
	_self.selector = selector
	_self.element = document.querySelector(selector) 

	_self.text = function() {
		return _self.element.innerText
	}

	_self.addClass = function(className) {
		if (!_self.element.classList.contains(className)) {
			_self.element.classList.add(className)
		}
	}

	_self.attr = function(name, value) {
		if (!value) {
			return _self.element.getAttribute(name)
		} else {
			_self.element.setAttribute(name, value)
		}
	}

	return _self
}

///////
// Different way of creating library: creating an object constructor and then
// adding to its prototype.

// A Circle Generator Library

function PlugYourself() {
	this.bar = document.createElement('div')
	this.bar.style = 'display: block;'
	document.querySelector('body').append(this.bar)
	// this..
	// this.. (any values you need for each 'instance' of this library)
}

// Added common funcionality to the prototype property of the constructor.
PlugYourself.prototype = {

	addButton: function(link) {
		var a = document.createElement('a');  
        // Create the text node for anchor element. 
    	//var link = document.createTextNode("This is link"); 
        //a.appendChild(link);  
        //a.title = "This is Link";  
        a.href = link;  
		a.style='background-color: red; color: white; padding: 5px; text-decoration: none; text-transform: uppercase;'
		
		const image = document.createElement('img')
		image.src = "https://img.icons8.com/plasticine/100/000000/adobe-acrobat.png"
		a.appendChild(image)
        // Append the anchor element to the body. 
		this.bar.appendChild(a);  
		
	},

	changeCirclesColor: function() {
		for (let i = 0; i < this.circles.length; i++) {
			this.circles[i].style.backgroundColor = 'darkmagenta'
		}
	}

}














