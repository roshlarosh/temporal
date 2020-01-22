import * as React from "react";
import TemporalIntro from "./temporal-intro";
import InlineClickButton from "./inline-button";
import InputTime from "time-component";

const App = () => {
  return (
    <div>
      <TemporalIntro stage={4}></TemporalIntro>
      <InlineClickButton name="START"></InlineClickButton>
      <InputTime time={"19:19"}></InputTime>
    </div>
  );
};

export default App;
