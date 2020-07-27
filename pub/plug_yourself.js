/* JS Library */
"use strict";
console.log('creating js library')

function PlugYourself() {
	this.bar = this.createBar()
	this.buttons = []
	this.theme = "handDrawn"
	this.iconSize = 20
	//this.title = this.createTitle()
}

PlugYourself.prototype = {

	createBar: function() {
		const bar = document.createElement('div')
		bar.style = 'display: inline-block; padding: 10px; margin: 10px; border: 3px solid;'
		document.querySelector('body').append(bar)
		return bar
	},

	// createTitle: function() {
	// 	const title_div = document.createElement('div')
	// 	const title_text = document.createElement('h3')
	// 	//title_text.appendChild(document.createTextNode("Check out my links below"))
	// 	title_text.style = "display: inline-block"
	// 	title_div.appendChild(title_text)
	// 	this.bar.appendChild(title_div)
	// 	return title_div
	// },

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
		a.appendChild(image)
		this.bar.appendChild(a);  
		
	},

	setIconTheme: function(theme) {
		self.theme = theme
		
	},

	setIconSize: function(size) {
		self.IconSize = size
		
	},

	getImageLink: function(type) {
		if (type === "youtube" && self.theme === "handDrawn"){
			return "https://img.icons8.com/plasticine/100/000000/youtube-play.png"
		}
		else if (type === "instagram" && self.theme === "handDrawn"){
			return "https://img.icons8.com/plasticine/100/000000/instagram-new.png"
		}
		else if (type === "twitter" && self.theme === "handDrawn"){
			return "https://img.icons8.com/plasticine/100/000000/twitter.png"
		}
		else if (type === "messenger" && self.theme === "handDrawn"){
			return "https://img.icons8.com/plasticine/100/000000/facebook-messenger.png"
		}
		else if (type === "whatsapp" && self.theme === "handDrawn"){
			return "https://img.icons8.com/plasticine/100/000000/whatsapp.png"
		}
		else if (type === "skype" && self.theme === "handDrawn"){
			return "https://img.icons8.com/plasticine/100/000000/skype.png"
		}
		else if (type === "youtube" && self.theme === "pastel"){
			return "https://img.icons8.com/cotton/64/000000/youtube.png"
		}
		else if (type === "instagram" && self.theme === "pastel"){
			return "https://img.icons8.com/cotton/64/000000/instagram-new.png"
		}
		else if (type === "twitter" && self.theme === "pastel"){
			return "https://img.icons8.com/cotton/64/000000/twitter.png"
		}
		else if (type === "messenger" && self.theme === "pastel"){
			return "https://img.icons8.com/cotton/64/000000/facebook-messenger--v3.png"
		}
		else if (type === "whatsapp" && self.theme === "pastel"){
			return "https://img.icons8.com/cotton/64/000000/whatsapp--v4.png"
		}
		else if (type === "skype" && self.theme === "pastel"){
			return "https://img.icons8.com/cotton/64/000000/skype.png"
		}
		else if (type === "youtube" && self.theme === "material"){
			return "https://img.icons8.com/material-rounded/96/000000/youtube.png"
		}
		else if (type === "instagram" && self.theme === "material"){
			return "https://img.icons8.com/material-rounded/96/000000/instagram-new.png"
		}
		else if (type === "twitter" && self.theme === "material"){
			return "https://img.icons8.com/material-rounded/96/000000/twitter.png"
		}
		else if (type === "messenger" && self.theme === "material"){
			return "https://img.icons8.com/material-rounded/96/000000/facebook-messenger.png"
		}
		else if (type === "whatsapp" && self.theme === "material"){
			return "https://img.icons8.com/material-rounded/96/000000/whatsapp.png"
		}
		else if (type === "skype" && self.theme === "material"){
			return "https://img.icons8.com/material-rounded/96/000000/skype.png"
		}
	}

}














