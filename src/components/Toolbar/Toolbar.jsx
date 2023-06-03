import './Toolbar.css';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { EditorState, RichUtils } from 'draft-js';

const Toolbar = ({
  editorState,
  setEditorState,
  editorRef,
  menubarOpen,
  setMenubarOpen,
}) => {
  useEffect(() => {
    editorRef.current.focusEditor();
  }, [editorRef]);

  const [fontSize, setFontSize] = useState('11');

  return (
    <div className="tool-bar">
      <div className="test1">
        <div
          className="toolbar-icon"
          onClick={() => setEditorState(EditorState.undo)}
        >
          <span className="material-symbols-outlined">undo</span>
        </div>
        <div
          className="toolbar-icon"
          onClick={() => setEditorState(EditorState.redo)}
        >
          <span className="material-symbols-outlined">redo</span>
        </div>
        <div className="toolbar-icon" onClick={() => print()}>
          <span className="material-symbols-outlined">print</span>
        </div>
        <div className="toolbar-icon">
          <span className="material-symbols-outlined">spellcheck</span>
        </div>
        <div className="toolbar-icon">
          <span className="material-symbols-outlined">imagesearch_roller</span>
        </div>
        <div className="dropdown toolbar-icon">
          <p>100%</p>
          <span className="material-icons-outlined arrow">arrow_drop_down</span>
        </div>

        <div className="separator">&nbsp;</div>

        <div className="dropdown toolbar-icon">
          <p>Normal text</p>
          <span className="material-icons-outlined arrow">arrow_drop_down</span>
        </div>

        <div className="separator">&nbsp;</div>

        <div className="dropdown toolbar-icon">
          <p className="gap">Arial</p>
          <span className="material-icons-outlined arrow">arrow_drop_down</span>
        </div>

        <div className="separator">&nbsp;</div>

        <div
          className="toolbar-icon mini"
          onMouseDown={(e) => {
            e.preventDefault();
            const newFontSize = fontSize - 1;
            setFontSize(newFontSize);
            setEditorState(
              RichUtils.toggleBlockType(editorState, `${newFontSize}px`)
            );
          }}
        >
          <span className="material-symbols-outlined mini-icon">remove</span>
        </div>
        <input className="text-size" value={fontSize}></input>
        <div
          className="toolbar-icon mini"
          onMouseDown={(e) => {
            e.preventDefault();
            const newFontSize = fontSize + 1;
            setFontSize(newFontSize);
            setEditorState(
              RichUtils.toggleBlockType(editorState, `${newFontSize}px`)
            );
          }}
        >
          <span className="material-symbols-outlined mini-icon">add</span>
        </div>

        <div className="separator">&nbsp;</div>

        <div
          className={
            editorState.getCurrentInlineStyle().has('BOLD')
              ? 'toolbar-icon active'
              : 'toolbar-icon'
          }
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
          }}
        >
          <span className="material-symbols-outlined">format_bold</span>
        </div>
        <div
          className={
            editorState.getCurrentInlineStyle().has('ITALIC')
              ? 'toolbar-icon active'
              : 'toolbar-icon'
          }
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
          }}
        >
          <span className="material-symbols-outlined">format_italic</span>
        </div>
        <div
          className={
            editorState.getCurrentInlineStyle().has('UNDERLINE')
              ? 'toolbar-icon active'
              : 'toolbar-icon'
          }
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleInlineStyle(editorState, 'UNDERLINE')
            );
          }}
        >
          <span className="material-symbols-outlined">format_underlined</span>
        </div>
        <div className="toolbar-icon">
          <span className="material-symbols-outlined">format_color_text</span>
        </div>
        <div className="toolbar-icon">
          <span className="material-symbols-outlined">
            format_ink_highlighter
          </span>
        </div>

        <div className="separator">&nbsp;</div>

        <div className="toolbar-icon">
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>

      <div className="test">
        <div className="toolbar-icon editor">
          <span className="material-symbols-outlined">edit</span>
          <span className="material-icons-outlined arrow">arrow_drop_down</span>
        </div>

        <div className="separator">&nbsp;</div>

        <div
          className="toolbar-icon"
          onClick={() => setMenubarOpen(!menubarOpen)}
        >
          <span className="material-symbols-outlined">
            {menubarOpen ? 'expand_less' : 'expand_more'}
          </span>
        </div>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  editorState: EditorState,
  editorRef: PropTypes.object,
  setEditorState: PropTypes.func.isRequired,
  menubarOpen: PropTypes.bool,
  setMenubarOpen: PropTypes.func,
};

export default Toolbar;
