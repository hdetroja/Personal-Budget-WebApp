import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DecemberService {
  decemberCollection!: AngularFirestoreCollection<model>;
  december: Observable<model[]>;
  decemberDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.december = this.afs.collection<December>('december').valueChanges();
    this.decemberCollection = this.afs.collection('december', ref=> ref.orderBy('value','desc'));

    this.december = this.decemberCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getDecember(){
    return this.december;
  }
  addDecember(december: model){
    this.decemberCollection.add(december);
  }
  deleteDecember(december: model){
    this.decemberDoc = this.afs.doc(`december/${december.id}`);
    this.decemberDoc.delete();
  }
  updateDecember(december: model){
    this.decemberDoc = this.afs.doc(`december/${december.id}`);
    this.decemberDoc.update(december);
  }
}
