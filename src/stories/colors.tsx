import React from 'react';

type Props = {};

const colorsEnum = {
  'b&w-1': 'bg-b&w-1',
  'b&w-2': 'bg-b&w-2',
  'b&w-2.1': 'bg-b&w-2.1',
  'b&w-3': 'bg-b&w-3',
  'b&w-4': 'bg-b&w-4',
  'b&w-5': 'bg-b&w-5',
  'primary-1': 'bg-primary-1',
  'primary-2': 'bg-primary-2',
  'primary-3': 'bg-primary-3',
  'primary-4': 'bg-primary-4',
  'primary-5': 'bg-primary-5',
  'primary-6': 'bg-primary-6',
  accent_green: 'bg-accent_green',
  accent_blue: 'bg-accent_blue',
  accent_yellow: 'bg-accent_yellow',
};

const Colors = (props: Props) => {
  return (
    <div>
      Colors
      <div className='flex flex-wrap'>
        {Object.keys(colorsEnum).map((color) => (
          <div className={`w-1/2 p-4  ${colorsEnum[color]}`}>{color}</div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
