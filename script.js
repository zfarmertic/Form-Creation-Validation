document.addEventListener("DOMContentLoaded", ()=>{
    form = document.getElementById("registration-form")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        const feedbackDiv = document.getElementById("form-feedback");

        const username = document.getElementById("username").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();


        let isValid = true;

        const messages = []

        if(username.length < 3){
            isValid = false;
            messages.push("username must be at least three letters")
        }
        if(!email.includes("@") && !email.includes(".")){
            isValid = false;
            messages.push("Enter a valid email address")
        }
        if(password.length < 8){
            isValid = false;
            messages.push("Your password must be at least 8 letters")
        }
        if(isValid){
            feedbackDiv.style.display = "block"
            feedbackDiv.style.color = "#28a745"
            feedbackDiv.textContent = " registration succesful"
        }else {
            feedbackDiv.style.display = "block"
            // const br = document.createElement(br);
            const feedbackCon = messages.join()
            feedbackDiv.textContent = feedbackCon;
        }
    })
})