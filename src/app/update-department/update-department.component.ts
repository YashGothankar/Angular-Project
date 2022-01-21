import { Component, OnInit } from '@angular/core';
import { depObj } from '../department';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  depObj:depObj;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.depObj = new depObj();
    this.route.params.subscribe((res)=>{
      this.depObj.id = res['id']
      console.log(res)
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('departmentRecords');
    if(oldRecords!=null){
      const empList = JSON.parse(oldRecords)
      const currentUser = empList.find((m:any)=> m.id == this.depObj.id);
      //console.log(currentUser)
      if(currentUser!=undefined){
        this.depObj.employeeName = currentUser.employeeName;
        this.depObj.employeeAge = currentUser.employeeAge;
        console.log(currentUser)
      }
    }
  }

  updateUser(){
    const oldRecords = localStorage.getItem('departmentRecords');
    if(oldRecords!=null){
      const empList = JSON.parse(oldRecords);
      empList.splice(empList.findIndex((a:any)=>a.id == this.depObj.id),1)
      empList.push(this.depObj)
      localStorage.setItem('departmentRecords',JSON.stringify(empList))
    }
    this.router.navigateByUrl('/department')

  }
}
