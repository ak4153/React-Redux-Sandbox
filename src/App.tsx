import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  decremented,
  addXtoCounter
} from "./features/counter/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
export default function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  const increment = () => {
    dispatch(incremented());
  };
  const decrement = () => {
    dispatch(decremented());
  };
  const addx = () => {
    dispatch(addXtoCounter(5));
  };
  return (
    <div>
      <div>
        <p>Dogs to fetch:</p>
        <select
          onChange={(e) => setNumDogs(Number(e.target.value))}
          value="numDogs"
        >
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>

      <div>number of dogs fetch : {data.length}</div>
      {isFetching ? (
        <p>fetching...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} height="250px" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={addx}>++</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
