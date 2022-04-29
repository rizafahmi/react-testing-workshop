import {
  Button,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        width="480px"
        direction="column"
        bgGradient="linear(to-r, gray.100, white)"
        border="2px"
        borderColor="gray.100"
        boxShadow="2xl"
        height="100vh"
        p={12}
        rounded={6}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading color="gray.300" as="h1" size="xl" mb={6} flex={1}>
          EXPENSES
        </Heading>
        <Flex
          flex="8"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="2xl">RP. 125.000,-</Heading>
          <Text fontSize="sm" color="gray.500">
            Februari 2022
          </Text>
        </Flex>
        <Flex flex="3" justifyContent="space-between" minWidth="100%">
          <Flex
            width="100%"
            flexDirection="column"
            justifyContent="center"
            bg="gray.800"
            rounded="6"
            mx="2"
            border="1px"
          >
            <form>
              <NumberInput>
                <NumberInputField
                  width="100%"
                  border="none"
                  borderBottom="1px"
                  focusBorderColor="gray.50"
                  rounded={0}
                  mb={4}
                  color="white"
                  required={true}
                />
              </NumberInput>
              <Button
                variant="link"
                colorScheme="teal"
                type="submit"
                width="100%"
                height="64px"
                rounded={0}
              >
                Top Up
              </Button>
            </form>
          </Flex>
          <Flex
            className="send-money"
            width="100%"
            justifyContent="center"
            flexDirection="column"
            rounded="6"
            mx="2"
            border="1px"
            borderColor="black"
          >
            <form>
              <NumberInput>
                <NumberInputField
                  width="100%"
                  border="none"
                  borderBottom="1px"
                  focusBorderColor="none"
                  rounded={0}
                  mb={4}
                  required={true}
                />
              </NumberInput>
              <Button
                variant="link"
                colorScheme="red"
                height="64px"
                type="submit"
                width="100%"
                rounded={0}
              >
                Send Money
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
