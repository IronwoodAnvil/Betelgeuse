import React, { useState } from 'react';
import {
  Avatar,
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Collapsible,
  Grid,
  Grommet,
  Heading,
  Header,
  Image,
  Layer,
  Nav,
  ResponsiveContext,
  Stack,
  Text
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';


import CardGrid from './CardGrid';
import { OnHeaderNav } from './OnHeader';

const theme = {
  global: {
    colors: {
      low: '#181A00',
      high: '#849483',
      low2: '#533747',
      high2: '#5F506B',
      highlight: '#FFCAB1'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  heading: { font: { family: 'Roboto', } },
  card: {
    container: {
      elevation: 'large',
    },
    footer: {
      pad: 'medium',
    },
  }
};

const App = () => {
  return (
    <Grommet theme={theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <OnHeaderNav />
            <Box pad="large">
              <CardGrid />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;