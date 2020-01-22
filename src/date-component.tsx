import * as React from "react";

export interface DateComponentProps {
  date: string;
}

const InputDate = (props: DateComponentProps) => {
  const [date, setDate] = React.useState(props.date);

  const onUpdate = (event: any) => setDate(event.target.value);
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
