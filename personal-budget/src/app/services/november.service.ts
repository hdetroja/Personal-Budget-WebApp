import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { model } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NovemberService {
  novemberCollection!: AngularFirestoreCollection<model>;
  november: Observable<model[]>;
  novemberDoc!: AngularFirestoreDocument<model>;


  constructor(public afs: AngularFirestore) {
    //this.november = this.afs.collection<November>('november').valueChanges();
    this.novemberCollection = this.afs.collection('november', ref=> ref.orderBy('value','desc'));

    this.november = this.novemberCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as model;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getNovember(){
    return this.november;
  }
  addNovember(november: model){
    this.novemberCollection.add(november);
  }
  deleteNovember(november: model){
    this.novemberDoc = this.afs.doc(`november/${november.id}`);
    this.novemberDoc.delete();
  }
  updateNovember(november: model){
    this.novemberDoc = this.afs.doc(`november/${november.id}`);
    this.novemberDoc.update(november);
  }
}
