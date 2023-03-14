import React from "react";

interface InputProps {
  type: "button" | "checkbox" | "radio" | "text" | "submit" | "password";
  name?: string;
  value?: string;
  placeholder?: string;
}

export const Input = ({ type, name, value, placeholder }: InputProps) => {
  return (
    <label>
      <input
        className={`w-[100%] h-[40px] ${
          type === "submit"
            ? "bg-[#CCD5AE] text-white"
            : "bg-[#E9EDC9] text-stone-400 border-2 border-stone-400"
        } pl-[14px] rounded-md`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};
