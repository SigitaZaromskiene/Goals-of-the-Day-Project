import { type Goal } from "../App";
import Button from "./Button";

type GoalsList = {
  goal: Goal[];
  deleteGoalHandler: (id: number) => void;
};

export default function GoalsTable({ goal, deleteGoalHandler }: GoalsList) {
  return (
    <div className="goals_container">
      {goal.map((li) => (
        <>
          <li key={li.id}>
            <div className="goals_container_goal">
              <p>{li.name}</p>
              <p>{li.description}</p>
            </div>
            <Button
              className="short"
              text="Delete"
              el="button"
              onClick={() => deleteGoalHandler(li.id)}
            />
          </li>
        </>
      ))}
    </div>
  );
}
