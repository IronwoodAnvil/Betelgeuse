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
  Heading,
  Image,
  Layer,
  ResponsiveContext,
  Stack,
  Text
} from 'grommet';

const CardConfig = [
  {
    component: "card",
    children: [
      {
        component: "stack",
        children: [
          {
            component: "cardBody",
            children: [
              {
                component: "img",
                fit: "cover",
                src: "fillfromdata",
                a11yTitle: "fillfromsource2"
              }
            ]
          },
          {
            component: "cardHeader",
            pad: "",
            background: "",
            width: "",
            justify: "",
            children: [
              {
                component: "box",
                children: [
                  {
                    component: "heading",
                    level: "3",
                    margin: "none",
                    children: ["fillfromsource3"]
                  },
                  {
                    component: "text",
                    size: "small",
                    children: ["fillfromsource4"]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const KeysToComponentMap = {
  card: Card,
  stack: Stack,
  cardBody: CardBody,
  img: Image,
  cardHeader: CardHeader,
  box: Box,
  heading: Heading,
  text: Text
};

function renderer(config) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        src: config.src
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map(c => renderer(c)))
    );
  }
}

export default renderer;