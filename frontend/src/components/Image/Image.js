import React from 'react';
import PropTypes from 'prop-types';
import ImageNext from "next/image";

const Image = (props) => {
  const {imgSrc} = props;

  return (
    <ImageNext
      blur={true}
      src={imgSrc}
      alt={'photo 1'}
      width={75}
      height={75}
      loading="eager"
    />
  )
};

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

Image.displayName = 'Image';

export default Image;
