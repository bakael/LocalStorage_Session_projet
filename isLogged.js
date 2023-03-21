
let logs= []

//function to render log
function renderLogs(){
    logs= JSON.parse(localStorage.getItem('logs'))    
    console.log("User ${logs}[0].name is logged");
}

// check if there are any log in local storage
if (localStorage.getItem('logs')) {
	// get the log array from local storage and parse it
	logs = JSON.parse(localStorage.getItem('logs'));
    renderLogs()
}{
    window.location.href="index.html"
}

//save login information
export function saveLog (name,email,role ){
    // erase logs contends
    logs=[]
    
    //create a new log object
    const log = {
        name:name,
        email: email,
        role:role

    }

    //add the new log to logs array
    logs.push(log)

    //save the logs array to the local storage
    localStorage.setItem('logs', JSON.stringify(logs))

    //display
    renderLogs()
}