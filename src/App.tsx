import "../src/assets/App.scss";
import AddFormGoal from "./components/AddGoalForm";
import Container from "./components/Container";
import { useState } from "react";
import GoalsTable from "./components/GoalsTable";
import Modal from "./components/Modal";

export type Goal = {
  name: string;
  description: string;
  id: number;
};

function App() {
  const [goal, setGoal] = useState<Goal[]>([]);

  const setGoalHandler = (name: string, description: string) => {
    setGoal((prev) => [
      ...prev,
      { name: name, description: description, id: Math.random() },
    ]);
  };

  const deleteGoalHandler = (id: number) => {
    setGoal((prev) => prev.filter((li) => li.id !== id));
  };

  return (
    <>
      <Container>
        <AddFormGoal setGoal={setGoalHandler} goal={goal} />
        <Modal
          text="Start setting goals"
          className="modal_container_start"
          goals={goal}
        />
        {goal.length !== 0 && (
          <GoalsTable goal={goal} deleteGoalHandler={deleteGoalHandler} />
        )}
      </Container>
    </>
  );
}

export default App;
