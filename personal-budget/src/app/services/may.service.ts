import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MayService {
  mayCollection!: AngularFirestoreCollection<model>;
  may: Observable<model[]>;
  mayDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.may = this.afs.collection<May>('may').valueChanges();
    this.mayCollection = this.afs.collection('may', ref=> ref.orderBy('value','desc'));

    this.may = this.mayCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getMay(){
    return this.may;
  }
  addMay(may: model){
    this.mayCollection.add(may);
  }
  deleteMay(may: model){
    this.mayDoc = this.afs.doc(`may/${may.id}`);
    this.mayDoc.delete();
  }
  updateMay(may: model){
    this.mayDoc = this.afs.doc(`may/${may.id}`);
    this.mayDoc.update(may);
  }
}
