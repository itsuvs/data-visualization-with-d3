import React, { useEffect } from "react";
import Layout from "./Layout";
import { Header, Segment, Image } from "semantic-ui-react";
import styles from "../styles/Layout.module.css";
import * as d3 from "d3";
import AxesImage from "../assets/axes.png";

const Axes = () => {
  useEffect(() => {
    var width = 272;
    var height = 272;

    var svg = d3
      .select("#axes")
      .append("svg")
      .attr("style", "outline: 1px solid black")
      .attr("style", "width: 100%")
      .attr("width", width)
      .attr("height", height)
      .attr("style", "outline: 1px solid black")
      .attr("style", "background: #e5e5e5");

    var scale = d3.scaleLinear().domain([0, 200]).range([10, 252]);

    var xaxis = d3.axisBottom().scale(scale);

    svg.append("g").attr("transform", "translate(0,140)").call(xaxis);
  }, []);

  return (
    <Layout>
      <Header>Axes</Header>
      <p className={styles.content}>
        Any sort of chart or graph is incomplete without axes as they provide
        human-readable scale references. D3 has four easy methods to draw four
        types of axes:{" "}
        <span
          style={{ fontStyle: "italic", color: "purple", fontWeight: "bold" }}
        >
          axisTop, axisBottom, axisRight and axisLeft
        </span>
        . All we need is an 'SVG' element to add the axes into and a scaling
        function to scale against given data. Let's get into code.
      </p>
      <p className={styles.mission}>
         What I am trying to achieve : 
      </p>
      <p className={styles.missionStatement}>
        Display a horizontal axis that can scale from 0 to 200
      </p>
      <Segment secondary compact>
        <Image className={styles.contentImage} src={AxesImage} fluid />
      </Segment>
      <p className={styles.content}>
        From line 1 to 14, it's same as we learned in blog "Hello World" and "Bar Chart";. In line 16, I have introduced
        three new terms:{" "}
        <span
          style={{ fontStyle: "italic", color: "purple", fontWeight: "bold" }}
        >
          domain, range & scaleLinear
        </span>
        . Domain is essentially the extremes of data we would like to plot and
        range is how we want to spread the axis against the dimensions of the
        SVG element. Talking about scaleLinear, it's one of the scaling functions 
        which creates scale with a linear relationship between input and output.
      </p>
      <p className={styles.content}>
        In line 16, I've set the domain as [0,200] which means that the data we want to represent lies between 0 to 200. The range I've set is [10,252] which means
        the data point '0' lies at 10px and '200' lies at 252px from the left side of the SVG respectively.
      </p>
      <p className={styles.content}>
        Lastly, I translated the scale we created to a point (0,140) so that it won't stick to the top side of SVG.
      </p>
      <Segment className={styles.contentImage} id="axes" compact></Segment>
    </Layout>
  );
};

export default Axes;
