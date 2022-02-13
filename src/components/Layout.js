import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon, Segment, Sidebar, Grid, Menu } from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {

    const [flip, setFlip] = useState(false)

    const flipHamburger = () => {
        setFlip(!flip)
    }

  return (
    <Container>
        <Segment className={styles.h1}>
            <Header as='h3' color='yellow' className={styles.headerContainer}>
                <Icon name="bars" className={styles.hamburger} onClick={flipHamburger} rotated={flip ? 'clockwise' : 'counterclockwise'} />
                <Header.Content>                
                    Data Visualization With D3
                </Header.Content>
            </Header>
        </Segment>
        <Divider />
      <Grid columns={2}>
        <Grid.Row stretched>
            <Grid.Column width={3} only='computer'>
                <Segment.Group>
                    <Segment>
                        <Link to="/">
                            Introduction
                        </Link>
                    </Segment>
                    <Segment>
                        <Link to="/hello-world">
                            Hello World
                        </Link>
                    </Segment>
                    <Segment>
                        <Link to="/bar-chart">
                            Bar Chart
                        </Link>
                    </Segment>
                    <Segment>
                        <Link to="/line-chart">
                            Line Chart
                        </Link>
                    </Segment>
                    <Segment>
                        <Link to="/scatter-plot">
                            Scatter Plot
                        </Link>
                    </Segment>
                    <Segment>
                        <Link to="/pie-chart">
                            Pie Chart
                        </Link>
                    </Segment>
                </Segment.Group>            
            </Grid.Column>
            <Grid.Column computer={13} tablet={16} mobile={16} >
                <Segment>
                    {children}
                </Segment>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={flip ? true : false}
        width='thin'
        direction='top'
        className={styles.sidebar}
        >
        <Segment.Group  >
            <Segment className={styles.sidebarSegment}>
                
            </Segment>
            <Segment className={styles.sidebarSegment}>
                <Link to="/">
                    Introduction
                </Link>
            </Segment>
            <Segment className={styles.sidebarSegment}>
                <Link to="/hello-world">
                    Hello World
                </Link>
            </Segment>
            <Segment className={styles.sidebarSegment}>
                <Link to="/bar-chart">
                    Bar Chart
                </Link>
            </Segment>
            <Segment className={styles.sidebarSegment}>
                <Link to="/line-chart">
                    Line Chart
                </Link>
            </Segment>
            <Segment className={styles.sidebarSegment}>
                <Link to="/scatter-plot">
                    Scatter Plot
                </Link>
            </Segment>
            <Segment className={styles.sidebarSegment}>
                <Link to="/pie-chart">
                    Pie Chart
                </Link>
            </Segment>
        </Segment.Group>
      </Sidebar>
    </Container>
  );
};

export default Layout;