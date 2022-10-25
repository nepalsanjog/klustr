import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

export default function File() {
  const [selectedFile, setFile] = useState([])
  // state = {
  //   // initialy, no file selected
  //   selectedFile: null
  // }

  // on file select (from the pop up)
  const onFileChange = (e) => {
      // Update the state
      this.setFile({ selectedFile: e.target.files[0] });
  }

  // on file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    let formdata = new FormData()

    // Update the fromData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // Details of the uploaded file
    console.log(this.state.selectedFile);

    axios({
      url: `/some/api`,
      method: 'POST',
      headers:{
        authorization: 'your token'
      },
      data: formdata // pass here..
    }).then((res)=>{


    },(err)=>{


    })
  }

  const fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Name: {this.state.selectedFile.type}</p>
            <p>
                Last Modified:{" "}
               {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
        </div>
      );
    } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload Button</h4>
          </div>
        );
    }

    return(
      <div>
        <h3>File Upload using React with axios post call</h3>
        <div>
          <input type="file" onChange={this.onFileChange} /> 
          <button onClick={this.onFileUpload}>Upload</button>
        </div>
        {this.fileData()}
      </div>
    );
  };
}
