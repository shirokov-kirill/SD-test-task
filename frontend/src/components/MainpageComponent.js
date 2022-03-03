import { Component } from "react";

export default class Mainpage extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome to the test work!</h1>
                                <p>Created by Kirill Shirokov</p>
                                <p>In order to add Item or search for item please click on the button in Header.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            Some text in here can be useful.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}