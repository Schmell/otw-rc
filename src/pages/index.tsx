import { Box } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <div>Hello</div>

    <DarkModeSwitch />
  </Container>
);

export default Index;
