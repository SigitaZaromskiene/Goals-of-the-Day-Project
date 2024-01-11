import { Goal } from "../App";

type ModalMoodProps = {
  text: string;
  className: "modal_container_start" | "modal_container_warning";
  goals: Goal[];
};

export default function Modal(props: ModalMoodProps) {
  return (
    <div className="modal_container">
      {props.goals.length === 0 ? (
        <i className="modal_container_start">{props.text}</i>
      ) : null}
      {props.goals.length >= 4 && (
        <i className="modal_container_warning">
          4 goals are enough, do not push yourself
        </i>
      )}
    </div>
  );
}
