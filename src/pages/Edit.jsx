import React from "react";
// import axios from "axios";
import DayUpload from "../components/DayUpload/DayUpload";
import {
  updateSingleDay,
  getSingleDay,
  getDayAndDelete,
} from "../services/auth";

const hoursOptions = new Array(25).fill(1).map((_, i) => i);
const monthsOptions = new Array(31).fill(1).map((_, i) => i + 1);

// Extra sprinkle to limit nº of hours you can see. Doesn't work.
// const getHoursLeft = (counter) =>
//   new Array(25 - counter).fill(1).map((_, i) => i);

class Edit extends React.Component {
  state = {
    dayInfo: null,
    total: 0,
  };

  componentDidMount = () => {
    // console.log(this.props.match);
    getSingleDay(this.props.match.params.id).then((dayInfo) => {
      // console.log("Component did mount correctly", dayInfo);
      this.setState({
        dayInfo,
      });
    });
  };

  handleChange = (event) => {
    // console.log("It's working");
    const { name, value } = event.target;
    this.setState({
      dayInfo: {
        ...this.state.dayInfo,
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    updateSingleDay(this.props.match.params.id, this.state.dayInfo).then(
      (res) => {
        if (!res.status) {
          console.log("ERROR HERE");
          return;
        }
        this.props.history.push("/daily-report");
      }
    );
  };

  handleDelete = (event) => {
    event.preventDefault();
    // console.log("this.props.match.params.id", this.props.match.params.id);
    getDayAndDelete(this.props.match.params.id).then((res) => {
      // console.log("RES: ", res);
      if (!res.status) {
        return;
      }
      this.props.history.push("/daily-report");
    });
  };

  render() {
    if (!this.state.dayInfo) {
      return <div>Loading...</div>;
    }
    const counterOfHours =
      +this.state.dayInfo.work +
      +this.state.dayInfo.sleep +
      +this.state.dayInfo.chores +
      +this.state.dayInfo.leisure +
      +this.state.dayInfo.selfCare;
    // console.log(counterOfHours);
    // console.log("Dayinfo", this.state.dayInfo);
    return (
      <div>
        <h1>{counterOfHours} h scheduled</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <label htmlFor="work">Work</label>
            <select
              name="work"
              value={this.state.dayInfo.work}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="sleep">Sleep</label>
            <select
              name="sleep"
              value={this.state.dayInfo.sleep}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="chores">Chores</label>
            <select
              name="chores"
              value={this.state.dayInfo.chores}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="leisure">Leisure</label>
            <select
              name="leisure"
              value={this.state.dayInfo.leisure}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="selfCare">Self-Care</label>
            <select
              name="selfCare"
              value={this.state.dayInfo.selfCare}
              onChange={this.handleChange}
            >
              {hoursOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="mood">Mood of the Day</label>
            <select
              name="mood"
              value={this.state.dayInfo.mood}
              onChange={this.handleChange}
            >
              {/* <option>Select One</option> */}
              <option value="Angry">Angry</option>
              <option value="Calm">Calm</option>
              <option value="Excited">Excited</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Stressed">Stressed</option>
              <option value="Tired">Tired</option>
            </select>
            <br />
            <label htmlFor="day">Day</label>
            <select
              name="day"
              value={this.state.dayInfo.day}
              onChange={this.handleChange}
            >
              {monthsOptions.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
            <br />
            <label htmlFor="month">Month</label>
            <select
              name="month"
              value={this.state.dayInfo.month}
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
          {counterOfHours > 24 ? (
            <h1>Too many hours</h1>
          ) : counterOfHours < 24 ? (
            <h3>Please make sure the total adds up to 24h.</h3>
          ) : (
            <button type="¨submit">Submit</button>
          )}

          <button onClick={this.handleDelete}>Delete this data</button>
        </form>
      </div>
    );
  }
}

export default Edit;
