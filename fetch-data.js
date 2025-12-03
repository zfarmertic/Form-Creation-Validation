

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    const dataContainer = document.getElementById("api-data")

    try{
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        console.log(users)
        dataContainer.innerHTML = ' '

        const userList = document.createElement('ul');

        users.forEach(element => {
            const li = document.createElement('li');

            li.innerHTML= element['name'];
            console.log(li)
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);

    }catch(err){
        dataContainer.innerHTML = ' ';
        dataContainer.textContent = 'Failed to load user data.'
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData)