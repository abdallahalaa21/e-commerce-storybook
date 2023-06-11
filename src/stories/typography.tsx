import React from 'react';

const typographyEnum = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'body-1': 'b1',
  'body-2': 'b2',
  'body-3': 'b3',
  caption: 'caption',
};

const Typography = () => {
  return (
    <div>
      Typography
      <div className='flex flex-col'>
        {Object.entries(typographyEnum).map(([key, value]) => {
          return (
            <div className='flex flex-col mb-2'>
              <span className={`${value}`}>{key}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Typography;
