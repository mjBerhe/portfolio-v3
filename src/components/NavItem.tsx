"use client";

import { useRef } from "react";
import { useHover } from "usehooks-ts";
import classNames from "classnames";

export const NavItem: React.FC<{
  icon: JSX.Element;
  label: string;
  handleClick?: () => void;
}> = ({ handleClick, icon, label }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div
      className="flex cursor-pointer text-slate-400 hover:text-accent"
      onClick={handleClick}
    >
      <div className="flex items-center" ref={hoverRef}>
        <div
          className={classNames(
            "absolute right-[30px] overflow-hidden whitespace-nowrap transition-all",
            isHover ? " w-[50px]" : "w-0",
          )}
        >
          {label}
        </div>
        {icon}
      </div>
    </div>
  );
};
