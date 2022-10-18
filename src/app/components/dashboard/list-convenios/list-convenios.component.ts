import { FirestoreService } from './../../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-convenios',
  templateUrl: './list-convenios.component.html',
  styleUrls: ['./list-convenios.component.css']
})
export class ListConveniosComponent implements OnInit {


 convenios: any[] = [];


  constructor( private firestore:FirestoreService) { }



  ngOnInit(): void {
    this.firestore.obtenerConvenios().subscribe((data)=>{
      this.convenios = [];
      data.forEach((element: any) => {
        this.convenios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.convenios);
    })
  }

}
