import React from 'react';
import { MessengerIcon } from '../svg';
import Button from '../components/button';

type Props = {};

const IconButton = (props: Props) => {
  return (
    <Button onClick={() => {}} childrenType='icon'>
      <MessengerIcon />
    </Button>
  );
};

export default IconButton;
