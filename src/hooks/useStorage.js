import { useState, useEffect } from "react";
import { storage, firestore, timestamp } from "../firebase";
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('0123456789', 10)
import { useAuth } from "../contexts/AuthContext";

const useStorage = (title, file) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    // references
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection("post");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const random = Number(nanoid())
        const uid = currentUser.uid;
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ title, uid, url, createdAt, random });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;