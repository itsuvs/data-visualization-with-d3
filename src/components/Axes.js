import React, { useEffect } from "react";
import Layout from "./Layout";
import { Header, Segment, Image } from "semantic-ui-react";
import styles from "../styles/Layout.module.css";
import * as d3 from "d3";
import AxesImage from "../assets/axes.png";

const Axes = () => {
  useEffect(() => {
    var data = [85, 25, 152, 47, 200];

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
        function to scale against given data 
        {/* Talking about scaling functions,
        there are four categories of them: Continuous, Sequential, Quantized and
        Ordinal, but I am going to discuss only the ones in Continuous category:{" "}
        <span
          style={{ fontStyle: "italic", color: "purple", fontWeight: "bold" }}
        >
          scaleLinear, scaleSqrt, scaleLog, scaleTime, scaleBand and scalePoint
        </span> */}
        . Let's get into code.
      </p>
      <Segment secondary compact>
        <Image className={styles.contentImage} src={AxesImage} fluid />
      </Segment>
      <p className={styles.content}>
        From line 1 to 14 is pretty easy to understand; in line 16 we have added
        three new terms:{" "}
        <span
          style={{ fontStyle: "italic", color: "purple", fontWeight: "bold" }}
        >
          domain, range & scaleLinear
        </span>
        . Domain is essentially the extremes of data we would like to plot and
        range is how we want to spread the axes against the dimensions of the
        svg element. Talking about scaleLinear, it's one of the scaling functions 
        which I will cover in the next blog.
      </p>
      <Segment className={styles.contentImage} id="axes" compact></Segment>
    </Layout>
  );
};

export default Axes;
