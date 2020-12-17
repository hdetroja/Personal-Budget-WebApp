import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OctoberService {
  octoberCollection!: AngularFirestoreCollection<model>;
  october: Observable<model[]>;
  octoberDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.october = this.afs.collection<October>('october').valueChanges();
    this.octoberCollection = this.afs.collection('october', ref=> ref.orderBy('value','desc'));

    this.october = this.octoberCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getOctober(){
    return this.october;
  }
  addOctober(october: model){
    this.octoberCollection.add(october);
  }
  deleteOctober(october: model){
    this.octoberDoc = this.afs.doc(`october/${october.id}`);
    this.octoberDoc.delete();
  }
  updateOctober(october: model){
    this.octoberDoc = this.afs.doc(`october/${october.id}`);
    this.octoberDoc.update(october);
  }
}
