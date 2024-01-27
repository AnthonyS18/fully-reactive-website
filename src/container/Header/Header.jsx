import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0', marginBottom: '2rem' }}>
        Welcome to gericht fine dining, an exquisite fine dining establishment that transcends culinary boundaries to deliver an unparalleled gastronomic experience. Nestled in the heart of the city, Éclat Gastronomique seamlessly combines opulence with culinary artistry, creating a haven for connoisseurs of fine food and refined tastes.
      </p>
      <button type="button" className='custom__button' style={{ position: 'relative', bottom: '0' }}>
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;

