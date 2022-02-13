import React from 'react';
import { Link } from 'react-router-dom';
import {Header, Icon} from 'semantic-ui-react';
import styles from '../styles/Layout.module.css';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <Header>
        Introduction
      </Header>
      <p className={styles.content}>
        I recently applied for an engineering position at an early stage startup. The company utilizes the power of AI to deliver market intelligence to it's clients.
        Considering my experience in previous interviews, I felt pretty confident about cracking it until the interviewer assigned an intense data visualization coding problem. I tried 
        to solve but couldn't complete in time.
      </p>
      <p className={styles.content}>
        Even though I didn't get that job but somehow I got hooked with data visualization after that interview. I can see its immense potential in both academics as well as in creative field.
        Hence, I have decided to start this tutorial for not just others but for myself to experiment with different sorts of data and visualization techniques and try to get little creative with them.
      </p>
      <p className={styles.content}>
        I will be using a popular data visualization library known as D3.js. I have heard about it before but never used it in any project I've done so far. I'll start with simple data and basic charts like 
        bar chart, line chart, pie chart, etc and then I'll dig deeper into topics like heat maps, interactivity, story telling, etc.
      </p>
      <p className={styles.content}>
        May the force be with me! <Icon name='space shuttle' />
      </p>
    </Layout>
  );
};

export default Home;