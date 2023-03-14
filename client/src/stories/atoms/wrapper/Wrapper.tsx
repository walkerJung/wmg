import React from "react";

interface WrapperProps {
  children: any;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-[420px] h-[100vh] bg-[#E9EDC9] flex flex-col gap-[7px] justify-center">
      {children}
    </div>
  );
};
