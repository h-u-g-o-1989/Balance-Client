import React from 'react'

class DayUpload extends React.Component {

  state = {
      work: 0,
      chores: 0, 
      sleep:0, 
      leisure: 0,
      selfCare: 0, 
      mood: "", 
      day:0, 
      week: 0, 
  }
      
  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState = {
      work: this.state.work,
      chores: this.state.chores,
      sleep: this.state.sleep,
      leisure: this.state.leisure,
      selfCare: this.state.selfCare, 
      mood: this.state.mood, 
      day: this.state.day,
      week: this.state.week,
    }
    console.log("updated state",this.state)
}
        render() {
console.log("initial state",this.state)
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
              </label>
              <br />
              
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }


export default DayUpload
