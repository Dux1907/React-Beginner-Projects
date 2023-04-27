import { useMemo, useState } from "react";
export default function App() {
  const [total, setTotal] = useState(56);
  const name = useMemo(() => calculate(total), [total]);
  const [val, setVal] = useState(true);
  return (
    <>
      <h1>Hi, this is kartik.</h1>
      <h2> Sum of first hundred numbers is {name}</h2>
      <button onClick={() => setVal(!val)}>Toggle</button>
      {val && <h1>toggle</h1>}
    </>
  );
}
const calculate = (total) => {
  let count = 0;
  for (let i = 1; i <= total; i++) count += i;
  console.log("calculated");
  return count;
};
