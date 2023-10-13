import React, { useEffect, useReducer } from 'react';

import PropTypes from 'prop-types';
import { Chart as ChartJS, registerables } from 'chart.js';

import { getColor, getItemFromStore } from '@helpers/utils';
import { useConfig } from '@atom/config/useConfig';
import useToggleStyle from './hooks/useToggleStyle';

ChartJS.register(...registerables);

const Main = props => {
  
  const { config } = useConfig();
  const configDispatch = ()=>{}

  const { isLoaded } = useToggleStyle(
    config.isRTL,
    config.isDark,
    configDispatch
  );

  if (!isLoaded) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: config.isDark ? getColor('dark') : getColor('light')
        }}
      />
    );
  } 

  return (
    <div>
      {props.children}
    </div>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
