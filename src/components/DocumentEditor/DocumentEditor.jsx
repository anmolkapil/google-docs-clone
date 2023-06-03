import './DocumentEditor.css';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import { useState, useRef } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DocumentEditor = ({ menubarOpen, setMenubarOpen }) => {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="outer-wrapper">
      <div className="document-editor">
        <Toolbar
          editorRef={editorRef}
          editorState={editorState}
          setEditorState={setEditorState}
          menubarOpen={menubarOpen}
          setMenubarOpen={setMenubarOpen}
        />

        <div className={`wrapper ${menubarOpen ? '' : 'menu-closed'}`}>
          <div className="document-page">
            <div className="editor-page">
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                placeholder="Type @ to insert"
                toolbarHidden
                ref={editorRef}
              />
            </div>
          </div>
        </div>
      </div>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={'img-button toggle'}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="material-icons-outlined">
          {sidebarOpen ? 'chevron_right' : 'chevron_left'}
        </span>
      </div>
    </div>
  );
};

DocumentEditor.propTypes = {
  menubarOpen: PropTypes.bool,
  setMenubarOpen: PropTypes.func,
};

export default DocumentEditor;
