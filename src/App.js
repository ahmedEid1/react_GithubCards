import React from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends React.Component {

    render() {
       const profile = this.props
       return (
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
       )
    }
}

const data = [
    {
        "avatar_url": "https://avatars1.githubusercontent.com/u/53142237?v=4",
        "name": "Ahmed",
        "company": "AAHM",
    },
    {
        "avatar_url": "https://avatars1.githubusercontent.com/u/53142237?v=4",
        "name": "Ahmed",
        "company": "AAHM",
    },
]

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile} />)}
    </div>
)


class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Github username"/>
                <button>Add Card</button>
            </form>
        )
    }
}


class App extends React.Component {
    state = {
        profiles: data,
    }

    render() {
        return (
            <div>
              <div className="header">{this.props.title}</div>
              <Form />
              <CardList profiles={this.state.profiles}/>
            </div>
        )

    }
}


export default App;

//
// {
//     "login": "ahmedEid1",
//     "id": 53142237,
//     "node_id": "MDQ6VXNlcjUzMTQyMjM3",
//
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/ahmedEid1",
//     "html_url": "https://github.com/ahmedEid1",
//     "followers_url": "https://api.github.com/users/ahmedEid1/followers",
//     "following_url": "https://api.github.com/users/ahmedEid1/following{/other_user}",
//     "gists_url": "https://api.github.com/users/ahmedEid1/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/ahmedEid1/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/ahmedEid1/subscriptions",
//     "organizations_url": "https://api.github.com/users/ahmedEid1/orgs",
//     "repos_url": "https://api.github.com/users/ahmedEid1/repos",
//     "events_url": "https://api.github.com/users/ahmedEid1/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/ahmedEid1/received_events",
//     "type": "User",
//     "site_admin": false,
//
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 24,
//     "public_gists": 0,
//     "followers": 0,
//     "following": 1,
//     "created_at": "2019-07-21T11:12:35Z",
//     "updated_at": "2020-09-28T17:01:04Z"
// }
