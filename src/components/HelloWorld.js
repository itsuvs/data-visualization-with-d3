import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import * as d3 from 'd3';
import { Header, Segment, Image } from 'semantic-ui-react';
import styles from '../styles/Layout.module.css'
import HelloWorldImage from '../assets/hello-world.png'

const HelloWorld = () => {

  useEffect(() => {
    d3.select('#hello-world')
    .append('svg')
    .attr('style',"outline: 1px solid black; width: 100%; background: black;")
    .append('text')
    .text('Hello World')
    .attr("x", 20)
    .attr("y", 90)
    .attr('style',"fill: yellow; font-size: 36; font-family: monospace;")
  },[])

  return (
    <Layout>
      <Header>
        Hello World
      </Header>
      <p className={styles.content}>
        Just like with any other programming language, getting started with D3 (Data Driven Document) is incomplete without a "Hello, World" program. I could have gone for some crazy visualization for "Hello, World"
        but for the sake of simplicity, understanding and my sanity I am using text.
      </p>
      <p className={styles.mission}>
         What I am trying to achieve : 
      </p>
      <p className={styles.missionStatement}>
        To display text "Hello World" in an SVG element using D3
      </p>
      <p className={styles.subHeading}>
        Input:
      </p>
      <Segment secondary compact>
        <Image className={styles.contentImage} src={HelloWorldImage} fluid />
      </Segment>
      <p className={styles.content}>
        As we can see above, I've selected an element <span className={styles.highlighter}>#hello-world</span> using D3's operator 'select'. The 'append' operator in 2nd line adds an svg inside <span className={styles.highlighter}>#hello-world</span> element.
        The 'attr' operator in the 3rd line assigns style attribute to the svg element. Then I appended a text element with text 'Hello World' and then defined it's coordinates and styling using 'attr' operator. Pretty easy this one!
      </p>
      <p className={styles.subHeading}>
        Output:
      </p>
      <Segment className={styles.contentImage} id="hello-world" compact>

      </Segment>
      <p className={styles.content}>
        D3 is all about 'selections and binding'. You make selections in DOM and manipulate them using some predefined methods known as 'operators'. It's just like how we do it in classic DOM manipulation but
        D3 offers a lot cleaner interface. Other than its ease of use, D3 is an open source library so we can do lots of experiment without worrying about api call limitations
        or payments in general.
      </p>
    </Layout>
  );
};

export default HelloWorld;