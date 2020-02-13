import React from 'react';
import logo from './logo.svg';
import './App.css';


var result;
class App extends React.Component{

  constructor(){
    super();
    this.state={
      emp:[]
    }
  }
 async componentWillMount(){
  function f1() { return new Promise((resolve, reject) => { 
    const url= 'http://dummy.restapiexample.com/api/v1/employees';
    fetch(url).
    then(obj => obj.json()).
    then(obj => resolve(obj.data)).catch(reject); 
  }); 
}
    
    await f1().then(obj => result = obj);
    
    this.setState({emp:result})
    }

 addEmp =()=>{
    const {emp}=this.state;
    var x={
      id: 25,
      employee_name: "sindhu",
      employee_salary : 25000,
      employee_age : 22
    }
    emp.push(x);
    this.setState({
      emp : emp
    });
 }
  

 deleteEmp =()=>{
   const{emp}= this.state;
    emp.pop();
    this.setState({
      emp : emp
    });
 }

 render() {
 
  const {emp} = this.state;
  
  console.log(emp)

  return (
    <div>
        <center><h1>Add and Delete Employees</h1></center>
        <table className="table table-bordered table-striped">
          <tbody>
            {emp.map((emp,i)=>
            <tr>
              <td>{emp.id}</td>
              <td>{emp.employee_name}</td>
              <td>{emp.employee_salary}</td>
              <td>{emp.employee_age}</td>
            </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary sm-2" onClick={this.addEmp}>Add Employee</button> &nbsp;&nbsp;&nbsp;&nbsp; 
        <button className="btn btn-primary sm-2" onClick={this.deleteEmp}>Delete Employee</button>
    </div>
   );
  }
}
export default App;
