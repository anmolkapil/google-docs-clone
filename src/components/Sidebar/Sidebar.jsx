import './Sidebar.css';

import PropTypes from 'prop-types';
import CalendarIcon from '../../assets/calendar.png';
import KeepIcon from '../../assets/keep.png';
import TasksIcon from '../../assets/tasks.png';
import ContactsIcon from '../../assets/contacts.png';
import MapsIcon from '../../assets/maps.png';

const Sidebar = ({ sidebarOpen }) => {
  const icons = [CalendarIcon, KeepIcon, TasksIcon, ContactsIcon, MapsIcon];
  return (
    <div className={sidebarOpen ? 'side-bar' : 'side-bar hide'}>
      {icons.map((icon, idx) => (
        <div className="img-button" key={idx}>
          <img src={icon} />
        </div>
      ))}

      <div className="hor-separator">&nbsp;</div>

      <div className="img-button">
        <span className="material-symbols-outlined">add</span>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool,
};

export default Sidebar;
