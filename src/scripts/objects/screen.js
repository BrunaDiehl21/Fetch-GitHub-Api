const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class= "info">
                        <img src = "${user.avatarUrl}" alt = "Foto perfil User" />
                        <div class="data">
                        <h1> ${user.name ?? 'Não possui nome cadastrado 😢'} </h1>
                        <p> ${user.bio ?? 'Não possui bio cadastrada 😢'} <br> <br> </p>
                        
                        <div class="seguir">
                        <p class= "seguidores"> Seguidores <br> ${user.followers} </p>
                        <p class= "seguindo"> Seguindo <br> 👥 ${user.following} <br> </p>
                        </div>
                        
                        </div>
                        </div>`

            let repositoriesItens = " "
            user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                                                                    <div class="infoRepo"> 
                                                                    <span>🍴 ${repo.forks} </span>
                                                                    <span>⭐ ${repo.stargazers_count} </span>
                                                                    <span>👀 ${repo.watchers} </span>
                                                                    <span>🧑‍💻 ${repo.language ?? 'Não possui linguagem'} </span>
                                                                    </div>
                                                                    </li>`)

            if(user.repositories.length > 0){
                this.userProfile.innerHTML += `<div class = "repositories section">  
                                                <h2> Repositórios </h2>
                                                <ul>${repositoriesItens}</ul>
                                                </div>`
        }

        let eventsItems = " "
        user.events.forEach(userEvents => {
            const eventName = userEvents.repo.name

            if(userEvents.type === 'CreateEvent'){
            eventsItems += `<li>Sem mensagem de commit</li>`
            }

            if (userEvents.type === 'PushEvent'){
                const eventMessage = userEvents.payload.commits[0].message
                eventsItems += `<li>${eventName} <span>- ${eventMessage} </span></li>`
            }
        })
        if (user.events.length > 0 ){
            this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItems}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}