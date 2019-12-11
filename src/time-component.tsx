import * as React from "react";

export interface InputTimeProp {
  time: string;
}

export class InputTime extends React.Component<InputTimeProp> {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      time: "12:34"
    };
  }

  onUpdate = event => {
    event.preventDefault();
    this.setState({ justClicked: time });
  };

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
