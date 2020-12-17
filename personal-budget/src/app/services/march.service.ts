import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarchService {
  marchCollection!: AngularFirestoreCollection<model>;
  march: Observable<model[]>;
  marchDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.march = this.afs.collection<March>('march').valueChanges();
    this.marchCollection = this.afs.collection('march', ref=> ref.orderBy('value','desc'));

    this.march = this.marchCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getMarch(){
    return this.march;
  }
  addMarch(march: model){
    this.marchCollection.add(march);
  }
  deleteMarch(march: model){
    this.marchDoc = this.afs.doc(`march/${march.id}`);
    this.marchDoc.delete();
  }
  updateMarch(march: model){
    this.marchDoc = this.afs.doc(`march/${march.id}`);
    this.marchDoc.update(march);
  }
}
