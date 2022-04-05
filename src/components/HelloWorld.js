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
    .attr('style',"fill: yellow")
    .attr("y", 90)
    .attr("x", 20)
    .attr("font-size", 36)
    .attr("font-family", "monospace");
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
      <p className={styles.content}>
        D3 is all about 'selections and binding'. You make selections in DOM and manipulate them using some predefined methods known as 'operators'. It's just like how we do it in classic DOM manipulation but
        D3 offers a lot cleaner interface. Other than its ease of use, D3 is an open source library so we can do lots of experiment without worrying about api call limitations
        or payments in general. Now, let's get into coding:
      </p>
      <p className={styles.subHeading}>
        Input:
      </p>
      <Segment secondary compact>
        <Image className={styles.contentImage} src={HelloWorldImage} fluid />
      </Segment>
      <p className={styles.content}>
        As we can see above, I've selected an element <span className={styles.highlighter}>#hello-world</span> using D3's operator 'select'. The 'append' operator in 2nd line adds an svg inside <span className={styles.highlighter}>#hello-world</span> element.
        The 'attr' operator in 3rd and 4th line assigns some attribute to the svg element. Then I appended a text element with text 'Hello World' and then assigned some attributes to it. So simple!
      </p>
      <p className={styles.subHeading}>
        Output:
      </p>
      <Segment className={styles.contentImage} id="hello-world" compact>

      </Segment>
      <p className={styles.content}>
        This is quite an easy example but it's also a necessary one. I absolutely had fun learning this! 
      </p>
    </Layout>
  );
};

export default HelloWorld;