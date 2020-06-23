import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/service/alldata.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  constructor(public alldata:AlldataService,public dialog: MatDialog,private router:Router) { }

  ngOnInit() {
  }
  choice(){
    this.router.navigate(['one']);
  }
}
