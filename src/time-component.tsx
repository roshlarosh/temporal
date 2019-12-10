import * as React from "react";

export interface InputTimeProp {
  value: string;
}

export class InputTime extends React.Component<InputTimeProp> {
  constructor() {
    super();

    this.state = {
      time: "12:34"
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    this.setState({ time: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Time:
          <input
            type="time"
            value={this.state.value}
            onChange={this.onUpdate}
          />
        </label>
      </form>
    );
  }
}
