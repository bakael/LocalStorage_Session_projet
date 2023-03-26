const blogList = document.querySelector('#blog-list');
const btnLogout= document.querySelector('#logOut')

let blogs = [];

// login verification
loginVerif()

//logout listeners
btnLogout.addEventListener('click',()=>{
	logs=[]

    //save the logs array to the local storage
    localStorage.setItem('logs', JSON.stringify(logs))

	window.location.href='../login.html'
	alert('You are logout')
})

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
			<div class='interact'>
				<button class="like-btn" data-index="${i}">Like</button>
				<button class="comment-btn" data-index="${i}">comment</button>
				<div>blablabla</div>
			</div>			
		`;

		// set the innerHTML of the blog item to the blog HTML
		blogItem.innerHTML = blogHTML;

		// add the blog item to the blog list
		blogList.appendChild(blogItem);

		// verification of likes
		if(blog.likes){
			const logs= JSON.parse(localStorage.getItem('logs'))

			let likes= blog.likes

			const liked= likes.find(function(isliked){
				return isliked === logs[0].email
			})

			if(liked){
				const likeButton = document.querySelector('.like-btn')
				likeButton.style.backgroundColor = '#64e4a8'
			}
		}
	}

	// add event listeners to the like and edit buttons
	const likeButtons = document.querySelectorAll('.like-btn');
	likeButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const index = button.dataset.index;
			likeBlog(index);
		});
	});

	const commentButtons = document.querySelectorAll('.comment-btn');
	commentButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const index = button.dataset.index;
			commentBlog(index);
		});
	});	
}

// check if there are any blogs in local storage
if (localStorage.getItem('blogs')) {
	// get the blogs array from local storage and parse it
	blogs = JSON.parse(localStorage.getItem('blogs'));

	// render the blogs to the DOM
	renderBlogs();
}

// check if there are any log in local storage
function loginVerif(){
	// get the log array from local storage and parse it
	const logs= JSON.parse(localStorage.getItem('logs'))

	if (logs.length > 0) {
		console.log("User "+ logs[0].name +" is logged")
	}else{	
		alert('You are not logged. Login first')
		window.location.href="../login.html"
	}
}

// function to delete a blog from local storage
function likeBlog(index) {
	// get the blog object from the blogs array
	const blog = blogs[index];

	// get likes liste
	const likes= blog.likes || []

	// get the log array from local storage and parse it
	const logs= JSON.parse(localStorage.getItem('logs'))


	//verfication if it's already liked
	const liked= likes.find(function(isliked){
		return isliked === logs[0].email
	})

	if(liked){
		// dislike
		likes.splice(0, likes.length)
	}else{
		// save the email of the user who likes
		likes.push(logs[0].email)
	}

	// add new likes list on element
	blog.likes=likes

	// update the new element to the blog liste
	blogs.splice(index,1)
	
	blogs.push(blog)

	
	// save the updated blogs array to local storage
	localStorage.setItem('blogs', JSON.stringify(blogs));

	// render the blogs to the DOM
	renderBlogs();
}

function commentBlog(index) {
	// get the blog object from the blogs array
	const blog = blogs[index];

	// get likes liste
	const comments= blog.comments || []

	// get the log array from local storage and parse it
	const logs= JSON.parse(localStorage.getItem('logs'))
}