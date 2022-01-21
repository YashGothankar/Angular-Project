import { Component, OnInit } from '@angular/core';
import { empObj } from '../employee'; 
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  empList : empObj [];
  p:number = 1;
  searchText:any;
  constructor(){
    this.empList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('employeeRecords');
    if(records!==null){
      this.empList = JSON.parse(records);
    }
  }

  deleteUser(id:any){
    if(confirm("Are You Sure ?")){
      const oldRecords = localStorage.getItem('employeeRecords');
      if(oldRecords!=null){
        const empList = JSON.parse(oldRecords);
        empList.splice(empList.findIndex((a:any)=>a.id == id),1)
        localStorage.setItem('employeeRecords',JSON.stringify(empList))
      }
      const records = localStorage.getItem('employeeRecords');
      if(records!==null){
        this.empList = JSON.parse(records);
      }
    }
   
  }

  sort(){
    return this.empList.sort((a:any,b:any)=> a.employeeAge - b.employeeAge)
  }

}
