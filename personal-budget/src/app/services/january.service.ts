import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JanuaryService {
  januaryCollection!: AngularFirestoreCollection<model>;
  january: Observable<model[]>;
  januaryDoc!: AngularFirestoreDocument<model>;

  constructor(public afs: AngularFirestore) {
    //this.january = this.afs.collection<January>('january').valueChanges();
    this.januaryCollection = this.afs.collection('january', ref=> ref.orderBy('value','desc'));
    this.january = this.januaryCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getJanuary(){
    return this.january;
  }
  addJanuary(january: model){
    this.januaryCollection.add(january);
  }
  deleteJanuary(january: model){
    this.januaryDoc = this.afs.doc(`january/${january.id}`);
    this.januaryDoc.delete();
  }
  updateJanuary(january: model){
    this.januaryDoc = this.afs.doc(`january/${january.id}`);
    this.januaryDoc.update(january);
  }
}
