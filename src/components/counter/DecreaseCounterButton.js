import React from 'react';
import { useDispatch } from 'react-redux';

import { decreaseCountAction } from 'store/counter/action';

function DecreaseCounterButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(decreaseCountAction(1));
      }}
    >
      Decrease
    </button>
  );
}

export default DecreaseCounterButton;
