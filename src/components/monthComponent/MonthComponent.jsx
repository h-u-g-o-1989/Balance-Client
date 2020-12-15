import React from "react";
import { Link } from "react-router-dom";

const MonthComponent = (props) => {
  const { month } = props;
  return (
    <div>
      <h1>
        During the month of {month} (a total of 5 hours ), this is how you have
        balanced your life,
      </h1>

      {/*  
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
            ["Sad", "Stressed", "Angry", "Tired"].includes(emotionalState) && (
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
            ["Sad", "Stressed", "Angry", "Tired"].includes(emotionalState) && (
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
            ["Sad", "Stressed", "Angry", "Tired"].includes(emotionalState) && (
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
            ["Sad", "Stressed", "Angry", "Tired"].includes(emotionalState) && (
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
              <p>You seem to have a pretty good work-life balance, congrats!</p>
            </div>
          )}
        <div />
      </div> */}
    </div>
  );
};

export default MonthComponent;
