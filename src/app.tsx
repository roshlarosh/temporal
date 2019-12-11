import * as React from "react";
import { TemporalIntro } from "./temporal-intro";
import { InlineClickButton } from "./inline-button";
import { InputTime } from "time-component";

export class App extends React.Component {
  render() {
    return [
      <TemporalIntro stage={4}></TemporalIntro>,
      <InlineClickButton name="START"></InlineClickButton>,
      <InputTime></InputTime>
    ];
  }
}
