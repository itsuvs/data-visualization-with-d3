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

  var width = 272;
  var height = 272;

  var svg = d3.select('#line-chart')
              .append('svg')
              .attr('style','outline: 1px solid black')
              .attr('style',"width: 100%")
              .attr('style', width)
              .attr('style', height)
              .attr('style', 'outline: 1px solid black')
              .attr('style', 'background: #e5e5e5');
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