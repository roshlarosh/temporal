import * as React from "react";
import { TemporalIntro } from "./temporal-intro";
import { InlineClickButton } from "./inline-button";

interface App {}

export class AppMain extends React.Component<App> {
  render() {
    return [
      <TemporalIntro stage={4}></TemporalIntro>,
      <InlineClickButton name="START"></InlineClickButton>
    ];
  }
}
