import React, { useState } from 'react';
import {
  Avatar,
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
  Image,
  Layer,
  ResponsiveContext,
  Stack,
  Text
} from 'grommet';

const data = [
  {
    location: 'Blue Hole',
    image: `https://i.insider.com/5c796ca426289858f7205ede?width=1136&format=jpeg`,
    state: 'Belize',
  },
  {
    location: 'The Satil',
    image: `https://www.israel21c.org/wp-content/uploads/2020/01/shutterstock_733279432.jpg`,
    state: 'Israel',
  },
  {
    location: 'Barrier Reef',
    image: `https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg`,
    state: 'Australia',
  },
  {
    location: 'Fourth',
    image: `https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg`,
    state: 'Anywhere,USA',
  },
  {
    location: 'Fifth',
    image: `https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg`,
    state: 'Anywhere,USA',
  },
  {
    location: 'Sixth',
    image: `https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg`,
    state: 'Anywhere,USA',
  },
  {
    location: 'Seventh',
    image: `https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg`,
    state: 'Anywhere,USA',
  },
];

class CardGrid extends React.Component {
  render() {
    return (
      <Grid
        gap="medium"
        rows="medium"
        columns={{ count: 'fit', size: ['small', 'medium'] }}
      >
        {data.map((item) => (
          <Card width="medium" key={item.location}>
            {/* Stacked CardBody and CardHeader on top of each other
              in that order */}
            <Stack anchor="bottom-left">
              <CardBody height="medium">
                <Image
                  fit="cover"
                  src={item.image}
                  a11yTitle="scuba diving"
                />
              </CardBody>
              <CardHeader
                pad={{ horizontal: 'small', vertical: 'small' }}
                // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                background="#000000A0"
                width="medium"
                justify="start"
              >
                <Box>
                  <Heading level="3" margin="none">
                    {item.location}
                  </Heading>
                  <Text size="small">{item.state}</Text>
                </Box>
              </CardHeader>
            </Stack>
          </Card>
        ))}
      </Grid>
    )
  }
}

export default CardGrid