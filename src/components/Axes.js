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
       
      </p>
    </Layout>
  );
};

export default Axes;