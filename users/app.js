const blogList = document.querySelector('#blog-list');

let blogs = [];

// function to render blogs to the DOM
function renderBlogs() {
	// clear the blog list
	blogList.innerHTML = '';

	// loop through blogs and create HTML for each one
	for (let i = 0; i < blogs.length; i++) {
		const blog = blogs[i];

		// create a new blog item element
		const blogItem = document.createElement('div');
		blogItem.classList.add('blog-item');

		// create HTML for the blog item
		const blogHTML = `
			<h2>${blog.title}</h2>
			<img src="${blog.image}">
			<p>${blog.content}</p>
			
		`;

		// set the innerHTML of the blog item to the blog HTML
		blogItem.innerHTML = blogHTML;

		// add the blog item to the blog list
		blogList.appendChild(blogItem);
	}
	
}

// check if there are any blogs in local storage
if (localStorage.getItem('blogs')) {
	// get the blogs array from local storage and parse it
	blogs = JSON.parse(localStorage.getItem('blogs'));

	// render the blogs to the DOM
	renderBlogs();
}