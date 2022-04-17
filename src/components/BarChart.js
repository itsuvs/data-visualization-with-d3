import React, {useEffect} from 'react';
import Layout from './Layout';
import { Header, Segment, Image } from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';
import * as d3 from 'd3';
import BarChartImage from '../assets/bar-chart.png'

const BarChart = () => {
  
  useEffect(() => {
    var data = [85, 25, 152, 47, 200];

    var width = 272;
    var height = 272;

    var svg = d3.select('#bar-chart')
                .append('svg')
                .attr('style',"width: 100%; background: #e5e5e5;")
                .attr('width', width)
                .attr('height', height)

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
        Bar Chart
      </Header>
      <p className={styles.content}>
        Before moving on to binding and visualization, I want to shortly discuss about the coordinate system of an 'SVG' element.
        Unlike the mathematical coordinate system where the point (x=0, y=0) lies in the lower left corner of the graph,
        in SVG coordinate system, the (x=0, y=0) point lies at the top left corner of the canvas. Let's understand this by coding a simple bar chart.
      </p>
      <p className={styles.mission}>
         What I am trying to achieve : 
      </p>
      <p className={styles.missionStatement}>
        Display a bar chart using data binding technique in D3
      </p>
      <p className={styles.subHeading}>
        Input:
      </p>
      <Segment secondary compact>
        <Image className={styles.contentImage} src={BarChartImage} fluid />
      </Segment>
      <p className={styles.content}>
        Once again, the program starts with making a selection. In the first selection, I've selected a 'div' with id '#bar-chart' and appended an SVG element to it which would serve as the workspace for our intended visualization. 
        In the second selection, I've selected a bunch of divs with  classname '.bar' which would serve as data block for respective data array element. In line 13, I connected these divs with data array using operator 'data()' and then 
        in line 15, I finally assigned a shape, in our case its rectangle.

        <br/><br/>Now here comes the tricky part.

        
        {/* I guess from line 1 to 15 is pretty easy to understand. In lines 18 and 19, I have defined the 'x' and 'y' coordinates respectively for the bars. These points are the top left corner of each bar.
        Since I am using 30 as width, I am returning '10 + i * 40' where 10 we can call as the margin from the left corner and 40 can be counted as 30+10 where 30 is the width of each bar and 
        10 is the distance between two bars. For finding the y coordinates, I have substracted the data value from the height of the SVG to bring the bars to the bottom i.e 'height - d - 10' where 10 is
        just margin from bottom.  */}
      </p>
      <p className={styles.subHeading}>
        Output:
      </p>
      <Segment className={styles.contentImage} id="bar-chart" compact>

      </Segment>
    </Layout>
  );
};

export default BarChart;