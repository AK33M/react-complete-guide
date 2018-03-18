import React, { Component } from 'react';

import Person from "./person/Person";
import styles from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: "vvsfdbvfsx", name: "Dima", age: 32 },
      { id: "^hb6rtevbd", name: "Akeem", age: 32 },
      { id: "6hbn7bxf7y", name: "Another person", age: 2 },
    ],
    otherState: "some other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];

    persons = this.state.persons.filter((person, index) => {
      return index !== personIndex;
    });

    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons =
        (<div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>);

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
        <div className={styles.App}>
          <h1>Hi, I am a React App.</h1>
          <button
            style={style}
            onClick={this.toggleNameHandler}>{this.state.showPersons ? "Hide names" : "Show names"}</button>
          {persons}
          <p className={classes.join(" ")}>{this.state.otherState}</p>
        </div>
    );
  }
}

export default App;