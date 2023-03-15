// User registration
const user = {
    name: 'Isma',
    email: 'isma@gmail.com',
    password: '123456',
 } // type object
 
 
 // how do I save this user in local storage?
 localStorage.setItem('user', JSON.stringify(user))
 
 // saving user to localstorage
 localStorage.setItem('user', JSON.stringify(user))
 
 //trie

 function verif(key, value) {
    // Filtering out properties
    if (savedUsers.include(user)) {
      return undefined;
    }
    localStorage.setItem('user', JSON.stringify(user))
  }

 // retrieve user
 
 
 const savedUser = JSON.parse(localStorage.getItem('user'))
 const savedUsers=[]
 savedUsers.push(savedUser)
 
 
 document.getElementById('name').innerHTML = savedUser.name
 document.getElementById('email').innerHTML = savedUser.email