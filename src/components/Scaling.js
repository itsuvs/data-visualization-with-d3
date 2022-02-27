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
        Scaling functions transform data values into visual variables such as position, length, color, etc. In simple words, they describe how an actual dimension of the original data is to be represented as a visual variable.
        There are four categories of scale functions: 
        <span
          style={{ fontStyle: "italic", color: "purple", fontWeight: "bold" }}
        >
           Continuous, Sequential, Quantized and Ordinal.
        </span>
      </p>
      
      <p className={styles.content}>

      </p>
    </Layout>
  )
}
