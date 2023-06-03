import './Menubar.css';

import PropTypes from 'prop-types';
import Logo from '../../assets/google-docs.png';
import Rightmenu from '../Rightmenu/Rightmenu';

import { useState } from 'react';

const menuOptions = [
  'File',
  'Edit',
  'View',
  'Insert',
  'Format',
  'Tools',
  'Extensions',
  'Help',
];

const Menubar = ({ menubarOpen }) => {
  const [title, setTitle] = useState('Untitled document');

  return (
    <div className={menubarOpen ? 'menu-bar' : 'menu-bar hide'}>
      <div className="docs-logo">
        <img src={Logo} alt="Google Docs Logo" />
      </div>
      <div className="menu-section">
        <div className="document-title">
          <input
            className="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <span className="material-icons-outlined star">star_border</span>
        </div>
        <div className="menu">
          <ul className="menu-list">
            {menuOptions.map((option, idx) => (
              <li className="menu-list-item" key={idx}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Rightmenu />
    </div>
  );
};

Menubar.propTypes = {
  menubarOpen: PropTypes.bool,
};

export default Menubar;
