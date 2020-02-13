import React from 'react';
// import 'antd/dist/antd.css';

import {Slider} from 'antd';


const CustomInputRange = () => {
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        // color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

  return (


    <div>

      <Slider range marks={marks} defaultValue={[26, 37]}/>

    </div>
  );
};

export default CustomInputRange;