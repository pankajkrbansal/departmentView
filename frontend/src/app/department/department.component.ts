import { Component, OnInit } from '@angular/core';
import { ViewServiceService } from '../view-service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})


export class DepartmentComponent implements OnInit {

  constructor(private service:ViewServiceService,private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort) sort: MatSort;
  
errorMsg:String = null;
dataSource;
  ngOnInit(): void {
    this.service.getAlldepartments().subscribe((result)=>{
      this.dataSource = result;
      this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    },(error)=>{
      this.errorMsg = error.error.message;
    });
  }
  displayedCol : String[] = ['deptId','deptName','deptRoles'];
      
}


