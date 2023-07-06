import React from 'react';

import CounterLabel from 'components/counter/CounterLabel';
import DecreaseCounterButton from 'components/counter/DecreaseCounterButton';
import IncreaseCounterButton from 'components/counter/IncreaseCounterButton';

function CounterApp() {
  return (
    <div>
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
