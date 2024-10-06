import { getUser } from "./services/users.js"
import { getRepositories } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "./services/events.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isKeyEnterPressed = key === 13
    if (isKeyEnterPressed) {
        if (validateEmptyInput(userName)) return
        getUserProfile(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const eventsResponse = await getEvents(userName)
    const repositoriesResponse = await getRepositories(userName)
    //console.log(userResponse)
    console.log(user)
    user.setInfo(userResponse)
    user.setEvents(eventsResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
}

function validateEmptyInput(userName){
    if (userName.length === 0){
        alert ('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

