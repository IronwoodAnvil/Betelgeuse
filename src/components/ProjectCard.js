import React, { useState } from 'react';
import {
  Text,
  Page,
  PageContent,
  Layer,
  Heading,
  Paragraph,
  Grid,
  Card,
  CardHeader,
  Box,
  Button,
  CardBody,
  Carousel,
  CardFooter,
  Image
} from 'grommet';


export const ProjectCard = () => {
  return (
    <Card background="background-front" round="medium" pad="small" elevation="none">
      <CardHeader justify="center">
        <Heading margin="none" >
          Project Name
        </Heading>
      </CardHeader>
      <CardBody background="background-front" >
      <Box>
        This is the project short description
      </Box>
      <Carousel>
        this is where the project images go
      </Carousel>
      </CardBody>
      <CardFooter>
        <Button>
          ... link to full page
        </Button>
      </CardFooter>
    </Card>
  );
};