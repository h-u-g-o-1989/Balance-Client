import React from "react";
import { upload } from "../../services/auth";

const hoursOptions = new Array(25).fill(1).map((_, i) => i);
const monthsOptions = new Array(31).fill(1).map((_, i) => i + 1);

// const getHoursLeft = (counter) =>
//   new Array(25 - counter).fill(1).map((_, i) => i);

class DayUpload extends React.Component {
  state = {
    work: 0,
    chores: 0,
    sleep: 0,
    leisure: 0,
    selfCare: 0,
    mood: "",
    day: 1,
    month: "January",
    total: 0,
  };

  handleChange = (event) => {
    // console.log(this.state.total)
    // console.log(event.target.name, ": ", event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  /*component did update always needs a conditional to stop it becoming and infinte loop, it would call compnent did update which would render which would call component did update etc etc*/
  componentDidUpdate = () => {
    const newTotal =
      Number(this.state.chores) +
      Number(this.state.work) +
      Number(this.state.sleep) +
      Number(this.state.leisure) +
      Number(this.state.selfCare);
    if (this.state.total !== newTotal) {
      this.setState({
        total: newTotal,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Submitting form to backend", this.state);
    const credentials = this.state;

    upload(credentials).then((res) => {
      //console.log(res)

      this.props.history.push("/daily-report");
    });
  };
  render() {
    const counterOfHours =
      +this.state.work +
      +this.state.sleep +
      +this.state.chores +
      +this.state.leisure +
      +this.state.selfCare;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <label htmlFor="work">Work: </label>
            <select
              name="work"
              value={this.state.work}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="sleep">Sleep: </label>
            <select
              name="sleep"
              value={this.state.sleep}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="chores">Chores: </label>
            <select
              name="chores"
              value={this.state.chores}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="leisure">Leisure: </label>
            <select
              name="leisure"
              value={this.state.leisure}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="selfCare">Self-Care: </label>
            <select
              name="selfCare"
              value={this.state.selfCare}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="mood">Mood of the Day: </label>
            <select
              name="mood"
              value={this.state.mood}
              onChange={this.handleChange}
            >
              <option>Select One</option>
              <option value="Angry">Angry</option>
              <option value="Calm">Calm</option>
              <option value="Excited">Excited</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Stressed">Stressed</option>
              <option value="Tired">Tired</option>
            </select>
            <br />
            <label htmlFor="day">Day: </label>
            <select
              name="day"
              value={this.state.day}
              onChange={this.handleChange}
            >
              {monthsOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="month">Month: </label>
            <select
              name="month"
              value={this.state.month}
              onChange={this.handleChange}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </label>
          <br />
          <h2>{counterOfHours} h scheduled</h2>
          {/* {(this.state.total > 24 && <h1>Too many hours</h1>) ||
            (this.state.total < 24 && (
              <h3>Please make sure the total adds up to 24h.</h3>
            )) || <input type="submit" value="Submit" />} */}

          {counterOfHours > 24 ? (
            <h3>Please make sure the total adds up to 24h.</h3>
          ) : counterOfHours < 24 ? (
            <h3>Please make sure the total adds up to 24h.</h3>
          ) : (
            <button className="submitButton" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default DayUpload;
