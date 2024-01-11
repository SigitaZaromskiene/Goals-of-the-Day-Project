import { type ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type FormInputProps = {
  labelText: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, FormInputProps>(function FormInput(
  { labelText, id, ...props },
  ref
) {
  return (
    <div className="form_container">
      <label className="form_label" htmlFor={id}>
        {labelText}
      </label>
      <input className="form_input" id={id} {...props} ref={ref} />
    </div>
  );
});

export default Input;
