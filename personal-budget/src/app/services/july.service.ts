import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JulyService {
  julyCollection!: AngularFirestoreCollection<model>;
  july: Observable<model[]>;
  julyDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.july = this.afs.collection<July>('july').valueChanges();
    this.julyCollection = this.afs.collection('july', ref=> ref.orderBy('value','desc'));

    this.july = this.julyCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getJuly(){
    return this.july;
  }
  addJuly(july: model){
    this.julyCollection.add(july);
  }
  deleteJuly(july: model){
    this.julyDoc = this.afs.doc(`july/${july.id}`);
    this.julyDoc.delete();
  }
  updateJuly(july: model){
    this.julyDoc = this.afs.doc(`july/${july.id}`);
    this.julyDoc.update(july);
  }
}
