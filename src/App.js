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
    state = {
        username: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            this.state.username
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github username"
                       value={this.state.username}
                       onChange={event => this.setState({username: event.target.value})}
                       required/>
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

