import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { depObj } from '../department';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  depObj:depObj;
  constructor(private router: Router) {
    this.depObj = new depObj();
  }

  ngOnInit(): void {
  }

  getId(){
    const oldRecords = localStorage.getItem('departmentRecords');
    if(oldRecords!==null){
      const empList = JSON.parse(oldRecords)
      return empList.length + 1;
    }else{
      return 1;
    }
  }

  saveUser(){
    const newId = this.getId();
    this.depObj.id = newId; 
    const oldRecords = localStorage.getItem('departmentRecords');
    if(oldRecords==null){
      const empArr = [];
      empArr.push(this.depObj);
      localStorage.setItem('departmentRecords', JSON.stringify(empArr))
    }else{
      const empList = JSON.parse(oldRecords);
      empList.push(this.depObj)
      localStorage.setItem('departmentRecords',JSON.stringify(empList))
    }
    this.router.navigateByUrl('/department')

  }

}
