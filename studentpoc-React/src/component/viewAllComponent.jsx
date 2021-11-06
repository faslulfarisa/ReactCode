import { render } from '@testing-library/react';
import React,{Component}from 'react'
import StudServices from '../services/studservices'
export class ViewAllComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            stud:[]
        }
    }
componentDidMount(){
    StudServices.getusers().then((response)=>{
        this.setState({stud:response.data});
        console.log(this.state.stud)
});}
render()
{
    return(
        <div><table class="table">
        <thead>
        <tr><th>id</th>
        <th>name</th>
        <th>dob</th>
        <th>class</th>
        <th>div</th>
        <th>gender</th></tr>
        </thead>
        <tbody>{
            this.state.stud.map(stud=>
                <tr><td>{stud.id}</td>
                <td>{stud.name}</td>
                <td>{stud.dob}</td>
                <td>{stud.class}</td>
                <td>{stud.div}</td>
                <td>{stud.gender}</td></tr>
                )

        }
        </tbody>
        </table>
        </div>
    );
}
}

export default ViewAllComponent;