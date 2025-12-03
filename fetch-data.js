

const fetchUserData = async() =>{
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    const dataContainer = document.getElementById("api-data")

    try{
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        console.log(users)
        dataContainer.textContent = ''

        const userList = document.createElement("ul");

        users.forEach(element => {
            const li = document.createElement("li");

            li.innerHTML= element["name"];
            console.log(li)
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);

    }catch(err){
        
    }
}
document.addEventListener("DOMContentLoaded", fetchUserData)