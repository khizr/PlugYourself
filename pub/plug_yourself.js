/* JS Library */
"use strict";
console.log('creating js library')

function PlugYourself() {
	this.bar = this.createBar()
	this.barID = PlugYourself.counter
	PlugYourself.counter++
	this.buttons = []
	this.theme = "ios"
	this.iconSize = 20
	console.log(this)
	//this.title = this.createTitle()
}

PlugYourself.counter = 0

PlugYourself.link_variables = {
	"ios": "ios-glyphs",
	"color": "color",
	"gradient": "nolan",
	"cute_outline": "wired",
	"cute": "dusk",
	"dotted": "dotty",
	"cloud": "clouds",
	"hand_drawn": "plasticine",
	"doodle": "doodle",
	"bubbles": "bubbles",
	"hand_drawn_outline": "carbon-copy",
	"office": "office",
	"clipart": "cute-clipart",
	"blue": "ultraviolet"
}

PlugYourself.prototype = {

	createBar: function() {
		const bar = document.createElement('div')
		bar.style = 'display: inline-block; padding: 10px; margin: 10px; border: 3px solid;'
		return bar
	},

	getBar: function() {
		return this.bar
	},

	setColour: function(colour) {
		this.bar.style.backgroundColor = colour
	},

	addButton: function(type, link) {
		var a = document.createElement('a');
        a.href = link;  
		a.style='color: white; padding: 5px; text-decoration: none; text-transform: uppercase;'

		const image = document.createElement('img')
		image.src = this.getImageLink(type)
		image.style.width = self.IconSize + "px"
		image.style.height = self.IconSize + "px"
		//image.style.border = "2px solid transparent"
		//image.style.borderColor = this.bar.style.backgroundColor
		image.className = "_" + this.barID
		a.appendChild(image)
		this.bar.appendChild(a); 
		this.buttons.push([a, type, link]) 
		
	},

	shapeToVertical: function(){
		var style = document.createElement('style');
		var hover_style = document.createTextNode("._" + this.barID + "{display:block;}");
		style.appendChild(hover_style);
		
		var i;
		for(i=0; i<this.buttons.length; i++){
			this.buttons[i][0].appendChild(style)
			console.log(this.buttons[i][0].className)
		}
	},

	maxInRow: function(max){
		var max_width = (this.IconSize + 10) * max + 26
		this.bar.style.maxWidth = max_width + "px"
	},

	openInNewTab(){
		var i
		for (i = 0; i < this.buttons.length; i++){
			this.buttons[i][0].target = "_blank"
		}
	},

	addHoverDarken: function(){
		var style = document.createElement('style');
		var hover_style = document.createTextNode("._" + this.barID + ":hover {opacity: 0.6;}");
		style.appendChild(hover_style);
		
		var i;
		for(i=0; i<this.buttons.length; i++){
			this.buttons[i][0].appendChild(style)
			console.log(this.buttons[i][0].className)
		}
	},

	addRoundedCorners: function(){
		this.bar.style.borderRadius = "10px"
	},

	setBorderColour: function(colour){
		this.bar.style.borderColor = colour
	},

	setIconTheme: function(theme) {
		this.theme = theme
		
	},

	setIconSize: function(size) {
		this.IconSize = size
		
	},

	getImageLink: function(type){
		var link = "https://img.icons8.com/" + PlugYourself.link_variables[this.theme] + "/" + this.IconSize + "/000000/" + type + ".png"
		return link
	}

}














