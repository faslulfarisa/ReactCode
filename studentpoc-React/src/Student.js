import { render } from '@testing-library/react';
import StudServices from './services/studservices';
import React ,{Component} from 'react';
import ViewAllComponent from './component/viewAllComponent'
// import content from './static';
import './Student.css';

export class FormComponent extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      dob:'',
      class:'',
      div:'',
      gender:'',
    }
this.handlesnamechange=this.handlesnamechange.bind(this);
this.handlesdobchange=this.handlesnamechange.bind(this);
this.handlesclasschange=this.handlesnamechange.bind(this);
this.handlesdivchange=this.handlesnamechange.bind(this);
this.handlesgenderchange=this.handlesnamechange.bind(this);
}
handlesnamechange=(event)=>{
  this.setState({
    name:event.target.value
  })
}
handlesdobchange=(event)=>{
  this.setState({
    name:event.target.value
  })
}
handlesclasschange=(event)=>{
  this.setState({
    name:event.target.value
  })
}
handlesdivchange=(event)=>{
  this.setState({
    name:event.target.value
  })
}
handlesgenderchange=(event)=>{
  this.setState({
    name:event.target.value
  })
}
handlesubmit=(event)=>{
  let Student={
    name:this.state.name,
    name:this.state.dob,
    name:this.state.class,
    name:this.state.div,
    name:this.state.gender,
  }
  console.log(JSON.stringify(Student));
  StudServices.saveall(Student).then(response=>{
    console.log(response);
  });
  window.location.reload(false);
}
}
function Student() {
    return (
      <div className="student">
          <h1>Student Details</h1>
          <div className="stu-container"> 
              <div className="row">
                  <div className="col-md-6 offset-md-3 offset-md-3">
                      <div className="form-container">
                        <form>
                         <div className="input-cont">
                         <label>Name:</label>
                         <input type="text" placeholder="Enter Your Name" name="name"  className="input-field"></input>
                         {/* <input type="text" placeholder="Enter Your Name" name="name"  className="input-field" value={this.state.name} onChange={this.handlesnamechange} ></input> */}
                         </div>
                        <div className="input-cont">
                        <label>Date of Birth:</label>
                        <input type="date" placeholder="Date of Birth"  name="dob" className="input-field" />
                        {/* <input type="date" placeholder="Date of Birth"  name="dob" className="input-field" value={this.state.dob} onChange={this.handlesnamedob}/> */}
                        </div>
                        <div className="input-cont">
                        <label>Class:</label>
                        {/* <select id="dropdown"  className="select-field" checked={this.state.class} onChange={this.handlesclasschange} > */}
                        <select id="dropdown"  className="select-field" >
                           <option value="N/A">N/A</option>
                           <option value="1">I</option>
                           <option value="2">II</option>
                           <option value="3">III</option>
                           <option value="4">IV</option>
                           <option value="5">V</option>
                           <option value="6">VI</option>
                           <option value="7">VII</option>
                           <option value="8">VIII</option>
                           <option value="9">IX</option>
                           <option value="10">X</option>
                           <option value="11">XI</option>
                           <option value="12">XII</option>
                           </select>
                        </div>
                        
                        <div className="input-cont">
                        <label>Division:</label>
                        {/* <select id="dropdown" className="select-field" checked={this.state.div} onChange={this.handlesdivchange} > */}
                        <select id="dropdown" className="select-field" >

                           <option value="N/A">N/A</option>
                           <option value="A">A</option>
                           <option value="B">B</option>
                           <option value="C">C</option>
                           </select>
                        </div>
                        <div className="input-cont">
                        <label>Gender:</label>
                        <div className="gender-input-cont" >
                         <input type="radio" value="Male" name="gender"  />Male
                         <input type="radio" value="Female" name="gender"  />Female
                         {/* <input type="radio" value="Male" name="gender" checked={this.state.gender=="male"} onChange={this.handlesgenderchange}  />Male */}
                         {/* <input type="radio" value="Female" name="gender" checked={this.state.gender=="Female"} onChange={this.handlesgenderchange}  />Female */}
                         </div>
                       </div>
                       <button className="button" type="submit">submit</button>
                      </form>    
                      </div>
                      <div  className="col-md-6 offset-md-3 offset-md-3">
                        <ViewAllComponent/>
                      </div>
                  </div>
              </div>         
           </div>  
      </div>
    );
  }
  
  export default Student;
  