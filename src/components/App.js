import React from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ScatterPlot from "./ScatterPlot";
import HelloWorld from "./HelloWorld";
import NoMatch from "./NoMatch";

export default function App() {

  const url = "/data-visualization-with-d3"

  return (
    <Router>
        <div>
            <Routes>
                <Route exact path={`${url}/`} element={<Home />} />
                <Route exact path={`${url}/hello-world`} element={<HelloWorld />} />
                <Route exact path={`${url}/bar-chart`} element={<BarChart />} />
                <Route exact path={`${url}/line-chart`} element={<LineChart />} />
                <Route exact path={`${url}/pie-chart`} element={<PieChart />} />
                <Route exact path={`${url}/scatter-plot`} element={<ScatterPlot />} />
                <Route path="*" element={<NoMatch />}/>
            </Routes>
        </div>
    </Router>
  )
}