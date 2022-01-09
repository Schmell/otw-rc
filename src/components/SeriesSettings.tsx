import React from "react";
import PropTypes from "prop-types";
import { Container } from "./Container";
import { Box, Text } from "@chakra-ui/react";

const SeriesSettings = (props) => {
  return (
    <Container>
      <Box as="h1">Series Settings</Box>
      <Text as="p">Some text</Text>
    </Container>
  );
};

SeriesSettings.propTypes = {};

export default SeriesSettings;
