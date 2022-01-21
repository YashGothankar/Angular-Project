import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empObj } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empObj:empObj;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.empObj = new empObj();
    this.route.params.subscribe((res)=>{
      this.empObj.id = res['id']
      console.log(res)
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('employeeRecords');
    if(oldRecords!=null){
      const empList = JSON.parse(oldRecords)
      const currentUser = empList.find((m:any)=> m.id == this.empObj.id);
      //console.log(currentUser)
      if(currentUser!=undefined){
        this.empObj.employeeName = currentUser.employeeName;
        this.empObj.employeeAge = currentUser.employeeAge;
        console.log(currentUser)
      }
    }
  }

  updateUser(){
    const oldRecords = localStorage.getItem('employeeRecords');
    if(oldRecords!=null){
      const empList = JSON.parse(oldRecords);
      empList.splice(empList.findIndex((a:any)=>a.id == this.empObj.id),1)
      empList.push(this.empObj)
      localStorage.setItem('employeeRecords',JSON.stringify(empList))
    }
    this.router.navigateByUrl('/employee')

  }

}

