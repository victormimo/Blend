import firebase from "firebase";

export const updateUserSeat = (path, uid) => {
  firebase.database().ref(path).update({ userId: uid });
};
