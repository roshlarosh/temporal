import * as React from "react";

export interface TemporalIntroProps {
  stage: number;
}

export class TemporalIntro extends React.Component<TemporalIntroProps> {
  render() {
    return [
      <h1>Temporal</h1>,
      <p>A TC39 proposal currently in {this.props.stage}</p>
    ];
  }
}
