import React, { type PropsWithChildren } from "react";

interface MyButtonProps extends PropsWithChildren {
  onClick: () => void;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <button className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg cursor-pointer">
      {props.children}
    </button>
  );
};

export default MyButton;
