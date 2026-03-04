import React, { type PropsWithChildren } from "react";

interface MyButtonProps
  extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg cursor-pointer">
      {props.children}
    </button>
  );
};

export default MyButton;
