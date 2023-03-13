import React from "react";

interface InputProps {
  type: "button" | "checkbox" | "radio" | "text" | "submit";
  name: string;
  value: string;
  title: string;
  placeholder: string;
}

export const Input = ({
  type,
  name,
  value,
  title,
  placeholder,
}: InputProps) => {
  return (
    <label>
      {title && <span className="mr-[15px]">{title}</span>}
      <input
        className="w-[100%] h-[40px] bg-[#E9EDC9] text-stone-400 pl-[14px] rounded-md"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};
