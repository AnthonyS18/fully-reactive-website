import React from 'react';
import { images } from '../../constants';
import './SubHeading.css'; // Make sure to import the corresponding CSS file for styling

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
