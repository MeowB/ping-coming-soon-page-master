let button = document.querySelector("input[type=submit]");

button.addEventListener("click", function() {
	event.preventDefault()

	let email = document.querySelector("#email");
	let errorpresent = document.querySelector(".errorDiv");
	let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	let errorDiv = document.createElement("div")
	errorDiv.className = "errorDiv"

	// check if there's already an error displayed and if yes, delete it to make room
	if (errorpresent) {
		errorpresent.remove()
	}
		
	// check if there is an email present in the field and display the corresponding error
	if (!email.value) {
		errorDiv.innerHTML = "Whoops! It looks like you forgot to add your email"
		email.insertAdjacentElement("afterEnd", errorDiv)
		email.style.border = "1px solid hsl(354, 100%, 66%)"
	} else if (regex.test(email.value) === false) { // compare the email to a regex to check the format and display the corresponding error
		errorDiv.innerHTML = "Please provide a valid email address"
		email.insertAdjacentElement("afterEnd", errorDiv)
		email.style.border = "1px solid hsl(354, 100%, 66%)"
	}

	console.log()
})