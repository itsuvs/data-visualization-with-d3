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

    var svg = d3.select('#bar-chart')
                .append('svg')
                .attr('style',"outline: 1px solid black")
                .attr('style',"width: 100%")
                .attr('width', width)
                .attr('height', height)
                .attr('style', 'outline: 1px solid black')
                .attr('style', 'background: #e5e5e5');

    var bars = svg.selectAll('.bar')
                 .data(data)
                 .enter()
                 .append('rect');
          
    bars.attr("x", function(d,i){ return 10 + i * 40})
        .attr("y", function(d){return height - d - 10})
        .attr("width", 30)
        .attr("height", function(d){ return d})
        .attr("fill", "black");

    var texts = svg.selectAll(".myTexts")
                   .data(data)
                   .enter()
                   .append("text");
                   
    texts.attr("x", function(d,i){ return 12 + i * 40})
        .attr("y", function(d){ return height - d - 15})
        .text(function(d){ return d});
  },[])

  return (
    <Layout>
      <Header>
        Axes
      </Header>
      <p className={styles.content}>
        Any sort of chart or graph is incomplete without axes as they provide human-readable scale references. D3 has four easy methods to draw four types of axes. All we need is an 'SVG' element to add the axes into and
        a scaling function to scale against given data. Talking about scaling function, there are total 6 of them: scaleLinear, scaleSqrt, scaleLog, scaleTime, scaleBand and scalePoint. I have included a picture at the bottom of this
        article which I think does the best job in depicting the key differences among them.
      </p>
    </Layout>
  );
};

export default Axes;