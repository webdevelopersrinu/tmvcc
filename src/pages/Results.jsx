import React from "react";
import ResultData from "../components/ResultData";
import { useParams } from "react-router-dom";
import { RESULTS_CARD_DATA } from "../utils/constants/Results/ResultsData";
import NotFound from "./NotFound";

function Results() {
  const { id } = useParams();

  const resultData = RESULTS_CARD_DATA.find((item) => item.id === +id);
  if(!resultData){
    return <NotFound/>
  }
  return (
    <div>
      <ResultData resultData={resultData}/>
    </div>
  );
}

export default Results;
