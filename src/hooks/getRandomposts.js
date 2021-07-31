import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("0123456789", 10);
import { firestore } from "../firebase";

const getRandomPosts = async (count) => {
    const docs = [];
    // while (docs.length < -2) {
    let random = Number(nanoid());
    // console.log(random);
    // console.log(typeof(random));
    await firestore
        .collection("post")
        .where("random", ">=", random)
        // .orderBy("random", "desc")
        .limit(count)
        .get()
        .then((doc) => {
            doc.forEach((doc) => {
                if (doc.exists) {
                    docs.push({ ...doc.data(), id: doc.id });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
        });
    count -= docs.length;
    await firestore
        .collection("post")
        .where("random", "<=", random)
        // .orderBy("random", "desc")
        .limit(count)
        .get()
        .then((doc) => {
            doc.forEach((doc) => {
                if (doc.exists) {
                    docs.push({ ...doc.data(), id: doc.id });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
        });
    // await firestore
    //     .collection("post")
    //     // .where("random", "<=", random)
    //     // .orderBy("random", "desc")
    //     // .limit(1)
    //     .get().then(doc => {
    //         doc.forEach(
    //             (doc) => {
    //                 if (doc.exists) {
    //                     docs.push({ ...doc.data(), id: doc.id });
    //                 } else {
    //                     // doc.data() will be undefined in this case
    //                     console.log("No such document!");
    //                 }
    //             });
    //     });
    // }
    return docs;
};
export { getRandomPosts };
