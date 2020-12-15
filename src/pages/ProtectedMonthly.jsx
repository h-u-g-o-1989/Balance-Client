import React, { Component } from "react";
import { getDays } from "../services/auth";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import MonthComponent from "../components/monthComponent/MonthComponent";

class ProtectedMonthly extends Component {
  state = {
    days: [],
    loading: true,
    monthsFilled: [],
    uniqueMonths: {},
  };

  componentDidMount = () => {
    let days;

    getDays().then((res) => {
      console.log(res.data);
      const monthsFilled = [...new Set(res.data.map((el) => el.month))];
      const uniqueMonths = res.data.reduce((acc, val) => {
        if (acc[val.month]) {
          return { ...acc, [val.month]: [...acc[val.month], val] };
        }
        return { ...acc, [val.month]: [val] };
      }, {});
      // acc-> {}
      // val -> "sad march day 1"

      // does acc.march exist? do something : move awy
      // returning {March: [sad march day 1]}

      // second loop
      //acc ->   {March: [sad march day 1]}
      //val -> "calm february  day 2"

      // does acc.february exist? do something: move away
      // {March: [sad march day 1], Febcraury: [calm february day 2]}

      // third loop
      // acc -> {March: [sad march day 1], Febcraury: [calm february day 2]}
      // val -> febcruary happy day 1

      //does acc.februrary exist?
      // {March: [sad march day 1], February: [calm februray day 2,febraury happy day 1 ]}
      console.log(uniqueMonths);
      days = res.data;
      this.setState({ days: days, loading: false, monthsFilled, uniqueMonths });
    });
  };

  render() {
    // AGGREGATED RESULTS
    console.log("-------- start of MAGIC SHOW -----");
    const { uniqueMonths } = this.state;
    // console.log(uniqueMonths);
    const january = uniqueMonths.January;
    // console.log("NO SEPTMEBER, BUT JANARY", january);
    function reducer(arr) {
      return arr.reduce((acc, val) => {
        console.log(acc, val);
        return {
          work: acc.work + val.work,
          sleep: acc.sleep + val.sleep,
          chores: acc.chores + val.chores,
          leisure: acc.leisure + val.leisure,
          selfCare: acc.selfCare + val.selfCare,
        };
      });
    }

    const uniqueMonthsArray = Object.entries(uniqueMonths);
    const generalized =
      uniqueMonthsArray.length &&
      uniqueMonthsArray.reduce((acc, val) => {
        const sum = val[1].reduce((prev, cur) => {
          return {
            work: prev.work + cur.work,
            sleep: prev.sleep + cur.sleep,
            chores: prev.chores + cur.chores,
            leisure: prev.leisure + cur.leisure,
            selfCare: prev.selfCare + cur.selfCare,
            month: cur.month,
          };
        });

        return { ...acc, [val[0]]: sum };
      }, {});
    console.log("GENERALI~ED", generalized);
    console.log("------- end of MAGIC SHOW ----");
    const allDays = this.state.days.map((day) => day);
    const monthlyUpdate = [...allDays];

    // Jan
    // const filteredMonth = (month) =>
    //   monthlyUpdate.filter((day) => day.month === month);
    /* 
    const filteredJanuary = monthlyUpdate.filter(
      (day) => day.month === `January`
    );

    //   // Feb
    //   const filteredFebruary = monthlyUpdate.filter(
    //     (day) => day.month === `February`
    //   );

    function filterVals(arr, key) {
      return arr.map((el) => el[key]).reduce((a, bv) => a + bv, 0);
    }

    console.log(
      "new Total Work in One func",
      filterVals(filteredJanuary, "work")
    );

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
    }; */

    return (
      <>
        {uniqueMonthsArray.map((el) => (
          <MonthComponent month={el[0]} />
        ))}
      </>
    );
  }
}

export default ProtectedMonthly;
