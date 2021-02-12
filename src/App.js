import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import AttackTitan from './assets/img/attack.png';
import BeastTitan from './assets/img/beast.png';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      titans: [
        {
          name: 'Colossal Titan',
          key: 1,
          image: require('./assets/img/colossal.png').default,
          human: 'Armin Alert',
        },
        {
          name: 'Armored Titan',
          key: 2,
          image: require('./assets/img/armored.png').default,
          human: 'Reiner Braun',
        },
        {
          name: 'Attack Titan',
          key: 3,
          image: AttackTitan,
          human: 'Eren Yeager',
        },
        {
          name: 'Female Titan',
          key: 4,
          image: require('./assets/img/leviattack.gif').default,
          human: 'Annie Leonhart',
        },
        {
          name: 'Beast Titan',
          key: 5,
          image: BeastTitan,
          human: 'Zeke Yeager',
        },
        {
          name: 'Jaw Titan',
          key: 6,
          image: require('./assets/img/jaw.png').default,
          human: 'Reiner Braun',
        },
        {
          name: 'Founding Titan',
          key: 7,
          image: require('./assets/img/founding.png').default,
          human: 'Freida Reiss',
        },
        {
          name: 'Cart Titan',
          key: 8,
          image: require('./assets/img/cart.png').default,
          human: 'Pieck',
        },
        {
          name: 'Warhammer Titan',
          key: 9,
          image: require('./assets/img/warhammer.png').default,
          human: 'Lara Tybur',
        },
      ],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ titans: users }));
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { titans, searchField } = this.state;
    const filteredTitans = titans.filter(titan =>
      titan.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>The Nine Titans</h1>
        <SearchBox
          placeholder="Search Titans"
          handleChange={e => this.handleChange(e)}
        />
        <CardList titans={filteredTitans} />
      </div>
    );
  }
}

export default App;
 