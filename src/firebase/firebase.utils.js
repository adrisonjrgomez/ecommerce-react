import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from "./config";

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Using async await
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

// Using promises
export const createUserProfileDocumentPromise = (
  { uid, displayName, email },
  additionalData
) => {
  const reference = firestore.doc(`users/${uid}`);
  reference
    .get()
    .then(snapshot =>
      snapshot.exists
        ? snapshot
        : reference.set({
            displayName,
            email,
            createdAt: new Date(),
            ...additionalData
          })
    )
    .catch(error => console.log("Error Creating User", error.message));
  return reference;
};

//Using promises and using ternary operetor you need to call ref to apply this function
export const createUserProfileDocumentPromiseTernary = (
  { uid, displayName, email },
  additionalData
) =>
  !uid
    ? null
    : firestore
        .doc(`users/${uid}`)
        .get()
        .then(response =>
          response.exists
            ? response
            : firestore.doc(`users/${uid}`).set({
                displayName,
                email,
                createdAt: new Date(),
                ...additionalData
              })
        )
        .then(resp => resp.ref)
        .catch(error => console.log("Error creating user", error.message));

export const createCollectionsAndListItems = (collectionsKey, objectsToAdd) => {
  const collectionRef = firestore.collection(`/${collectionsKey}`);
  const batch = firestore.batch();
  console.log(objectsToAdd);
  objectsToAdd.forEach(({ title, items }) =>
    batch.set(collectionRef.doc(), { title, items })
  );
  batch.commit().then(response => console.log(response));
};

export const convertCollectionSnapshopToMap = collections => {
  const transfromedData = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });
  return transfromedData.reduce((accumulator, currentItem) => {
    accumulator[currentItem.title.toLowerCase()] = currentItem;
    return accumulator;
  }, {});
};

export default firebase;
