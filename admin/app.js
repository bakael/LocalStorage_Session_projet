const blogForm = document.querySelector('#blog-form');
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
			<button class="delete-btn" data-index="${i}">Delete</button>
			<button class="edit-btn" data-index="${i}">Edit</button>
		`;

		// set the innerHTML of the blog item to the blog HTML
		blogItem.innerHTML = blogHTML;

		// add the blog item to the blog list
		blogList.appendChild(blogItem);
	}

	// add event listeners to the delete and edit buttons
	const deleteButtons = document.querySelectorAll('.delete-btn');
	deleteButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const index = button.dataset.index;
			deleteBlog(index);
		});
	});

	const editButtons = document.querySelectorAll('.edit-btn');
	editButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const index = button.dataset.index;
			editBlog(index);
		});
	});
}

// function to save a blog to local storage
function saveBlog(title, image, content) {
	// create a new blog object
	const blog = {
		title: title,
		image: image,
		content: content
	};

	// add the new blog to the blogs array
	blogs.push(blog);

	// save the blogs array to local storage
	localStorage.setItem('blogs', JSON.stringify(blogs));

	// render the blogs to the DOM
	renderBlogs();
}

// function to delete a blog from local storage
function deleteBlog(index) {
	// remove the blog from the blogs array
	blogs.splice(index, 1);

	// save the updated blogs array to local storage
	localStorage.setItem('blogs', JSON.stringify(blogs));

	// render the blogs to the DOM
	renderBlogs();
}

// function to edit a blog
function editBlog(index) {
	// get the blog object from the blogs array
	const blog = blogs[index];

	// set the values of the form inputs to the values of the blog object
	document.querySelector('#title').value = blog.title;
	document.querySelector('#image').value = blog.image;
	document.querySelector('#content').value = blog.content;

	// remove the blog from the blogs array
	blogs.splice(index, 1);

	// save the updated blogs array to local storage
	localStorage.setItem('blogs', JSON.stringify(blogs));

	// render the blogs to the DOM
	renderBlogs();
}

// check if there are any blogs in local storage
if (localStorage.getItem('blogs')) {
	// get the blogs array from local storage and parse it
	blogs = JSON.parse(localStorage.getItem('blogs'));

	// render the blogs to the DOM
	renderBlogs();
}

// add event listener to the blog form
blogForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// get the values of the form inputs
	const title = document.querySelector('#title').value;
	const image = document.querySelector('#image').value;
	const content = document.querySelector('#content').value;

	// save the blog to local storage
	saveBlog(title, image, content);

	// reset the form
	blogForm.reset();
});