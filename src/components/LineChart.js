import React, {useEffect} from 'react';
import Layout from './Layout';
import { Header, Segment, Image } from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';
import * as d3 from 'd3';

const LineChart = () => {

  useEffect(() => {
    var data = [
      [1,1], [12,20], [24,36],
      [32, 50], [40, 70], [50, 100],
      [55, 106], [65, 123], [73, 130],
      [78, 134], [83, 136], [89, 138],
      [100, 140]
  ];

    var width = 350;
    var height = 350;

    var svg = d3.select('#line-chart')
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .attr('style','outline: 1px solid black')
              .attr('style', 'background: #e5e5e5');

    var scaleX = d3.scaleLinear().domain([0, 200]).range([0, width - 80]);
    var scaleY = d3.scaleLinear().domain([0, 200]).range([height - 40, 0]);

    var xaxis = d3.axisBottom().scale(scaleX);
    var yaxis = d3.axisLeft().scale(scaleY);

    // svg.append("g").attr("transform", `translate(${40}, ${height - 20} )`).call(xaxis);
    // svg.append("g").attr("transform", `translate(${40}, ${20})`).call(yaxis);

    svg.append("g").attr("transform", `translate(${40}, ${height - 40 + 20} )`).call(xaxis);
    svg.append("g").attr("transform", `translate(${40}, ${20} )`).call(yaxis);

  },[])

  return (
    <Layout>
      <Header>
        Line Chart
      </Header>
      <p className={styles.content}>

      </p>
      <Segment className={styles.contentImage} id="line-chart" compact>

      </Segment>
    </Layout>
  );
};

export default LineChart;