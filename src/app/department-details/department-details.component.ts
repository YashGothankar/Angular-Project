import { Component, OnInit } from '@angular/core';
import { depObj } from '../department';


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  empList : depObj [];
  p:number = 1;
  searchText:any;
  constructor(){
    this.empList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('departmentRecords');
    if(records!==null){
      this.empList = JSON.parse(records);
    }
  }

  deleteUser(id:any){
    if(confirm("Are You Sure ?")){
      const oldRecords = localStorage.getItem('departmentRecords');
      if(oldRecords!=null){
        const empList = JSON.parse(oldRecords);
        empList.splice(empList.findIndex((a:any)=>a.id == id),1)
        localStorage.setItem('employeeRecords',JSON.stringify(empList))
      }
      const records = localStorage.getItem('departmentRecords');
      if(records!==null){
        this.empList = JSON.parse(records);
      }
    }
   
  }

}
