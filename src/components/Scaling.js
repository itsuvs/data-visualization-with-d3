import React from "react";
import { Header, Segment, Image, Container, Table } from "semantic-ui-react";
import styles from "../styles/Layout.module.css";
import Layout from "./Layout";

export default function Scaling() {
  return (
    <Layout>
      <Header>Scaling</Header>
      <p className={styles.content}>
        In this blog, I will shine some light on my understanding of scaling functions in D3.
        Scaling functions describe how an actual dimension of the original data is to be represented as a visual
        variable. In simple words, they transform data values into visual variables such as position, length, color, etc. 
        D3 has about 12 scaling functions that can be grouped into
        three categories:
      </p>
      <ul>
        <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Scales with continuous input and continuous output
        </li>
        <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Scales with continuous input and discrete output
        </li>
        <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Scales with discrete input and discrete output
        </li>
      </ul>
      <p className={styles.content}>
        I believe to understand the above three categories one needs to understand what are
          <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
             discrete
          </span>  and 
          <span style={{ fontWeight: "bold", marginLeft: "5px", marginRight: "5px" }}>
             continuous
          </span>
           data.
      </p>
      <p className={styles.content}>
          a. Discrete value: Countable but unmeasurable integers that cannot be sub-divided into smaller parts. 
          eg: Number of coins in a bag, number of person in a stadium, etc.
          <br/><br/>
          b. Continuous value: Countable and measurable integers or fractions that can be sub-divided into smaller parts to derive more meaning.
          eg: Height of a person in meters, feet, inches, centimeter and so on.. 
      </p>
      <Container>
        <h4>1. Scales with continuous input and continuous output</h4>
        
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Function</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell singleLine>scaleLinear()</Table.Cell>
              <Table.Cell>
                Uses y=mx+c to interpolate across domain and range
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell singleLine>scalePow()</Table.Cell>
              <Table.Cell>
                Uses y=m*x^k + b to interpolate across domain and range
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell singleLine>scaleSqrt()</Table.Cell>
              <Table.Cell>
                This is the special case of power scale which use k = 0.5
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell singleLine>scaleLog()</Table.Cell>
              <Table.Cell>
                Uses y=m*log(x)+b for interpolation
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell singleLine>scaleTime()</Table.Cell>
              <Table.Cell>
                Similar to linear scale except the domain is expressed in dates
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell singleLine>scaleSequential()</Table.Cell>
              <Table.Cell>
                Uses custom function called as interpolator for interpolation
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      <br/>
      <Container>
        <h4>
         2. Scales with continuous input and discrete output
        </h4>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Function</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell singleLine>scaleQuantize()</Table.Cell>
              <Table.Cell>
                Uses y=mx+c to interpolate across domain and range
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell singleLine>scaleQuantile()</Table.Cell>
              <Table.Cell>
                Uses y=m*x^k + b to interpolate across domain and range
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell singleLine>scaleThreshold()</Table.Cell>
              <Table.Cell>
                This is the special case of power scale which use k = 0.5
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      <br/>
      <Container>
        <h4>3. Scales with discrete input and discrete output</h4>
        
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Function</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell singleLine>scaleOrdinal()</Table.Cell>
              <Table.Cell>
                Maps discrete values to discrete values. The range array will repeat if its shorter than the domain array.
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell singleLine>scaleBand()</Table.Cell>
              <Table.Cell>
                Constructs a new band scale with the domain specified as an array of values and the range as the minimum and maximum extents of the bands
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell singleLine>scalePoint()</Table.Cell>
              <Table.Cell>
                Maps from a discrete set of values to equally spaced points along the specified range
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </Layout>
  );
}
