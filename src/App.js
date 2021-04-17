import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Button, TextField } from '@material-ui/core';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function App() {
  const [presets, setPreset] = useState([
    {
      name: "New Blog Post",
      fields: [
        {
          label: "Title",
          isRich: false,
        },
        {
          label: "Author",
          isRich: false,
        },
        {
          label: "Post",
          isRich: true,
        },
      ]
    }
  ]);
  const [index, setIndex] = useState(0);
  const [editorState, setEditorState] = useState(null);

  return (
    <div style={{width: "65%", height: "95vh", margin: "auto"}}>
      <h1 style={{color: "royalblue"}}>DataCannon</h1>

      <div>
          <span style={{fontSize: "24px"}}>Action</span>
          <Dropdown className='actionMenu' placeholderClassName='actionMenuPlaceholder' options={presets.map(preset => preset.name)} value={presets[index].name} placeholder="Select a target" />
      </div>

      <div style={{marginTop: "15px"}}>
        {presets[index].fields.map((field, i) => {
          if (field.isRich) {
            // Rich Text Field
            return (
              <div>
                <h2>{field.label}</h2>
                <Editor
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
              </div>
            )
          } else {
            // Normal Field
            return (
              <TextField size="medium" fullWidth label={field.label} style={{display: "block", width: "300px", marginTop: "10px"}}/>
            )
          }
        })}
      </div>
      <Button variant="contained" color="primary" style={{marginTop: "15px", float: "right"}}>Send</Button>
    </div>
  );
}

export default App;
