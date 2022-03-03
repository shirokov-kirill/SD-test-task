import React, { Component } from "react";
import { Button, Nav, Navbar, NavItem, NavbarToggler, Collapse, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isNavbarOpen: false,
            isModalOpen: false,
            name: '',
            description: '',
            cost: '',
            email: ''
        }
        this.addItem = props.addItem

        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    toggleNav(){
        this.setState({isNavbarOpen: !this.state.isNavbarOpen})
    }

    toggleModal(){
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    handleAddItem(errors, event){
        const item = {
            name: this.state.name,
            description: this.state.description,
            cost: this.state.cost,
            email: this.state.email
        }
        if(errors.name === '' && errors.description === '' && errors.cost === '' && errors.email === ''){
            this.toggleModal()
            this.addItem(item)
        }
        event.preventDefault()
    }

    handleInputChange(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    validate(name, description, cost, email){
        const errors = {
            name: '',
            description: '',
            cost: '',
            email: ''
        };
        if(name.length === 0){
            errors.name = 'Item should have a name'
        }
        if(description.length <= 10){
            errors.description = 'Description should contain more than 10 characters'
        }
        const reg = /^\d+$/;
        if(!reg.test(cost) || cost === 0){
            errors.cost = 'Cost should be a number and >= 0'
        }

        if(email.split('').filter(x => x ==='@').length !== 1){
            errors.email = 'Email shoul contain 1 @ sign'
        }
        return errors
    }

    render(){

        var errors = this.validate(this.state.name, this.state.description, this.state.cost, this.state.email)

        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className='container'>
                        <div className="row">
                            <NavbarToggler onClick={this.toggleNav}/>
                            <Collapse isOpen={this.state.isNavbarOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home"></span> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/list">
                                            <span className="fa fa-list"></span> All Items
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-plus"></span> Add Item
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Add Item</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={ e => {this.handleAddItem(errors, e)}}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" placeholder='Product name' valid={errors.name === ''} invalid={errors.name !== ''} value={this.state.name} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.name}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Description</Label>
                                <Input type='textarea' id="description" name="description" placeholder='Description' valid={errors.description === ''} invalid={errors.description !== ''} value={this.state.description} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.description}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="cost">Cost ($)</Label>
                                <Input type="number" id="cost" name="cost" placeholder='Cost ($)' valid={errors.cost === ''} invalid={errors.cost !== ''} value={this.state.cost} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.cost}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" placeholder='Email' valid={errors.email === ''} invalid={errors.email !== ''} value={this.state.email} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Add</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}