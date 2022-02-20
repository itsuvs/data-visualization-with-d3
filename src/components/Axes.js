import React, {useEffect} from 'react';
import Layout from './Layout';
import { Header, Segment, Image } from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';
import * as d3 from 'd3';

const Axes = () => {
  
  useEffect(() => {
    var data = [85, 25, 152, 47, 200];

    var width = 272;
    var height = 272;

    var svg = d3.select('#axes')
                .append('svg')
                .attr('style',"outline: 1px solid black")
                .attr('style',"width: 100%")
                .attr('width', width)
                .attr('height', height)
                .attr('style', 'outline: 1px solid black')
                .attr('style', 'background: #e5e5e5');

    var scale = d3.scaleLinear().domain([20, 220]).range([0, 400]);

    var xaxis = d3.axisBottom()
    .scale(scale);
    
    svg.append("g")
    .attr("transform", "translate(50,120)")
    .call(xaxis);
    
  },[])

  return (
    <Layout>
      <Header>
        Axes
      </Header>
      <p className={styles.content}>
        Any sort of chart or graph is incomplete without axes as they provide human-readable scale references. D3 has four easy methods to draw four types of axes: axisTop, axisBottom, axisRight and axisLeft. All we need is an 'SVG' element to add the axes into and
        a scaling function to scale against given data. Talking about scaling function, there are total 6 of them: scaleLinear, scaleSqrt, scaleLog, scaleTime, scaleBand and scalePoint. I have included a picture at the bottom of this
        article which I think does the best job in depicting the key differences among them.
      </p>
      <Segment className={styles.contentImage} id="axes">

      </Segment>
    </Layout>
  );
};

export default Axes;