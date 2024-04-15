import React from "react";

const OperationBar = () => {
  return (
    <div className="flex px-40 justify-center gap-5">
      <button className="btn text-xl">All</button>
      <button className="btn text-xl">Completed</button>
      <button className="btn text-xl">Uncompleted</button>
      <button className="btn text-xl">Latest</button>
      <button className="btn text-xl">Oldest</button>
    </div>
  );
};

export default OperationBar;
