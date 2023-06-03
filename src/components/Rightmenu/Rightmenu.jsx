import './Rightmenu.css';

const Rightmenu = () => {
  return (
    <div className="right-menu">
      <div className="icon-button comment">
        <span className="material-icons-outlined">insert_comment</span>
      </div>
      <div className="icon-button video">
        <span className="material-symbols-outlined videocam">videocam</span>
        <span className="material-icons-outlined arrow">arrow_drop_down</span>
      </div>
      <button className="share-button">
        <span className="material-icons-outlined lock">lock</span>
        Share
      </button>
      <div className="user">A</div>
    </div>
  );
};

export default Rightmenu;
