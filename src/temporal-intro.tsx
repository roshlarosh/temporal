import * as React from "react";

export interface TemporalIntroProps {
  stage: number;
}

const TemporalIntro = (props: TemporalIntroProps) => {
  return (
    <div>
      <h1>Temporal</h1>
      <p>A TC39 proposal currently in {props.stage}</p>
    </div>
  );
};

export default TemporalIntro;
