import React from "react";

type PopupContainerProps = {
  children: JSX.Element;
};

export default function PopupContainer({ children }: PopupContainerProps) {
  return (
    <div className="flex h-screen bg-gray-600">
      <div className="flex flex-row grow">
        <div className="m-auto basis-2/4">{children}</div>
      </div>
    </div>
  );
}
