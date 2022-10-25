import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import React from "react";
import Sidebar from './components/Sidebar'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
// import Center from './components/Center'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Form, Button, Label, Input, Container, Row, Col, FormGroup } from 'reactstrap';
import axios from 'axios';

function App() {
    return (
      <Router>
        <div className="container dark">
          <div className="app">
          {/* <Sidebar /> */}
          <Route path="/" exact component={NotesListPage}/>
          <Route path="/note/:id" component={NotePage} />
          </div>
        </div>
      </Router >
    );
}
export default App;


    // let formData = new FormData();
    //
    // const onFileChange = (e) => {
    //     console.log(e.target.files[0])
    //     if(e.target && e.target.files[0]) {
    //         formData.append('file', e.target.files[0]);
    //     }
    // }
    // const SubmitFileData = () => {
    //   axios.post(
    //     'https://v2.convertapi.com/upload',
    //       {formData}
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // }
    //

    // return (
    //     <>
    //    
    //     <Container className="container">
    //       
    //        <Row className="box-wrapper">
    //          <h2>Klustr.</h2>
    //          <Col className="box3 border">
    //         <Form>
    //           <FormGroup className="fg-file">
    //             <Label className="file-label" for="exFile" >Add CSV/Excel File</Label>
    //             <Input type="file" name="file-upload" id="exFile" onChange={onFileChange} />
    //           </FormGroup>
    //
    //           {/* <Button variant="primary" type="submit"> */}
    //           {/*   Submit */}
    //           {/* </Button> */}
    //           <FormGroup className="fg-select"> 
    //             <Label className="select-label" for="exampleSelect">
    //               Select Clustering Method
    //             </Label >
    //             <Input
    //               id="exampleSelect"
    //               name="select"
    //               type="select"
    //             >
    //               <option>
    //                 1
    //               </option>
    //               <option>
    //                 2
    //               </option>
    //               <option>
    //                 3
    //               </option>
    //               <option>
    //                 4
    //               </option>
    //               <option>
    //                 5
    //               </option>
    //             </Input>
    //           </FormGroup>
    //           <FormGroup className="fg-number">
    //             <Label className="number-label" for="exampleNumber">
    //               Number of Clusters
    //             </Label>
    //             <Input
    //               id="exampleNumber"
    //               name="number"
    //               placeholder="number placeholder"
    //               type="number"
    //             />
    //           </FormGroup>
    //           <FormGroup> 
    //             <Button onClick={SubmitFileData}>Submit File</Button>
    //           </FormGroup>
    //         </Form>
    //
    //       </Col> 
    //         <Col className="box4">
    //             Inputs/Graph Choice
    //           <div class="middle-column">
    //             <div id="box5">
    //                 Graph 1
    //             </div>
    //             <div id="box6">
    //                 Graph 2
    //             </div>
    //             <div id="box7">
    //                 Graph 3
    //             </div>
    //           </div>
    //          </Col> 
    //          <Col id="box8">
    //             Ground-Truth Comparison
    //          </Col>
    //        </Row> 
    //      </Container>
    //     </>
    //  );
//}


