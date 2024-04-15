import React from "react";

const OperationBar = ({ selectFilter }) => {
  return (
    <div className="grid grid-cols-2 lg:flex px-5 lg:px-40 justify-center gap-5">
      <button className="btn text-xl col-span-2" value={"all"} onClick={selectFilter}>
        All
      </button>
      <button
        className="btn text-xl"
        value={"completed"}
        onClick={selectFilter}
      >
        Completed
      </button>
      <button
        className="btn text-xl"
        value={"uncompleted"}
        onClick={selectFilter}
      >
        Uncompleted
      </button>
      <button className="btn text-xl" value={"latest"} onClick={selectFilter}>
        Latest
      </button>
      <button className="btn text-xl" value={"oldest"} onClick={selectFilter}>
        Oldest
      </button>
    </div>
  );
};

export default OperationBar;
