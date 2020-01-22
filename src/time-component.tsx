import * as React from "react";

export interface TimeComponentProps {
  time: string;
}

const InputTime = (props: TimeComponentProps) => {
  const [time, setTime] = React.useState(props.time);
  console.log(props.time);

  const onUpdate = (event: any) => setTime(event.target.value);

  return (
    <form>
      <label>
        Time:
        <input type="time" value={time} onChange={onUpdate} />
      </label>
    </form>
  );
};

//   event.preventDefault();

export default InputTime;
