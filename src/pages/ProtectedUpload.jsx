import React from "react";
import DayUpload from "../components/DayUpload/DayUpload"

class ProtectedUpload extends React.Component {

render () {

  
  return (
    <div>
      <h1>This is where you upload your weekly data</h1>
    <DayUpload />
    </div>
  );
}
};

export default ProtectedUpload;