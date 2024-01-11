import FormInput from "../components/FormInput";

export default function AddFormGoal() {
  return (
    <form className="form">
      <FormInput labelText="Your goal" id="goal" />
      <FormInput labelText="Description" id="description" type="text" />
    </form>
  );
}
