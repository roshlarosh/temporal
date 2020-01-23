import * as React from "react";

export interface TimeComponentProps {
  time: string;
  update: (time: string) => void;
}

const InputTime = (props: TimeComponentProps) => {
  const [time, setTime] = React.useState(props.time);

  const onUpdate = (event: any) => {
    const currentTime = event.target.value;
    setTime(currentTime);
    props.update(currentTime);
  };

  return (
    <form>
      <label>
        Time:
        <input type="time" value={time} onChange={onUpdate} />
      </label>
    </form>
  );
};

export default InputTime;
