/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import 'react-tiny-fab/dist/styles.css';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fab, Action } from 'react-tiny-fab';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="Give Me A Dog!" defaultTitle="Give Me A Dog!">
        <meta
          name="description"
          content="You give me a dog breed,i give you a random image of that dog breed / Tu mi dai una razza di cane,io ti do una foto casuale di quel cane"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
      <Fab
        icon={<i className="fas fa-info" style={{ fontSize: '30px' }} />}
        mainButtonStyles={{ backgroundColor: 'Blue' }}
        position={{ bottom: 100, left: -10 }}
        event={event}
      >
        <Action text="Informazioni su questa app">
          <i className="fas fa-question-circle" style={{ fontSize: '30px' }} />
        </Action>
        <Action text="Forka questa repo">
          <i className="fab fa-github" style={{ fontSize: '30px' }} />
        </Action>
      </Fab>
      <footer
        style={{
          borderRadius: '0px 0px 15px 15px',
          textAlign: 'center',
          height: 'fit-content',
          backgroundColor: 'teal',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Fredoka One',
        }}
      >
        Made in 🇮🇹 by <span style={{ color: 'red' }}>Davide</span>{' '}
        "L'illusionista della tecnologia"{' '}
        <span style={{ color: 'blue' }}>Salamino</span>
        <br />
        Background photo by yoav hornung on Unsplash
      </footer>
    </AppWrapper>
  );
}
