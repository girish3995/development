
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  clickEvent=""
  searchText:any
  candidate_data = [
    { "id": 11, "name": "Ash", "department": "Finance", "joining_date": '8 / 10 / 2016' },
    { "id": 12, "name": "John", "department": "HR", "joining_date": '18 / 1 / 2011' },
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": '28 / 11 / 2019' },
    { "id": 14, "name": "Vish", "department": "Development", "joining_date": '7 / 7 / 2017' },
    { "id": 15, "name": "Barry", "department": "Operations", "joining_date": '19 / 8 / 2014' },
    { "id": 16, "name": "Ady", "department": "Finance", "joining_date": '5 / 10 / 2014' },
    { "id": 17, "name": "Gare", "department": "Development", "joining_date": '6 / 4 / 2014' },
    { "id": 18, "name": "Hola", "department": "Development", "joining_date": '8 / 12 / 2010' },
    { "id": 19, "name": "Ola", "department": "HR", "joining_date": '7 / 5 / 2011' },
    { "id": 20, "name": "Kim", "department": "Finance", "joining_date": '20 / 10 / 2010' }]
  displayData:any
  constructor() { }

  ngOnInit(): void {
    this.displayData=this.candidate_data
  }
  sortByJoiningDate(){
    this.clickEvent="sortByJoiningDate"
    this.displayData=this.candidate_data.sort((a:any,b:any)=> new Date((moment(a.joining_date, "DD/MM/YYYY").toDate())).getTime() > new Date((moment(b.joining_date, "DD/MM/YYYY").toDate())).getTime() ? 1:-1)
  }
  sortByName(){
    this.clickEvent="sortByName"
    this.displayData=this.candidate_data.sort((a:any,b:any)=> a.name > b.name ? 1:-1)
  }
  experienceMoreThan2(){
    this.clickEvent="experienceMoreThan2"
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year -2, month, day);
    this.displayData=this.candidate_data.filter((val:any)=> {
      return new Date((moment(val.joining_date, "DD/MM/YYYY").toDate())).getTime()<c.getTime()
      })
  }
  distinctDepartmentsCount(){
    this.clickEvent="distinctDepartmentsCount"
    let countDeptWise:any[]=[]
    let arrayDept=this.candidate_data.map((val:any)=> {
      return val.department
    })
    let uniqueArray = arrayDept.filter(function(item, pos) {
      return arrayDept.indexOf(item) == pos;
  })
    uniqueArray.forEach(element => {
      let obj={}
      countDeptWise.push(Object.assign(obj,{dept:element,count:0}))
    });
    this.candidate_data.filter((val:any)=>{
      if(uniqueArray.includes(val.department)){
        countDeptWise[uniqueArray.indexOf(val.department)].count++
      }
    })
    this.displayData=countDeptWise
  }
  removeDeptDev(){
    this.clickEvent="removeDeptDev"
    this.displayData=this.candidate_data.filter((val:any)=>{
      return val.department!="Development"
    })
  }
}
