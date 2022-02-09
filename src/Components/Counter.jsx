import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <Button title={"Increment"} onClick={() => setValue(value + 1)} />
      <Button title={"Decrement"} onClick={() => setValue(value - 1)} />
      <Button title={"Multiply By 2"} onClick={() => setValue(value * 2)} />
    </div>
  );
};

export default Counter;
