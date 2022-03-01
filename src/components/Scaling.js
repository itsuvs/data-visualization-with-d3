import React from "react";
import { Header, Segment, Image, Container, Table } from "semantic-ui-react";
import styles from "../styles/Layout.module.css";
import Layout from "./Layout";

export default function Scaling() {
  return (
    <Layout>
      <Header>Scaling</Header>
      <p className={styles.content}>
        Scaling functions transform data values into visual variables such as
        position, length, color, etc. In simple words, they describe how an
        actual dimension of the original data is to be represented as a visual
        variable. D3 has about 12 scaling functions that can be grouped into
        three categories:
      </p>
      <ul>
        <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Scales with continuous input and continuous output
        </li>
        <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Scales with continuous input and discreet output
        </li>
        <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Scales with discreet input and discreet output
        </li>
      </ul>
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
    </Layout>
  );
}
