import React from 'react';
import PropTypes from 'prop-types';

import Waves from './Waves';
import WavesOpaque from './WavesOpaque';

export const shapes = {
  waves: Waves,
  waves_opaque: WavesOpaque,
};

export default function Shape({ shape, ...others }) {
  if (shape in shapes) {
    const Component = shapes[shape];
    return <Component {...others} />;
  }

  return null;
}

Shape.propTypes = {
  shape: PropTypes.oneOf(Object.keys(shapes)).isRequired,
};
