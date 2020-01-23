import * as React from "react";

export interface DateComponentProps {
  date: string;
  update: (date: string) => void;
}

const InputDate = (props: DateComponentProps) => {
  const [date, setDate] = React.useState(props.date);

  const onUpdate = (event: any) => {
    const currentDate = event.target.value;
    setDate(currentDate);
    props.update(currentDate);
  };
  return (
    <form>
      <label>
        Date:
        <input type="date" value={date} onChange={onUpdate} />
      </label>
    </form>
  );
};

export default InputDate;
