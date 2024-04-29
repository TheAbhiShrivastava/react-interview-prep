import React, { forwardRef, useImperativeHandle, useRef } from "react";

// eslint-disable-next-line react/display-name
const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return { showName: handleBtnClick };
  });

  const handleBtnClick = () => {
    alert("my name is balindam");
  };

  return (
    <div className="flex flex-col items-center gap-y-6">
      <p className="text-6xl">Child component</p>
      <button
        type="button"
        onClick={handleBtnClick}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Show my name
      </button>
    </div>
  );
});

const ParentComponent = () => {
  const childRef = useRef();

  return (
    <div className="bg-sky-300 flex flex-col h-2/4 w-2/4 justify-center items-center gap-y-8 m-auto">
      <p className="text-8xl">Parent component</p>
      <ChildComponent ref={childRef} />
      <button
        type="button"
        onClick={() => childRef.current.showName()}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Show child name
      </button>
    </div>
  );
};
export default ParentComponent;
