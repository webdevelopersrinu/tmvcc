import React from "react";
import HistoryData from "../components/HistoryData";
import Timeline from "../components/HistoryContent";

function History() {
  return (
    <div>
      <h1 className="mt-4 pl-6 text-3xl font-bold">History</h1>
      <HistoryData />
      <Timeline />
    </div>
  );
}

export default History;
