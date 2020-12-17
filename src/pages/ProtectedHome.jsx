import React, { Component } from "react";
import { getDays } from "../services/auth";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import "./ProtectedMonthly.css";

class ProtectedHome extends Component {
  state = {
    days: [],

    loading: true,
  };
  componentDidMount = () => {
    getDays().then((res) => {
      // console.log("COMPONENT-DID-MOUNT", res)
      this.setState({ days: res.data, loading: false });
    });
  };

  render() {
    // console.log(this.state);
    const eachDayWork = this.state.days.map((day) => day.work);
    const eachDaySleep = this.state.days.map((day) => day.sleep);
    const eachDayChores = this.state.days.map((day) => day.chores);
    const eachDayLeisure = this.state.days.map((day) => day.leisure);
    const eachDaySelfCare = this.state.days.map((day) => day.selfCare);
    const eachDay = this.state.days.map((day) => day.day);
    //  , day.chores, day.sleep,  day.leisure,  day.selfCare

    const totalWork = [...eachDayWork].reduce((a, b) => a + b, 0);
    const totalSleep = [...eachDaySleep].reduce((a, b) => a + b, 0);
    const totalChores = [...eachDayChores].reduce((a, b) => a + b, 0);
    const totalLeisure = [...eachDayLeisure].reduce((a, b) => a + b, 0);
    const totalSelfCare = [...eachDaySelfCare].reduce((a, b) => a + b, 0);
    const numberOfDays = eachDay.length;
    // console.log("No Of DAYS", numberOfDays);
    const totalHours = numberOfDays * 24;
    // console.log(totalHours)

    let tooMuchWork = Math.round((totalWork / totalHours) * 100);
    let tooLittleSleep = Math.round((totalSleep / totalHours) * 100);
    let tooManyChores = Math.round((totalChores / totalHours) * 100);
    let tooLittleLeisure = Math.round((totalLeisure / totalHours) * 100);
    let tooLittleSelfCare = Math.round((totalSelfCare / totalHours) * 100);

    // console.log(tooMuchWork);

    const eachMood = this.state.days.map((day) => day.mood);
    // console.log("MOOD", eachMood);

    const arr = [...eachMood];
    function findMostFrequent(arr) {
      let mf = 1;
      let m = 0;
      let item;

      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            m++;
            if (m > mf) {
              mf = m;
              item = arr[i];
            }
          }
        }
        m = 0;
      }
      return item;
    }
    const emotionalState = findMostFrequent(arr);

    // console.log(findMostFrequent(arr));
    const data = [
      ["Task", "Hours per Day"],
      ["Work", totalWork],
      ["Sleep", totalSleep],
      ["Chores", totalChores],
      ["Leisure", totalLeisure],
      ["Self Care", totalSelfCare],
    ];
    const options = {
      title: "My Daily Activities",
      pieHole: 0.8,
      is3D: true,
    };

    return (
      <>
        <div className="eachMonthCardHome">
          <div className="heading">
            <h2>
              Over the last {numberOfDays} days (a total of {totalHours} hours),
              this is how you have balanced your life,
            </h2>
          </div>

          <section className="wrapper">
            <div className="monthlyChart">
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </div>

            <div className="infoAndMessage">
              <p>
                {" "}
                • Total time spent <b>working</b>: {totalWork} hours
              </p>
              <p>
                {" "}
                • Total time spent <b>sleeping</b>: {totalSleep} hours
              </p>
              <p>
                {" "}
                • Total time spent doing <b>chores</b>: {totalChores} hours
              </p>
              <p>
                {" "}
                • Total time spent on <b>leisure</b>: {totalLeisure} hours
              </p>
              <p>
                {" "}
                • Total time spent on <b>self care</b>: {totalSelfCare} hours
              </p>
              <p>
                {" "}
                • The most common <b>emotional state</b> of mind at the end of
                the day was:
                <b> {emotionalState} </b>
              </p>

              <div className="conditionalStatements">
                <Link
                  to="/Resources"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>balance tips</h3>
                </Link>
                {/* CONDITIONALS */}
                {(tooMuchWork > 33 &&
                  ["Sad", "Stressed", "Angry", "Tired"].includes(
                    emotionalState
                  ) && (
                    <div>
                      <p>Overworking may be affecting your mood.</p>
                      <Link
                        to="/Resources"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p style={{ color: "#3bba9c" }}>
                          Here are some suggestions at how to improve your
                          balance.
                        </p>
                      </Link>
                    </div>
                  )) ||
                  (tooLittleSleep < 30 &&
                    ["Sad", "Stressed", "Angry", "Tired"].includes(
                      emotionalState
                    ) && (
                      <div>
                        <p>You seem to be lacking some hours of sleep.</p>
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p style={{ color: "#3bba9c" }}>
                            Here are some suggestions at how to improve your
                            balance.
                          </p>
                        </Link>
                      </div>
                    )) ||
                  (tooManyChores > 15 &&
                    ["Sad", "Stressed", "Angry", "Tired"].includes(
                      emotionalState
                    ) && (
                      <div>
                        <p>Too many chores seem to be affecting your mood.</p>
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p style={{ color: "#3bba9c" }}>
                            Here are some suggestions at how to improve your
                            balance.
                          </p>
                        </Link>
                      </div>
                    )) ||
                  (tooLittleLeisure < 15 &&
                    ["Sad", "Stressed", "Angry", "Tired"].includes(
                      emotionalState
                    ) && (
                      <div>
                        <p>
                          Not enough leisure seem to be affecting your mood.
                        </p>
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p style={{ color: "#3bba9c" }}>
                            Here are some suggestions at how to improve your
                            balance.
                          </p>
                        </Link>
                      </div>
                    )) ||
                  (tooLittleSelfCare < 15 &&
                    ["Sad", "Stressed", "Angry", "Tired"].includes(
                      emotionalState
                    ) && (
                      <div>
                        <p>
                          Not enough self-care seem to be affecting your mood.
                        </p>
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p style={{ color: "#3bba9c" }}>
                            Here are some suggestions at how to improve your
                            balance.
                          </p>
                        </Link>
                      </div>
                    )) ||
                  (totalSleep + totalLeisure + totalSelfCare >
                    totalWork + totalChores &&
                    ["Calm", "Excited", "Happy"].includes(emotionalState) && (
                      <div>
                        <p>
                          You seem to have a pretty good work-life balance,
                          congrats!
                        </p>
                      </div>
                    )) ||
                  (totalSleep + totalLeisure + totalSelfCare <
                    totalWork + totalChores &&
                    ["Calm", "Excited", "Happy"].includes(emotionalState) && (
                      <div>
                        <p>
                          It seems work and chores may be taking over your
                          work-life balance.
                        </p>
                        <Link
                          to="/Resources"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <p style={{ color: "#3bba9c" }}>
                            Feel free to check our resources to find out ways in
                            which you could improve this.
                          </p>
                        </Link>
                      </div>
                    )) ||
                  (totalSleep + totalLeisure + totalSelfCare ===
                    totalWork + totalChores && (
                    <div>
                      <p>
                        You seem to have a pretty good work-life balance,
                        congrats!
                      </p>
                    </div>
                  )) || <div />}
              </div>
            </div>
          </section>
        </div>
        <div className="quote">
          <h2>
            "The bad news is time flies. The good news is you're the pilot."
          </h2>
          <p>Michael Altshuler, Motivational Speaker</p>
        </div>
      </>
    );
  }
}

export default ProtectedHome;
