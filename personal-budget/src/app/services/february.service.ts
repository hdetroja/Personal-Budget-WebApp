import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FebruaryService {
  februaryCollection!: AngularFirestoreCollection<model>;
  february: Observable<model[]>;
  februaryDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.february = this.afs.collection<February>('february').valueChanges();
    this.februaryCollection = this.afs.collection('february', ref=> ref.orderBy('value','desc'));

    this.february = this.februaryCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getFebruary(){
    return this.february;
  }
  addFebruary(february: model){
    this.februaryCollection.add(february);
  }
  deleteFebruary(february: model){
    this.februaryDoc = this.afs.doc(`february/${february.id}`);
    this.februaryDoc.delete();
  }
  updateFebruary(february: model){
    this.februaryDoc = this.afs.doc(`february/${february.id}`);
    this.februaryDoc.update(february);
  }
}
