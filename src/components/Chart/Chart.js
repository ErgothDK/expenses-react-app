import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartValues = props.chartBars.map((chartBar) => chartBar.value);
  const maxChartValue = Math.max(...chartValues);

  return (
    <div className="chart">
      {props.chartBars.map((chartBar) => (
        <ChartBar key={chartBar.label} maxValue={maxChartValue} {...chartBar} />
      ))}
    </div>
  );
};

export default Chart;
