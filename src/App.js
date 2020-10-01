import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


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


const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile} />)}
    </div>
)


class Form extends React.Component {
    state = {
        username: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`)
        this.props.onSubmit(response.data)
        this.setState({username: ''})
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
        profiles: [],
    }
    addNewProfile = (profile) => {
        this.setState(prevState => ({
            profiles: [...this.state.profiles, profile],
        }))
    }
    render() {
        return (
            <div>
              <div className="header">{this.props.title}</div>
              <Form onSubmit={this.addNewProfile}/>
              <CardList profiles={this.state.profiles}/>
            </div>
        )

    }
}


export default App;

