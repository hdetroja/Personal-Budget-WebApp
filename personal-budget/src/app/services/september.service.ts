import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeptemberService {
  septemberCollection!: AngularFirestoreCollection<model>;
  september: Observable<model[]>;
  septemberDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.september = this.afs.collection<September>('september').valueChanges();
    this.septemberCollection = this.afs.collection('september', ref=> ref.orderBy('value','desc'));

    this.september = this.septemberCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getSeptember(){
    return this.september;
  }
  addSeptember(september: model){
    this.septemberCollection.add(september);
  }
  deleteSeptember(september: model){
    this.septemberDoc = this.afs.doc(`september/${september.id}`);
    this.septemberDoc.delete();
  }
  updateSeptember(september: model){
    this.septemberDoc = this.afs.doc(`september/${september.id}`);
    this.septemberDoc.update(september);
  }
}
