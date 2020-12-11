import React, { Component } from 'react'
import { getDays } from '../services/auth'



class ProtectedDay extends Component {
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
    console.log("COMPONENT-DID-MOUNT", res)
    this.setState ({days: res.data, loading: false})
  })
  }


  render () {
if (this.state.loading) {
  return <div>Loading....</div>
}


    return (
      <div>
{this.state.days.map((day) => (
  <div>{day.month} {day.day} timeChores:{day.chores} timeAsleep: {day.sleep} Time@Work:{day.work} Mood:{day.mood} selfCare:{day.selfCare} leisure:{day.leisure}</div>
))}
      </div>
    )
  }
}

export default ProtectedDay