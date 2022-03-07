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
import { ProjectCardLayer } from './ProjectCardLayer';

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
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      showProject: null,
      selectedID: null,
      projectIDs: Array.from({ length: data.length }, (v, i) => i)
    };
  }
  handleClick(projectID) {
    this.setState({ showProject: true, selectedID: projectID });
  }
  hide() {
    this.setState({ showProject: undefined });
  }
  next() {
    if (this.state.selectedID === this.state.projectIDs.length - 1 ) {
      this.setState({selectedID: this.state.projectIDs[0]});
    } else {
      this.setState({selectedID: this.state.selectedID + 1});
    }
  }
  prev(){
    if (this.state.selectedID === this.state.projectIDs[0]) {
      this.setState({selectedID: this.state.projectIDs.length - 1 });
    } else {
      this.setState({selectedID: this.state.selectedID - 1});
    }
  }
  render() {
    return (
      <Box>
        Just clicked: {this.state.selectedID}
        <Grid
          gap="medium"
          rows="medium"
          columns={{ count: 'fit', size: ['small', 'medium'] }}
        >
          {this.state.projectIDs.map(projectID => (
            <Card width="medium" key={data[projectID].location} onClick={() => this.handleClick(projectID)}>
              {/* Stacked CardBody and CardHeader on top of each other
              in that order */}
              <Stack anchor="bottom-left">
                <CardBody height="medium">
                  <Image
                    fit="cover"
                    src={data[projectID].image}
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
                      {data[projectID].location}
                    </Heading>
                    <Text size="small">{data[projectID].state}</Text>
                  </Box>
                </CardHeader>
              </Stack>
            </Card>
          ))}
        </Grid>
        <ProjectCardLayer
          open={this.state.showProject}
          project={this.state.selectedID}
          hide={this.hide}
          next={this.next}
          prev={this.prev}
           />
      </Box>
    )
  }
}
export default CardGrid