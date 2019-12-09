import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Icons from '../icons';

const Footer = ({ dir }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return (
    dir !== '/eventos' && (
      <section className='Footer'>
        <Link to='/' className='Footer__eventos'>
          <Icons type='eventos' dir={dir} />
        </Link>
        <Link to='/personas' className='Footer__personas'>
          <Icons type='personas' dir={dir} />
        </Link>
        {user.login ? (
          <Link to='/eventos' className='Footer__btn'>
            <button type='button' className='button'>+</button>
          </Link>
        ) : (
          <Link to='/auth' className='Footer__btn'>
            <button type='button' className='button'>+</button>
          </Link>
        )}
        <Link to='/lugares' className='Footer__lugares'>
          <Icons type='lugares' dir={dir} />
        </Link>
        {user.login ? (
          <Link to='/perfil' className='Footer__perfil'>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.name}
                className='Footer_perfil-img'
              />
            ) : (
              <Icons type='perfil' dir={dir} />
            )}

          </Link>
        ) : (
          <Link to='/auth' className='Footer__perfil'>
            <Icons type='perfil' dir='perfil' />
          </Link>
        )}

      </section>
    )
  );
};

export default Footer;
