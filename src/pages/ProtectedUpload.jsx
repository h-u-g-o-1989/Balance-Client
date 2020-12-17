import React from "react";
import DayUpload from "../components/DayUpload/DayUpload";
import "./ProtectedUpload.css";

class ProtectedUpload extends React.Component {
  render() {
    return (
      <div className="uploadForm">
        <h2>Upload your daily data</h2>
        <DayUpload history={this.props.history} />

        <div className="dropdown">
          <h3 className="dropbtn">Suggestions for filling the daily forms</h3>
          <ul className="dropdown-content">
            <li>Input the total in whole hours, rounding up if necessary.</li>
            <li>
              Work may include any activity you consider as such, whether it is
              formally paid or not, including education.
            </li>
            <li>
              Chores may include any work done in or outside the house that is
              not included in the "work" category.
            </li>
            <li>
              Self-care relates to any activity that improves your physical or
              mental health, whether it's a jog, a bath, or attending
              counseling.
            </li>
            <li>
              Leisure refers to any activity that brings you joy, such as seeing
              friends, going to a concert, or catching up on your latest TV
              shows and movies.
            </li>
            <li>
              The mood category is meant to help us calculate your work-life
              balance and offer you insights on how to improve your quality of
              life. Please select the most relevant emotion that represents how
              you feel at the end of the day.
            </li>
            <li>
              Last, do not forget to fill in the date for each day you input.
              This way, it will be easier to go back to it after a while.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProtectedUpload;
