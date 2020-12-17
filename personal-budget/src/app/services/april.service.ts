import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AprilService {
  aprilCollection!: AngularFirestoreCollection<model>;
  april: Observable<model[]>;
  aprilDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.april = this.afs.collection<April>('april').valueChanges();
    this.aprilCollection = this.afs.collection('april', ref=> ref.orderBy('value','desc'));

    this.april = this.aprilCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getApril(){
    return this.april;
  }
  addApril(april: model){
    this.aprilCollection.add(april);
  }
  deleteApril(april: model){
    this.aprilDoc = this.afs.doc(`april/${april.id}`);
    this.aprilDoc.delete();
  }
  updateApril(april: model){
    this.aprilDoc = this.afs.doc(`april/${april.id}`);
    this.aprilDoc.update(april);
  }
}
