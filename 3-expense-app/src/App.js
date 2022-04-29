import { useEffect, useState, useRef } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import Transaction from './components/Transaction.js';

import './App.css';

function App() {
  const [balance, setBalance] = useState(125000);
  const [error, setError] = useState(false);

  const inputTopupRef = useRef();
  const inputSendmoneyRef = useRef();

  useEffect(function () {
    const showError = setTimeout(function () {
      setError(false);
    }, 2500);
    return function () {
      clearTimeout(showError);
    };
  });

  function format(value) {
    return value.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  }

  function handleTopup(e) {
    e.preventDefault();
    const newBalance = balance + parseInt(e.target.topup.value);
    setBalance(newBalance);
    inputTopupRef.current.value = null;
  }

  function handleSendmoney(e) {
    e.preventDefault();
    const newBalance = balance - parseInt(e.target.sendmoney.value);
    if (newBalance >= 0) {
      setBalance(newBalance);
      setError(false);
    } else {
      setError(true);
    }
    inputSendmoneyRef.current.value = null;
  }

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
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Insufficient Money</AlertTitle>
            <AlertDescription>
              Your balance is not enough to send money.
            </AlertDescription>
          </Alert>
        )}
        <Flex
          flex="8"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="2xl">{format(balance)}</Heading>
          <Text fontSize="sm" color="gray.500">
            Februari 2022
          </Text>
        </Flex>
        <Transaction
          handleTopup={handleTopup}
          handleSendmoney={handleSendmoney}
          inputTopupRef={inputTopupRef}
          inputSendmoneyRef={inputSendmoneyRef}
        />
      </Flex>
    </Flex>
  );
}

export default App;
