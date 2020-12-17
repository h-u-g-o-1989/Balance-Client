import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";

function findMostFrequent(arr) {
  // console.log("¨WHY U NO ARRAY", arr);
  let obj = {};
  for (let mood of arr) {
    if (obj[mood]) {
      obj[mood] += 1;
    } else {
      obj[mood] = 1;
    }
  }
  // console.log(obj);

  const biggest = Object.entries(obj).sort((a, b) => a[0] - b[0]);
  return biggest[0][0];
}

const MonthComponent = (props) => {
  // console.log("¨props", props);
  const { month, data } = props;
  const totalHours = data.length * 24;

  const total = data.reduce((acc, val) => {
    return {
      work: acc.work + val.work,
      sleep: acc.sleep + val.sleep,
      chores: acc.chores + val.chores,
      leisure: acc.leisure + val.leisure,
      selfCare: acc.selfCare + val.selfCare,
    };
  });

  const emotionalState = findMostFrequent(data.map((e) => e.mood));

  let tooMuchWork = Math.round((total.work / totalHours) * 100);
  let tooLittleSleep = Math.round((total.sleep / totalHours) * 100);
  let tooManyChores = Math.round((total.chores / totalHours) * 100);
  let tooLittleLeisure = Math.round((total.leisure / totalHours) * 100);
  let tooLittleSelfCare = Math.round((total.selfCare / totalHours) * 100);

  const monthlyData = [
    ["Task", "Hours per Day"],
    ["Work", total.work],
    ["Sleep", total.sleep],
    ["Chores", total.chores],
    ["Leisure", total.leisure],
    ["Self Care", total.selfCare],
  ];
  const options = {
    title: "My Work-Life Balance",
    chartArea: { width: 600, height: 600 },
    pieHole: 0.3,
    is3D: false,
  };

  return (
    <div className="eachMonthCard">
      <div className="heading">
        <h2>
          During the month of <span className="months">{month}</span> (a total
          of {totalHours} hours), this is how you have balanced your life...
        </h2>
      </div>

      <section className="wrapper">
        <div className="monthlyChart">
          <Chart
            className="chart"
            chartType="PieChart"
            // width="600px"
            // height="600px"
            data={monthlyData}
            options={options}
          />
        </div>

        <div className="infoAndMessage">
          <p>
            • Total time spent <b>working</b>: {total.work} hours
          </p>
          <p>
            • Total time spent <b>sleeping</b>: {total.sleep} hours
          </p>
          <p>
            • Total time spent doing <b>chores</b>: {total.chores} hours
          </p>
          <p>
            • Total time spent on <b>leisure</b>: {total.leisure} hours
          </p>
          <p>
            • Total time spent on <b>self care</b>: {total.selfCare} hours
          </p>
          <p>
            • The most common <b>emotional state</b> of mind at the end of the
            day was:
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
                  <p>It appears that overworking may be affecting your mood.</p>
                  <Link
                    to="/Resources"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p style={{ color: "#3bba9c" }}>
                      {" "}
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
                      <p style={{ color: "#3bba9c" }}>
                        {" "}
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
                        {" "}
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
                    <p>Not enough leisure seem to be affecting your mood.</p>
                    <Link
                      to="/Resources"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <p style={{ color: "#3bba9c" }}>
                        {" "}
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
                    <p>Not enough self-care seem to be affecting your mood.</p>
                    <Link
                      to="/Resources"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <p style={{ color: "#3bba9c" }}>
                        {" "}
                        Here are some suggestions at how to improve your
                        balance.
                      </p>
                    </Link>
                  </div>
                )) ||
              (total.sleep + total.leisure + total.selfCare >
                total.work + total.chores &&
                ["Calm", "Excited", "Happy"].includes(emotionalState) && (
                  <div>
                    <p>
                      You seem to have a pretty good work-life balance,
                      congrats!
                    </p>
                  </div>
                )) ||
              (total.sleep + total.leisure + total.selfCare <
                total.work + total.chores && (
                <div>
                  <p>
                    It seems work and chores may be taking over your work-life
                    balance.
                  </p>
                  <Link
                    to="/Resources"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p style={{ color: "#3bba9c" }}>
                      Feel free to check our resources to find out ways in which
                      you could improve this.
                    </p>
                  </Link>
                </div>
              )) ||
              (total.sleep + total.leisure + total.selfCare ===
                total.work + total.chores && (
                <div>
                  <p>
                    You seem to have a pretty good work-life balance, congrats!
                  </p>
                </div>
              )) || <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthComponent;
