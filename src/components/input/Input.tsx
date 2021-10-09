import React from "react";
import "./input.css";

export interface InputProps {
  /**
   * what type of input
   * password or text or eail etc
   */
  type: string;
  /**
   * Placeholder for input
   */

  placeholder: string;
  /**
   * How large should the input be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Input contents
   */
  label: string;

  id: string;
  name: string;
}
const Input = ({ label, type, placeholder, id, name, size }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        data-minlength="8"
        required
        placeholder={placeholder}
        className={`input--${size}`}
      />
    </div>
  );
};

export default Input;
