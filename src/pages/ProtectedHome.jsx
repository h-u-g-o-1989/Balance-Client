import React, { Component } from 'react'
import { getDays } from '../services/auth'
import Chart from "react-google-charts";
import { Link } from 'react-router-dom';

class ProtectedHome extends Component {
  state = {
    days: [],
   
    loading: true, 
  }
  componentDidMount = () => {
    getDays().then(res =>{ 
      // console.log("COMPONENT-DID-MOUNT", res)
      this.setState ({days: res.data, loading: false})
    })
    }

  render () {
     console.log(this.state)
   const eachDayWork = this.state.days.map((day) => ( 
     day.work))
   const eachDaySleep = this.state.days.map((day) => ( 
       day.sleep))
   const eachDayChores = this.state.days.map((day) => ( 
        day.chores))
   const eachDayLeisure = this.state.days.map((day) => ( 
          day.leisure))
   const eachDaySelfCare = this.state.days.map((day) => ( 
            day.selfCare))
    //  , day.chores, day.sleep,  day.leisure,  day.selfCare
 
  const totalWork = [...eachDayWork].reduce((a, b) => a + b, 0)
  const totalSleep = [...eachDaySleep].reduce((a, b) => a + b, 0)
  const totalChores = [...eachDayChores].reduce((a, b) => a + b, 0)
  const totalLeisure = [...eachDayLeisure].reduce((a, b) => a + b, 0)
  const totalSelfCare = [...eachDaySelfCare].reduce((a, b) => a + b, 0)
  const numberOfDays = eachDayWork.length
  console.log("No Of DAYS",numberOfDays)
  const totalHours = numberOfDays * 24
// console.log(totalHours)

let tooMuchWork = Math.round(totalWork / totalHours * 100)

console.log(tooMuchWork)


  const eachMood = this.state.days.map((day) => ( 
    day.mood))
    console.log("MOOD", eachMood)

     
   const arr =[...eachMood]
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
    const emotionalState = findMostFrequent(arr)


    // console.log(findMostFrequent(arr));
    const data = [
      ["Task", "Hours per Day"],
      ["Work", totalWork],
      ["Sleep", totalSleep],
      ["Chores", totalChores],
      ["Leisure", totalLeisure],
      ["Self Care", totalSelfCare] 
    ];
    const options = {
      title: "My Daily Activities",
      pieHole: 0.4,
      is3D: false
    };



    return (
      <div>
        <h1>Over the last {numberOfDays} days (a total of {totalHours} hours ), this is how you have balanced your life,</h1>
        <h2>Total time spent working: {totalWork} hours</h2>
        <h2>Total time spent sleeping: {totalSleep} hours</h2>
        <h2>Total time spent doing Chores: {totalChores} hours</h2>
        <h2>Total time spent on leisure: {totalLeisure} hours</h2>
        <h2>Total time spent on self care: {totalSelfCare} hours</h2>
        <h2>The most common emotional state of mind at the end 
          of the day was:<b>  {emotionalState} </b>
        </h2>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <div style={{backgroundColor: "red", width: "50%", display: "flex", justifyContent: "center", margin: "0 auto"}}>

{/* can conditionally render based on the overall percentage of hours and most common emotional state */}
{((tooMuchWork > 30 && ["Sad", "Stressed", "Angry", "Tired"].includes(emotionalState)) && (
  <div>
<p>ALL WORK AND NO PLAY .</p>
<Link to="/Resources" style={{textDecoration: "none", color: "black"}}><p style={{backgroundColor: "green"}}>Here are some suggestions at how to improve your balance</p></Link>
</div>
))||  <div></div>}
<div />
      </div>
      </div>
    )
  }
}

export default ProtectedHome
