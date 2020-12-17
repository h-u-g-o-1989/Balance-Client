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
            <div className="parentDiv" key={day._id}>
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
                  {/* CONDITIONALS */}
                  {(day.work > 8 &&
                    day.sleep < 7 &&
                    ["Sad", "Stressed", "Angry", "Tired"].includes(
                      day.mood
                    ) && (
                      <Link
                        to="/Resources"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>
                          It appears your mood is being influenced by a lack of
                          sleep and a tendency to overwork. Would you like to
                          check out our resources on effectively managing your
                          time?
                        </p>
                      </Link>
                    )) ||
                    (day.sleep < 7 &&
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
                            chores and this may be impacting your mood.
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
                            It appears that over-working may be affecting your
                            mood.
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
                            It seems you're not spending any time on self-care
                            and this may be having a negative impact on your
                            mood. Please consider checking out our resources on
                            self-care.
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
                            your mood. Please check our resources to find out
                            effective ways to manage your chores.
                          </p>
                        </Link>
                      )) ||
                    (day.sleep + day.leisure + day.selfCare >
                      day.work + day.chores &&
                      ["Calm", "Excited", "Happy"].includes(day.mood) && (
                        // <Link
                        //   to="/Resources"
                        //   style={{ textDecoration: "none", color: "black" }}
                        // >
                        <p>
                          Congrats! You seem to have a good balance to your
                          lifestyle.
                        </p>
                        // </Link>
                      )) ||
                    (day.leisure <= 1 &&
                      day.selfCare <= 1 &&
                      ["Sad", "Stressed", "Angry", "Tired"].includes(
                        day.mood
                      ) && (
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p>
                            A lack of self-care and leisure time may be
                            affecting the way you feel. Please feel free to
                            check our resources to help balance your life.
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
