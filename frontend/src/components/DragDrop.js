import React, { useState, useRef } from 'react'
import ReactDom from 'react-dom/client'
// import File from './File'
import '../App.css'

const handleFile = (e) => {
  const {files}=e.dataTransfer;
  console.log(files);
};

export default function DragDrop() {

      // drag state
    const [dragActive, setDragActive] = React.useState(false);
      // ref
    const inputRef = React.useRef(null);

    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

      // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e);
        }
    };

        // triggers when files is selected with click 
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files);
      }
    };



        // triggers the input when the button is clicked
    const onButtonClick = () => {
       inputRef.current.click();
    }

    return (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" 
            id="input-file-upload" multiple={true} 
            onChange={handleChange} /> 
        <label id="label-file-upload" 
            htmlFor="input-file-upload" 
            className={dragActive ? "drag-active" : "" 
        }>
          <div>
            <p>Drag and Drop your file or</p>
            <button type="button" className="upload-button" 
                onClick={onButtonClick}>Upload a file</button>
          </div>
         </label>
           { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} 
                    onDragLeave={handleDrag} onDragOver={handleDrag} 
                    onDrop={handleDrop}></div>}
      </form>
    );
};


