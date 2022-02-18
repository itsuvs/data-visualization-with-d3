import React from "react";
import {Routes, HashRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ScatterPlot from "./ScatterPlot";
import HelloWorld from "./HelloWorld";
import NoMatch from "./NoMatch";
import Axes from "./Axes";

export default function App() {

  return (
    <Router>
      <div>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/hello-world" element={<HelloWorld />} />
              <Route exact path="/axes" element={<Axes />} />
              <Route exact path="/bar-chart" element={<BarChart />} />
              <Route exact path="/line-chart" element={<LineChart />} />
              <Route exact path="/pie-chart" element={<PieChart />} />
              <Route exact path="/scatter-plot" element={<ScatterPlot />} />
              <Route path="*" element={<NoMatch />}/>
          </Routes>
      </div>
    </Router>
  )
}