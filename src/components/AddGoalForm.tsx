import FormInput from "../components/FormInput";
import Button from "./Button";
import { useRef, FormEvent, useState } from "react";
import { Goal } from "../App";

type AddFormGoalProps = {
  setGoal: (name: string, description: string) => void;
  goal: Goal[];
};

export default function AddFormGoal({ setGoal, goal }: AddFormGoalProps) {
  const [disabled, setDisabled] = useState(true);
  const goalInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  const setGoalHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const goalValue = goalInput.current?.value || "";
    const desValue = descriptionInput.current?.value || "";

    if (goal.length === 4) {
      e.currentTarget.reset();
      return;
    }

    setGoal(goalValue, desValue);

    setDisabled(true);
    e.currentTarget.reset();
  };

  const handleInputChange = () => {
    const goalValue = goalInput.current?.value || "";
    const desValue = descriptionInput.current?.value || "";
    setDisabled(!goalValue.trim() || !desValue.trim());
  };

  return (
    <form className="form" onSubmit={setGoalHandler}>
      <FormInput
        labelText="Your goal"
        id="goal"
        ref={goalInput}
        onChange={handleInputChange}
      />
      <FormInput
        labelText="Description"
        id="description"
        ref={descriptionInput}
        onChange={handleInputChange}
      />
      <Button
        el="button"
        text="Add Goal"
        className="long"
        disabled={disabled}
      />
    </form>
  );
}
