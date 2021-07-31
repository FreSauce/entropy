import { useState, useEffect } from 'react';
import { firestore as projectFirestore } from '../firebase';

const useUserposts = (userid) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection('post').where("uid","==",userid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [userid]);

  return { docs };
}

export default useUserposts;