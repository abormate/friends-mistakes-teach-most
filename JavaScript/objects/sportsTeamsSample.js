const team = {
  _players: [{firstName: 'Paul', lastName: 'Pierce', age: 35}, {firstName: 'David', lastName: 'Matthews', age: 55}, {firstName: 'James', lastName: 'Peters', age: 48} ],
  _games: [{opponent: 'South Rockets', teamPoints: 75, opponentPoints: 73}, {opponent: 'Boston Celts', teamPoints: 82, opponentPoints: 79}, {opponent: 'Atlantic Taxi', teamPoints: 55, opponentPoints: 63}],
  get players() {
    return (this._players);
  },
  get games() {
    return (this._games);
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  }
};
