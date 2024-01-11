import { ComponentPropsWithoutRef } from "react";

type FormInputProps = {
  labelText: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function FormInput({ labelText, id, ...props }: FormInputProps) {
  return (
    <div className="form_container">
      <label className="form_label" htmlFor={id}>
        {labelText}
      </label>
      <input className="form_input" id={id} {...props} />
    </div>
  );
}
