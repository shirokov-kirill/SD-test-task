import { Component } from "react"
import { Input, Media, FormGroup, Col } from "reactstrap";
import './ListComponent.css'

function ItemView({item}){
    return(
        <Media tag="li" className="row list-item" key={item.id}>
            <div className="col-12">
                <h4>{item.name}</h4>
            </div>
            <div className="col-12">
                <p>{item.description}</p>
            </div>
            <div className="col-12 col-md-4">
                <p>Cost: {item.cost}$</p>
            </div>
            <div className="col-12 col-md-8">
                <p>Email: {item.email}</p>
            </div>
        </Media>
    );
}

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: props.items,
            filterQuery: '',
            filterType: 'Name'
        }
        this.handleQueryChange = this.handleQueryChange.bind(this)
    }

    handleQueryChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        console.log(value)
        this.setState({
            [name]: value
        })
    }

    render(){
        const items = this.state.items.filter(item => {
            switch(this.state.filterType){
                case 'Name': return item.name.includes(this.state.filterQuery)
                case 'Max. Cost': return Number(item.cost) <= Number(this.state.filterQuery)
                case 'Email': return item.email.includes(this.state.filterQuery)
                default: return true
            }
        }).map(item => <ItemView item={item}/>)
        
        return(
            <div className="container list-container">
                <FormGroup row>
                    <Col md={{size: 9}}>
                        <FormGroup check>
                            <Input type='text' name="filterQuery" id="filterType" onChange={this.handleQueryChange} placeholder="Search..."/>
                        </FormGroup>
                    </Col>
                    <Col md={{size: 3}}>
                        <Input type='select' name='filterType' id="filterType" value={this.state.contactType} onChange={this.handleQueryChange}>
                            <option>Name</option>
                            <option>Email</option>
                            <option>Max. Cost</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Media list>
                    {items}
                </Media>
            </div>
        );
    }

}