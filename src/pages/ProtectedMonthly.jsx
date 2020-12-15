import React, { Component } from "react";
import { getDays } from "../services/auth";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";

class ProtectedMonthly extends Component {
  state = {
    days: [],
    months: null,
    loading: true,
  };

  componentDidMount = () => {
      let days;

    getDays().then((res) => {
      days = res.data 
    });

    let months = 

   this.setState({ days: res.data, months: ,loading: false });
  };

  render() {
    // AGGREGATED RESULTS
    const allDays = this.state.days.map((day) => day);
    const monthlyUpdate = [...allDays];

    // Jan
    const filteredMonth = (month) =>
      monthlyUpdate.filter((day) => day.month === month);

    const filteredJanuary = monthlyUpdate.filter(
      (day) => day.month === `January`
    );

    //   // Feb
    //   const filteredFebruary = monthlyUpdate.filter(
    //     (day) => day.month === `February`
    //   );

    const eachDayWork = filteredJanuary.map((day) => day.work);
    const eachDaySleep = filteredJanuary.map((day) => day.sleep);
    const eachDayChores = filteredJanuary.map((day) => day.chores);
    const eachDayLeisure = filteredJanuary.map((day) => day.leisure);
    const eachDaySelfCare = filteredJanuary.map((day) => day.selfCare);
    const eachDay = filteredJanuary.map((day) => day.day);

    console.log(eachDayWork);

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

    const eachMood = filteredJanuary.map((day) => day.mood);
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
      pieHole: 0.4,
      is3D: false,
    };

    return (
      <div>
        <h1>
          During the month of January (a total of {totalHours} hours ), this is
          how you have balanced your life,
        </h1>
        <h2>Total time spent working: {totalWork} hours</h2>
        <h2>Total time spent sleeping: {totalSleep} hours</h2>
        <h2>Total time spent doing Chores: {totalChores} hours</h2>
        <h2>Total time spent on leisure: {totalLeisure} hours</h2>
        <h2>Total time spent on self care: {totalSelfCare} hours</h2>
        <h2>
          The most common emotional state of mind at the end of the day was:
          <b> {emotionalState} </b>
        </h2>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
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
          {(tooMuchWork > 30 &&
            ["Sad", "Stressed", "Angry", "Tired"].includes(emotionalState) && (
              <div>
                <p>ALL WORK AND NO PLAY .</p>
                <Link
                  to="/Resources"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p style={{ backgroundColor: "green" }}>
                    Here are some suggestions at how to improve your balance.
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
                    <p style={{ backgroundColor: "green" }}>
                      Here are some suggestions at how to improve your balance.
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
                    <p style={{ backgroundColor: "green" }}>
                      Here are some suggestions at how to improve your balance.
                    </p>
                  </Link>
                </div>
              )) ||
            (tooLittleLeisure < 15 &&
              ["Sad", "Stressed", "Angry", "Tired"].includes(
                emotionalState
              ) && (
                <div>
                  <p>Not enough leisure seem to be affecting your mood.</p>
                  <Link
                    to="/Resources"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p style={{ backgroundColor: "green" }}>
                      Here are some suggestions at how to improve your balance.
                    </p>
                  </Link>
                </div>
              )) ||
            (tooLittleSelfCare < 15 &&
              ["Sad", "Stressed", "Angry", "Tired"].includes(
                emotionalState
              ) && (
                <div>
                  <p>Not enough self-care seem to be affecting your mood.</p>
                  <Link
                    to="/Resources"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p style={{ backgroundColor: "green" }}>
                      Here are some suggestions at how to improve your balance.
                    </p>
                  </Link>
                </div>
              )) || (
              <div>
                <p>
                  You seem to have a pretty good work-life balance, congrats!
                </p>
              </div>
            )}
          <div />
        </div>
      </div>
    );
  }
}

export default ProtectedMonthly;
