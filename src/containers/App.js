import React from 'react';
import standards from 'standards.json';
import { getPassFail, getNextLowestKey, getNextHighestKey } from 'utils/Helpers';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Footer from 'components/Footer';
import ResultsDial from 'components/ResultsDial';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      gender: 'male',
      age: '17-21',
      count: {
        pu: '0',
        su: '0',
        min: '00',
        sec: '00'
      },
      score: {
        pu: '0',
        su: '0',
        run: '0',
        total: '0'
      },
      pass: {
        pu: false,
        su: false,
        run: false
      },
      error: {
        pu: false,
        su: false,
        run: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id.replace('apft_', '');

    let gender = this.state.gender;
    let age = this.state.age;
    let score = { ...this.state.score };
    let count = { ...this.state.count };
    let pass = { ...this.state.pass };
    let error = { ...this.state.error };

    // assign changed value to corresponding item
    if (id.startsWith("gender_")) {
      gender = value;
      this.setState({ gender });
    } else if (id.startsWith("age_")) {
      age = value;
      this.setState({ age });
    } else if ('pu' === id) {
      count.pu = value;
    } else if ('su' === id) {
      count.su = value;
    } else if ('min' === id) {
      count.min = value.padStart(2, "0");
    } else if ('sec' === id) {
      count.sec = value.padStart(2, "0");
    } else {
      alert('Something went wrong.');
    }

    // change object keys to arrays for easier sorting
    const puArray = Object.keys(standards[gender]['push-ups']);
    const suArray = Object.keys(standards[gender]['sit-ups']);
    const timeArray = Object.keys(standards[gender]['run']);

    // filter user reps to be within available range
    const puFinal = getNextLowestKey(puArray, count.pu);
    const suFinal = getNextLowestKey(suArray, count.su);

    // grab the scores from the json data
    score.pu = standards[gender]['push-ups'][puFinal][0][age];
    score.su = standards[gender]['sit-ups'][suFinal][0][age];

    if ((count.min + count.sec) === '0000') {
      score.run = 0;
    } else {
      // filter user run time to be taken from available time
      const runFinal = getNextHighestKey(timeArray, (count.min + count.sec));
      score.run = standards[gender]['run'][runFinal][0][age];
    }
    score.total = score.pu + score.su + score.run;

    // get pass/fail (boolean)
    pass.pu = getPassFail(score.pu);
    pass.su = getPassFail(score.su);
    pass.run = getPassFail(score.run);

    this.setState({ score });
    this.setState({ count });
    this.setState({ pass });
    this.setState({ error });
  }

  render() {
    return (
      <div className="App">
        <Sidebar handleChange={this.handleChange} age={this.state.age} />
        <ResultsDial handleChange={this.handleChange} score={this.state.score} pass={this.state.pass} r="60" />
        <Main handleChange={this.handleChange} score={this.state.score} gender={this.state.gender} count={this.state.count} />
        <Footer />
      </div>
    );
  }
}

export default App;
