import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empObj } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  empObj:empObj;
  constructor(private router: Router) {
    this.empObj = new empObj();
  }

  ngOnInit(): void {
  }

  getId(){
    const oldRecords = localStorage.getItem('employeeRecords');
    if(oldRecords!==null){
      const empList = JSON.parse(oldRecords)
      return empList.length + 1;
    }else{
      return 1;
    }
  }

  saveUser(){
    const newId = this.getId();
    this.empObj.id = newId; 
    const oldRecords = localStorage.getItem('employeeRecords');
    if(oldRecords==null){
      const empArr = [];
      empArr.push(this.empObj);
      localStorage.setItem('employeeRecords', JSON.stringify(empArr))
    }else{
      const empList = JSON.parse(oldRecords);
      empList.push(this.empObj)
      console.log(this.empObj);
      localStorage.setItem('employeeRecords',JSON.stringify(empList))
    }
    this.router.navigateByUrl('/employee')

  }

}
