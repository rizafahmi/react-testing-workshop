import { Button, Flex, Input } from '@chakra-ui/react';

function SendMoney({ handleSendmoney, inputSendmoneyRef }) {
  return (
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
      <form onSubmit={handleSendmoney}>
        <Input
          width="100%"
          border="none"
          borderBottom="1px"
          focusBorderColor="none"
          rounded={0}
          mb={4}
          required={true}
          id="sendmoney"
          type="number"
          ref={inputSendmoneyRef}
        />
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
  );
}

export default SendMoney;
