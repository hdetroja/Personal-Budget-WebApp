import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AugustService {
  augustCollection!: AngularFirestoreCollection<model>;
  august: Observable<model[]>;
  augustDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.august = this.afs.collection<August>('august').valueChanges();
    this.augustCollection = this.afs.collection('august', ref=> ref.orderBy('value','desc'));

    this.august = this.augustCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getAugust(){
    return this.august;
  }
  addAugust(august: model){
    this.augustCollection.add(august);
  }
  deleteAugust(august: model){
    this.augustDoc = this.afs.doc(`august/${august.id}`);
    this.augustDoc.delete();
  }
  updateAugust(august: model){
    this.augustDoc = this.afs.doc(`august/${august.id}`);
    this.augustDoc.update(august);
  }
}
