const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuario />"
                        <div class="data">
                             <h1>${user.name ?? 'Não possui nome castrado😓'}</h1>
                             <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p>
                             <p>👥Seguidores ${user.followers ?? 'Não possui seguidores'} </p>
                             <p>👤Seguindo ${user.following ?? 'Não segue ninguém'}</p>                           
                        </div>
                    </div>`


        let repositoriesItems = ''
        user.repositories.forEach(repo => {
            repositoriesItems += `
                    <li>
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        <div class = "repo-infos">
                        <p>🍴: ${repo.forks_count}</p>
                        <p>⭐: ${repo.stargazers_count}</p>
                        <p>👁️‍🗨️: ${repo.watchers_count}</p>
                        <p>♾️: ${repo.language}</p>
                        </div>
                    </li>`})

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                        <div class="repositories section">
                            <hr>
                            <h2>Repositórios</h2>
                            <ul>${repositoriesItems}</ul>
                            <hr>
                        </div>`
        }

        let eventsItens = ''
        user.events.forEach(even => {
            if (even.type === 'PushEvent') {
                eventsItens += `<li>${even.repo.name} - ${even.payload.commits[0].message} </li>`
            }
        })
        if(user.eventsItens != ''){
            this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItens}</ul>
            </div>
        `
    }else{
        this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Events</h2>
                    <p>Sem mensagem de commit</p>
                </div>
            `
    }
        


    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }
