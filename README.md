# nodejs-with-ejs
Learning how to use NodeJS with EJS to render html pages

Anotations done while developing the project 

- To begin with, we use the extension `.ejs` instead `.html` in our files 
- after using this extension, it'll stop woking in the browser, we need to install the EJS
	- `npm install ejs` 
- we're also going to need to install `express` so we can get up a server
	- `npm install express` 
- then we create a file named `server.js`, is where we're going to get out server up and running
- `node server` to run the server, it's going to give an error
- looking at the error, we see that we need to put our `index.ejs` file inside a folder named `views`, then it runs
- HOW TO include parts of html from individual files in your html with `ejs` syntax:
	- `<%- include('file_name'); %>`  : the `<%- %> ` tells the code that you're about to use a command `ejs` inside, in our case it's `include` for fraction of code
	- EJS also allows us to send objects for the file that we're including
		- `<%- include('file_name', {page: 'about'}); %>` , then we can go in the file that we included and manipulate the value that was sent. If we mention in one `include` a object, we are bound to mention in all the places where this file is included, or do as below
		- if we don't WANT to send this object in all the pages that `includes` the file that we passed the object, we can do as below
			- `<%= typeof page != 'undefined' ? page: 'Home'` : you can notice that after `<%` now we used the equal (=) sign and not the dash (-) sign, this is to let the IDE know that we're rendering something that was sent dynamically. Same case used in the .forEach in the `index` page
- All the changes made to `.ejs` files are re-rendered automatically by the server, we only need to restart the server when we make changes to any `.js` file. 
- because we have all the files inside the `views` folder, we have to split them in more meaningful folders. We will create two new folders called `pages` and `partials` were we will put both `index` and `about` files inside the `pages` and all the other files that are shared, we will put them into the `partials` folder
- in the `server.js` file in the route for the page `index`  we can observe that we are using again the option to send a object with the route, but this time it's an array
