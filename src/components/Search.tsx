import { useState } from "react";
import { useFetchBreedByNameQuery } from "../features/dogs/dogs-api-slice";
import _ from "lodash";

//component for searching for a breed
// uses createApi and debounce
export default function Search() {
  const [searchDogInput, setSearchDogInput] = useState<string>("");
  const { data = [], isFetching } = useFetchBreedByNameQuery(searchDogInput);
  const onChange = _.debounce((e) => setSearchDogInput(e.target.value), 1000);
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>
        <span style={{ color: "red" }}>Debounce, reduxJS createApi hook</span>
      </h1>
      <p>Fetch a dog by name:</p>

      <input onChange={(e) => onChange(e)} type="text" />
      <div style={{ border: "2px solid blue" }}>
        {isFetching
          ? ""
          : data.map((dog) => <p style={{ color: "green" }}>{dog.name}</p>)}
      </div>

      {isFetching ? <p>loading....</p> : console.log(data)}
    </div>
  );
}
