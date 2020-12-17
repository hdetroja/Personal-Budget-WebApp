import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JuneService {
  juneCollection!: AngularFirestoreCollection<model>;
  june: Observable<model[]>;
  juneDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.june = this.afs.collection<June>('june').valueChanges();
    this.juneCollection = this.afs.collection('june', ref=> ref.orderBy('value','desc'));

    this.june = this.juneCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getJune(){
    return this.june;
  }
  addJune(june: model){
    this.juneCollection.add(june);
  }
  deleteJune(june: model){
    this.juneDoc = this.afs.doc(`june/${june.id}`);
    this.juneDoc.delete();
  }
  updateJune(june: model){
    this.juneDoc = this.afs.doc(`june/${june.id}`);
    this.juneDoc.update(june);
  }
}
