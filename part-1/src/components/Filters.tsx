import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Query } from "../api/api.ts";

type FiltersProps = {
  values: Pick<Query, "name" | "age">;
  setValues: Dispatch<SetStateAction<Pick<Query, "name" | "age">>>;
  isDisabled: boolean;
};

const Filters = ({ values, setValues, isDisabled }: FiltersProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input
        value={values.name || ""}
        onChange={handleChange}
        name="name"
        type="text"
        disabled={isDisabled}
        placeholder="Enter name"
      />
      <input
        value={values.age || ""}
        onChange={handleChange}
        name="age"
        type="nuuber"
        disabled={isDisabled}
        placeholder="Enter age"
      />
    </div>
  );
};

export default Filters;
