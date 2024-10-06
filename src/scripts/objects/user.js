const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    events: [],
    repositories: [],
    forks: '',
    stars: '',
    watchers: '',
    language: '',

    setInfo (gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setEvents(userEvents){
        this.events = userEvents
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers
        this.language = repositories.language
    }
}

export { user }