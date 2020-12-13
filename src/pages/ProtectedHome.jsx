import React, { Component } from 'react'
import { getDays } from '../services/auth'
import Chart from "react-google-charts";


class ProtectedHome extends Component {
  state = {
    days: [],
    work: "",
    sleep: "",
    leisure: "",
    selfCare: "", 
    mood: "",
    day:"", 
    month:"", 
    loading: true, 
  }
  componentDidMount = () => {
    getDays().then(res =>{ 
      // console.log("COMPONENT-DID-MOUNT", res)
      this.setState ({days: res.data, loading: false})
    })
    }

  render () {
    console.log("AFTER RENDER",this.state)  
    const chartData = this.state.days.map((day) => ([ 
     day.work, day.chores, day.sleep,  day.leisure,  day.selfCare]))
 
  console.log (chartData)


    return (
      <div>
        
      </div>
    )
  }
}

export default ProtectedHome
