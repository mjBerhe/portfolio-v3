"use client";

import { useRef } from "react";
import { useHover } from "usehooks-ts";
import classNames from "classnames";

export const LinkItem: React.FC<{
  icon: JSX.Element;
  label: string;
  linkHref: string;
}> = ({ icon, label, linkHref }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div className="flex cursor-pointer text-slate-400 hover:text-accent">
      <a
        className="flex items-center"
        ref={hoverRef}
        href={linkHref}
        target="_blank"
      >
        {icon}
        <div
          className={classNames(
            "absolute left-[30px] overflow-hidden whitespace-nowrap transition-all",
            isHover ? " w-[80px]" : "w-0",
          )}
        >
          {label}
        </div>
      </a>
    </div>
  );
};
