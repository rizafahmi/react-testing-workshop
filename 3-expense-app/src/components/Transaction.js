import { Flex } from '@chakra-ui/react';

import Topup from './Topup.js';
import SendMoney from './SendMoney.js';

function Transaction({
  handleTopup,
  handleSendmoney,
  inputTopupRef,
  inputSendmoneyRef,
}) {
  return (
    <Flex flex="3" justifyContent="space-between" minWidth="100%">
      <Topup handleTopup={handleTopup} inputTopupRef={inputTopupRef} />
      <SendMoney
        handleSendmoney={handleSendmoney}
        inputSendmoneyRef={inputSendmoneyRef}
      />
    </Flex>
  );
}

export default Transaction;
