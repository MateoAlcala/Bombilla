import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:AngularFirestore) { }
  obtenerConvenios():Observable<any>{
    return this.firestore.collection('ListaConvenios').snapshotChanges();
  }
  /* obtenerConvenio(id:string)Observable<any>{
    return this.firestore.collection(this.firestore ,'ListaConvenios').doc(id).snapshotChanges();
  } */
}

