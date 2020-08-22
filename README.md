# js-library-khankhi4
1. LINK TO LANDING PAGE: https://quiet-river-09082.herokuapp.com/examples.html
2. LINK TO DOCUMENTATION: https://drive.google.com/file/d/1OHYqqO-m_aSz_IVaqg7nLCrSgNXQ2ad_/view

3. Getting Started:
Place the plug_yourself.js file in the same directory as the program you will be working on.
To start using the Plug Yourself, you must first include the javascript script to the program. You can do this by copying the following line into the body section in your html file.

<script type="text/javascript" src='plug_yourself.js'></script>

The library API can be accessed through javascript calls. As a result you will also need to create another javascript file to call the library API functions. You can do this by copying the following line into the body section in your html file. In our example we call this file “examples.js” but you can call it anything.

<script defer type="text/javascript" src='examples.js'></script>

Now lets try using the library to create a toolbar of social media buttons. We can do this by writing the following code in our “examples.js” file. 

var t1 = new PlugYourself()

var a = t1.getBar()

document.querySelector("body").append(a)

The first line of code creates an instance of the toolbar. The second line of code assigns the toolbar object to a variable. Then in the third line we use this variable to add the toolbar to our document. In our example we appended the toolbar to the body tag but it can be appended to any div as well. Now we have created a toolbar on our page. It is completely empty at the moment so we will use the functions in our library API to populate the toolbar.
