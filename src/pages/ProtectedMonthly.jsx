import React, { Component } from "react";
import { getDays } from "../services/auth";
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
      const monthsFilled = [...new Set(res.data.map((el) => el.month))];
      const uniqueMonths = res.data.reduce((acc, val) => {
        if (acc[val.month]) {
          return { ...acc, [val.month]: [...acc[val.month], val] };
        }
        return { ...acc, [val.month]: [val] };
      }, {});

      days = res.data;
      this.setState({ days: days, loading: false, monthsFilled, uniqueMonths });
    });
  };

  render() {
    // AGGREGATED RESULTS
    const { uniqueMonths } = this.state;
    // console.log(uniqueMonths);

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
    // console.log("GENERALIZED", generalized);
    const allDays = this.state.days.map((day) => day);
    const monthlyUpdate = [...allDays];

    return (
      <>
        {uniqueMonthsArray.map((el) => (
          <MonthComponent month={el[0]} data={el[1]} />
        ))}
      </>
    );
  }
}

export default ProtectedMonthly;
