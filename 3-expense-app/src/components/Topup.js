import { Button, Flex, Input } from '@chakra-ui/react';

function Topup({ handleTopup, inputTopupRef }) {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      bg="gray.800"
      rounded="6"
      mx="2"
      border="1px"
    >
      <form onSubmit={handleTopup}>
        <Input
          name="topup"
          id="topup"
          width="100%"
          type="number"
          ref={inputTopupRef}
          border="none"
          borderBottom="1px"
          focusBorderColor="gray.50"
          rounded={0}
          mb={4}
          color="white"
          required={true}
        />
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
  );
}

export default Topup;
