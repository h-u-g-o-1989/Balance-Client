import React, { Component } from "react";
import { getDays } from "../services/auth";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import "./protectedDay.css";

class ProtectedDay extends Component {
  state = {
    days: [],
    work: "",
    sleep: "",
    leisure: "",
    selfCare: "",
    mood: "",
    day: "",
    month: "",
    loading: true,
  };

  componentDidMount = () => {
    getDays().then((res) => {
      // console.log("COMPONENT-DID-MOUNT", res)
      this.setState({ days: res.data, loading: false });
    });
  };

  deleteDay = (id) => {
    const daysArr = this.state.days.filter((day) => day.id !== id);
    this.setState({ days: daysArr });
  };

  render() {
    // console.log("AFTER RENDER", this.state);

    const chartData = this.state.days.map((day) => [
      ["Task", "Hours per Day"],
      ["work", day.work],
      ["chores", day.chores],
      ["sleep", day.sleep],
      ["leisure", day.leisure],
      ["selfCare", day.selfCare],
    ]);

    // console.log(chartData);

    if (this.state.loading) {
      return <div>Loading....</div>;
    }

    const options = {
      title: "My Daily Activities",
      pieHole: 0.4,
      is3D: false,
    };

    return (
      <div className="all-days">
        <div>
          {this.state.days.map((day, i) => (
            <div className="each-day parentDiv">
              <h1>
                {day.month} {day.day}
              </h1>
              <h2>Mood of the Day: {day.mood}</h2>
              {/* EDIT DAY BUTTON HERE */}
              <Link to={`/edit/${day._id}`}>Edit Days Routine</Link>
              {/* <br />
              <Link to={`/delete/${day._id}`}>Delete</Link> */}
              <div className="App">
                <Chart
                  className="each-day"
                  chartType="PieChart"
                  width="100%"
                  height="400px"
                  data={chartData[i]}
                  options={options}
                  mood={chartData[day.mood]}
                />

                <div
                  style={{
                    backgroundColor: "red",
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  {/* if mood is negative and sleep is less than 7 */}
                  {(day.sleep < 7 &&
                    ["Sad", "Stressed", "Angry", "Tired"].includes(
                      day.mood
                    ) && (
                      <Link
                        to="/Resources"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>
                          It seems your lack of sleep is affecting your mood,
                          sleep is an important part of a healthy balanced
                          lifestyle.
                        </p>
                      </Link>
                    )) ||
                    (day.work > 8 &&
                      day.chores > 4 &&
                      ["Sad", "Stressed", "Angry", "Tired"].includes(
                        day.mood
                      ) && (
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p>
                            You seem to have spent a lot of time on work and
                            chores and this is impacting your mood
                          </p>
                        </Link>
                      )) ||
                    (day.work > 8 &&
                      ["Sad", "Stressed", "Angry", "Tired"].includes(
                        day.mood
                      ) && (
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p>
                            It appears that over working may be affecting your
                            mood
                          </p>
                        </Link>
                      )) ||
                    (day.selfCare === 0 &&
                      ["Sad", "Stressed", "Angry", "Tired"].includes(
                        day.mood
                      ) && (
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p>
                            It seems you're not spending any time on self care
                            and this is having a negative impact on your mood
                          </p>
                        </Link>
                      )) ||
                    (day.chores > 4 &&
                      ["Sad", "Stressed", "Angry", "Tired"].includes(
                        day.mood
                      ) && (
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p>
                            It appears that too many chores may be affecting
                            your mood
                          </p>
                        </Link>
                      )) ||
                    (day.sleep > 8 &&
                      ["Calm", "Excited", "Happy"].includes(day.mood) && (
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p>
                            You seem to have a good balance to your lifestyle
                          </p>
                        </Link>
                      )) || <div></div>}
                  <div />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProtectedDay;
