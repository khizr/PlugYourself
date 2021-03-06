/* dom content loaded */
"use strict";
const log = console.log
log('Loading DOM Content')

// const t1 = new PlugYourself()
// t1.setIconTheme("blue")
// t1.setColour("#FFF8DC")
// t1.setIconSize(48)
// t1.addButton('facebook', 'https://www.whatsapp.com/')
// t1.addButton('instagram-new', 'https://www.whatsapp.com/')
// t1.addButton('youtube-play', 'https://www.whatsapp.com/')
// t1.addButton('tiktok', 'https://www.whatsapp.com/')
// t1.addButton('twitter', 'https://www.whatsapp.com/')
// t1.addButton('tumblr', 'https://www.whatsapp.com/')
// t1.addButton('wordpress', 'https://www.whatsapp.com/')
// t1.addButton('linkedin', 'https://www.whatsapp.com/')
// t1.addButton('pinterest', 'https://www.whatsapp.com/')
// t1.addButton('facebook-messenger', 'https://www.whatsapp.com/')
// t1.addButton('whatsapp', 'https://www.whatsapp.com/')
// t1.addButton('github', 'https://www.whatsapp.com/')
// t1.addButton('google-plus', 'https://www.whatsapp.com/')
// t1.addButton('reddit', 'https://www.skype.com/en/')
// t1.addButton('share', 'https://twitter.com/UofT')
// t1.addShareButton()


var t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(48)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')

t1.openInNewTab()
t1.addHoverDarken()
t1.addRoundedCorners()
var a = t1.getBar()
document.getElementById("first_example").append(a)


var t2 = new PlugYourself()
t2.setIconTheme("ios")
t2.setColour("#FFC0CB")
t2.setIconSize(60)
t2.addButton('youtube-play', 'https://www.youtube.com/user/universitytoronto')
t2.addButton('instagram', 'https://www.instagram.com/uoft/?hl=en')
t2.addButton('twitter', 'https://twitter.com/UofT')
t2.addButton('facebook', 'https://www.facebook.com/')
t2.addButton('tiktok', 'https://www.tiktok.com/en/')
t2.addButton('tumblr', 'https://www.tumblr.com/')
t2.addButton('wordpress', 'https://wordpress.com/')
t2.addButton('linkedin', 'https://www.linkedin.com/')
t2.addButton('pinterest', 'https://www.pinterest.ca/')
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('github', 'https://github.com/')
t2.addButton('google-plus', 'https://myaccount.google.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
t2.addButton('share', 'https://www.squarespace.com/')
var b = t2.getBar()
document.getElementById("second_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("ios")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("color")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("gradient")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("cute_outline")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("cute")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("dotted")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("cloud")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("hand_drawn")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("doodle")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("office")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("bubbles")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("hand_drawn_outline")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("clipart")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t2 = new PlugYourself()
t2.setIconTheme("blue")
t2.setColour("#FDF5E6")
t2.setIconSize(60)
t2.addButton('facebook-messenger', 'https://www.messenger.com/')
t2.addButton('whatsapp', 'https://www.whatsapp.com/')
t2.addButton('reddit', 'https://www.reddit.com/')
var b = t2.getBar()
document.getElementById("third_example").append(b)

t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(48)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')
t1.shapeToVertical()
var a = t1.getBar()
document.getElementById("fourth_example").append(a)

t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(48)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')
t1.addButton('tumblr', 'https://www.whatsapp.com/')
t1.addButton('tiktok', 'https://www.whatsapp.com/')
t1.addButton('wordpress', 'https://www.whatsapp.com/')
t1.addButton('google-plus', 'https://www.whatsapp.com/')
t1.maxInRow(3)
var a = t1.getBar()
document.getElementById("fifth_example").append(a)

t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(48)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')
t1.addButton('tumblr', 'https://www.whatsapp.com/')
t1.maxInRow(2)
var a = t1.getBar()
document.getElementById("fifth_example").append(a)

t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(48)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')
t1.openInNewTab()
var a = t1.getBar()
document.getElementById("sixth_example").append(a)

t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(48)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')
t1.addHoverDarken()
var a = t1.getBar()
document.getElementById("seventh_example").append(a)

t1 = new PlugYourself()
t1.setIconTheme("cute")
t1.setColour("#FDF5E6")
t1.setIconSize(70)
t1.addButton('whatsapp', 'https://www.whatsapp.com/')
t1.addButton('instagram', 'https://www.skype.com/en/')
t1.addButton('tumblr', 'https://twitter.com/UofT')
t1.addButton('facebook-messenger', 'https://www.facebook.com/universitytoronto')
t1.addButton('reddit', 'https://www.whatsapp.com/')
t1.addHoverDarken()
t1.setBorderColour("brown")
t1.setColour("yellow")
t1.addRoundedCorners()
var a = t1.getBar()
document.getElementById("eighth_example").append(a)

var t5 = new PlugYourself()
var a = t5.getBar()
document.querySelector("body").append(a)


// const t3 = new PlugYourself()
// t3.setIconTheme("pastel")
// t3.setColour("#FFC0CB")
// t3.setIconSize(48)
// t3.addButton('youtube', 'https://www.youtube.com/user/universitytoronto')
// t3.addButton('instagram', 'https://www.instagram.com/uoft/?hl=en')
// t3.addButton('twitter', 'https://twitter.com/UofT')

// const t4 = new PlugYourself()
// t4.setIconTheme("pastel")
// t4.setColour("#FFC0CB")
// t4.setIconSize(60)
// t4.addButton('youtube', 'https://www.youtube.com/user/universitytoronto')
// t4.addButton('instagram', 'https://www.instagram.com/uoft/?hl=en')
// t4.addButton('twitter', 'https://twitter.com/UofT')



// const t5 = new PlugYourself()
// t5.setIconTheme("handDrawn")
// t5.setColour("#FFC0CB")
// t5.setIconSize(48)
// t5.addButton('youtube', 'https://www.youtube.com/user/universitytoronto')
// t5.addButton('instagram', 'https://www.instagram.com/uoft/?hl=en')
// t5.addButton('twitter', 'https://twitter.com/UofT')

// const t6 = new PlugYourself()
// t6.setIconTheme("material")
// t6.setColour("#FFC0CB")
// t6.setIconSize(48)
// t6.addButton('youtube', 'https://www.youtube.com/user/universitytoronto')
// t6.addButton('instagram', 'https://www.instagram.com/uoft/?hl=en')
// t6.addButton('twitter', 'https://twitter.com/UofT')
// t6.addHoverDarken()




//const cg2 = new CircleGenerator() // will have its own circles seperate from cg, but the same prototype reference