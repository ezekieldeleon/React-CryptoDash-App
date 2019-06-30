import highChartConfig from "./HighChartConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighChartsTheme from "./HighChartsTheme";

ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighCharts config={highChartConfig(historical)} />
          ) : (
            <div> Loading Historical Chart </div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
