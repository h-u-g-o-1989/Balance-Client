import React from 'react'
import { upload } from "../../services/auth";


class DayUpload extends React.Component {

  state = {
      work: 0,
      chores: 0, 
      sleep:0, 
      leisure: 0,
      selfCare: 0, 
      mood: "", 
      day: 1, 
      month: "January",
      total: 0, 
  }
  

  handleChange = (event) => {
    // console.log(this.state.total)
    console.log(event.target.name, ": ", event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  /*component did update always needs a conditional to stop it becoming and infinte loop, it would call compnent did update which would render which would call component did update etc etc*/
  componentDidUpdate = () => {
    const newTotal = Number(this.state.chores) + Number(this.state.work) + Number(this.state.sleep) + Number(this.state.leisure) + Number(this.state.selfCare)
    if(this.state.total !== newTotal) {
      this.setState ({
        total: newTotal
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form to backend", this.state)
    const credentials = this.state

    upload(credentials).then((res) => {
      console.log(res)
    
      this.props.history.push("/daily-report");
    })
}
        render() {
// console.log("initial state",this.state)
          return (


            <form onSubmit={this.handleSubmit}>
              <label>
                <label htmlFor="work">Work</label>
                <select name="work" value={this.state.work} onChange={this.handleChange}>
                <option  value="0">0</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                  <option  value="6">6</option>
                  <option  value="7">7</option>
                  <option  value="8">8</option>
                  <option  value="9">9</option>
                  <option  value="10">10</option>
                  <option  value="11">11</option>
                  <option  value="12">12</option>
                  <option  value="13">13</option>
                  <option  value="14">14</option>
                  <option  value="15">15</option>
                  <option  value="16">16</option>
                  <option  value="17">17</option>
                  <option  value="18">18</option>
                  <option  value="19">19</option>
                  <option  value="20">20</option>
                  <option  value="21">21</option>
                  <option  value="22">22</option>
                  <option  value="23">23</option>
                  <option  value="24">24</option>
                </select>
                <br />
                <label htmlFor="sleep">Sleep</label>
                <select name="sleep" value={this.state.sleep} onChange={this.handleChange}>
                <option  value="0">0</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                  <option  value="6">6</option>
                  <option  value="7">7</option>
                  <option  value="8">8</option>
                  <option  value="9">9</option>
                  <option  value="10">10</option>
                  <option  value="11">11</option>
                  <option  value="12">12</option>
                  <option  value="13">13</option>
                  <option  value="14">14</option>
                  <option  value="15">15</option>
                  <option  value="16">16</option>
                  <option  value="17">17</option>
                  <option  value="18">18</option>
                  <option  value="19">19</option>
                  <option  value="20">20</option>
                  <option  value="21">21</option>
                  <option  value="22">22</option>
                  <option  value="23">23</option>
                  <option  value="24">24</option>
                </select>
                <br />
                <label htmlFor="chores">Chores</label>
                <select name="chores" value={this.state.chores} onChange={this.handleChange}>
                <option  value="0">0</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                  <option  value="6">6</option>
                  <option  value="7">7</option>
                  <option  value="8">8</option>
                  <option  value="9">9</option>
                  <option  value="10">10</option>
                  <option  value="11">11</option>
                  <option  value="12">12</option>
                  <option  value="13">13</option>
                  <option  value="14">14</option>
                  <option  value="15">15</option>
                  <option  value="16">16</option>
                  <option  value="17">17</option>
                  <option  value="18">18</option>
                  <option  value="19">19</option>
                  <option  value="20">20</option>
                  <option  value="21">21</option>
                  <option  value="22">22</option>
                  <option  value="23">23</option>
                  <option  value="24">24</option>
                </select>
                <br />
                <label htmlFor="leisure">Leisure</label>
                <select name="leisure" value={this.state.leisure} onChange={this.handleChange}>
                <option  value="0">0</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                  <option  value="6">6</option>
                  <option  value="7">7</option>
                  <option  value="8">8</option>
                  <option  value="9">9</option>
                  <option  value="10">10</option>
                  <option  value="11">11</option>
                  <option  value="12">12</option>
                  <option  value="13">13</option>
                  <option  value="14">14</option>
                  <option  value="15">15</option>
                  <option  value="16">16</option>
                  <option  value="17">17</option>
                  <option  value="18">18</option>
                  <option  value="19">19</option>
                  <option  value="20">20</option>
                  <option  value="21">21</option>
                  <option  value="22">22</option>
                  <option  value="23">23</option>
                  <option  value="24">24</option>
                </select>
                <br />
                <label htmlFor="selfCare">Self-Care</label>
                <select name="selfCare" value={this.state.selfCare} onChange={this.handleChange}>
                  <option  value="0">0</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                  <option  value="6">6</option>
                  <option  value="7">7</option>
                  <option  value="8">8</option>
                  <option  value="9">9</option>
                  <option  value="10">10</option>
                  <option  value="11">11</option>
                  <option  value="12">12</option>
                  <option  value="13">13</option>
                  <option  value="14">14</option>
                  <option  value="15">15</option>
                  <option  value="16">16</option>
                  <option  value="17">17</option>
                  <option  value="18">18</option>
                  <option  value="19">19</option>
                  <option  value="20">20</option>
                  <option  value="21">21</option>
                  <option  value="22">22</option>
                  <option  value="23">23</option>
                  <option  value="24">24</option>
                </select>
                <br />
                <label htmlFor="mood">Mood of the Day</label>
                <select name="mood" value={this.state.mood} onChange={this.handleChange}>
                    <option>Select One</option>
                  <option  value="Angry">Angry</option>
                  <option  value="Calm">Calm</option>
                  <option  value="Excited">Excited</option>
                  <option  value="Happy">Happy</option>
                  <option  value="Sad">Sad</option>
                  <option  value="Stressed">Stressed</option>
                  <option  value="Tired">Tired</option>
                </select>
                <br />
                <label htmlFor="day">Day</label>
                <select name="day" value={this.state.day} onChange={this.handleChange}>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                  <option  value="6">6</option>
                  <option  value="7">7</option>
                  <option  value="8">8</option>
                  <option  value="9">9</option>
                  <option  value="10">10</option>
                  <option  value="11">11</option>
                  <option  value="12">12</option>
                  <option  value="13">13</option>
                  <option  value="14">14</option>
                  <option  value="15">15</option>
                  <option  value="16">16</option>
                  <option  value="17">17</option>
                  <option  value="18">18</option>
                  <option  value="19">19</option>
                  <option  value="20">20</option>
                  <option  value="21">21</option>
                  <option  value="22">22</option>
                  <option  value="23">23</option>
                  <option  value="24">24</option>
                  <option  value="25">25</option>
                  <option  value="26">26</option>
                  <option  value="27">27</option>
                  <option  value="28">28</option>
                  <option  value="29">29</option>
                  <option  value="30">30</option>
                  <option  value="31">31</option>
                </select>
                <br />
                <label htmlFor="month">Month</label>
                <select name="month" value={this.state.month} onChange={this.handleChange}>
                  <option  value="January">January</option>
                  <option  value="February">February</option>
                  <option  value="March">March</option>
                  <option  value="April">April</option>
                  <option  value="May">May</option>
                  <option  value="June">June</option>
                  <option  value="July">July</option>
                  <option  value="August">August</option>
                  <option  value="September">September</option>
                  <option  value="October">October</option>
                  <option  value="November">November</option>
                  <option  value="December">December</option>
                </select>
              </label>
              <br />
              


{(this.state.total > 24 && (
  <h1>Too many hours</h1>
 )) ||  <input type="submit" value="Submit" />}
            </form>
            
          );
        }
      }


export default DayUpload
