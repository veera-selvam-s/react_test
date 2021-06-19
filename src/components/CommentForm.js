
import React,{Component} from 'react';
import {Button,Modal,ModalHeader,ModalBody,Row,Col,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state={
            isComOpen:false
        }
        this.toggleCom=this.toggleCom.bind(this);
    }

    toggleCom(){
        this.setState({
            isComOpen : !this.state.isComOpen
        });
    }
    handlecomment(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    
    render(){
        return(
            <React.Fragment>
            <div className="row">
                    <Button outline onClick={this.toggleCom}>
                        <i className="fa fa-edit"></i> Submit comment
                    </Button>
            </div>
            <Modal isOpen={this.state.isComOpen} toggle={this.toggleCom}>
                <ModalHeader toggle={this.toggleCom}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handlecomment(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col>
                            <Control.select model=".rating" name="rating"
                                            md={12}
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="urname" md={12} >Your name</Label>
                            <Col md={12}>
                            <Control.text model=".urname" id="urname" name="urname"
                                        placeholder="Your Name"
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                            <Errors
                                        className="text-danger"
                                        model=".urname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12} >Comment</Label>
                            <Col md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="5"
                                        className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Col md={2}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </React.Fragment>
            
        );
        
    }
}
export default CommentForm;