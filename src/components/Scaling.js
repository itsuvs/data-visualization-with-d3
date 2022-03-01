import React from 'react';
import {Header, Segment, Image, Container} from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';
import Layout from './Layout';

export default function Scaling() {
  return (
    <Layout>
      <Header>Scaling</Header>
      <p className={styles.content}>
        Scaling functions transform data values into visual variables such as position, length, color, etc. In simple words, they describe how an actual dimension of the original data is to be represented as a visual variable.
        D3 has about 12 scaling functions that can be grouped into three categories: 
      </p>
      <ul>
          <li style={{fontWeight: 'bold', marginBottom:'8px'}}>
            Scales with continous input and continous output
          </li>
          <li style={{fontWeight: 'bold', marginBottom:'8px'}}>
            Scales with continous input and discreet output
          </li>
          <li style={{fontWeight: 'bold', marginBottom:'8px'}}>
            Scales with discreet input and discreet output
          </li>
        </ul>
      <Container>
        <h4>
         1. Scales with continous input and continous output
        </h4>
      </Container>
    </Layout>
  )
}

