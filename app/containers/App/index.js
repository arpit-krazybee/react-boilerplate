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
import Header from 'components/Header';
import Footer from 'components/Footer';
import Counters from 'components/Counter';
import GlobalStyle from '../../global-styles';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<Counters/>,document.getElementById('app'));