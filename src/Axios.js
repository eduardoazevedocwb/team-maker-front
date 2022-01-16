import React from 'react';
import axios from 'axios';

export default class Axios extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios.get(`https://localhost:44375/api/Players`)
      .then(res => {
        const players = res.data;
        this.setState({ players });
      })
  }

  render() {
    return (
      <ul>
        { this.state.players.map(player => <li>{player.name}</li>)}
      </ul>
    )
  }
}