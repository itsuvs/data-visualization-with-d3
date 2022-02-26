import React from 'react';
import { Link } from 'react-router-dom';
import {Header, Segment, Image} from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';
import Layout from './Layout';

export default function Scaling() {
  return (
    <Layout>
      <Header>Scaling</Header>
      <p className={styles.content}>
        Scaling is transforming data values into visual variables such as position, length, color, etc and the functions used in scaling are called as scale functions.
        There are four categories of scale functions: 
        <span
          style={{ fontStyle: "italic", color: "purple", fontWeight: "bold" }}
        >
           Continuous, Sequential, Quantized and Ordinal.
        </span>
      </p>
      <Segment secondary compact>
        {/* <Image className={styles.contentImage} src={AxesImage} fluid /> */}
      </Segment>
      <p className={styles.content}>

      </p>
      <Segment className={styles.contentImage} id="axes" compact></Segment>
    </Layout>
  )
}
