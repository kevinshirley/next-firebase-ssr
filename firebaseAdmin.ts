import * as firebaseAdmin from "firebase-admin";
const firebaeAdminServiceKey = require('./firebaseAdminServiceAccountKey.json');

if (!firebaeAdminServiceKey) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaeAdminServiceKey),
    databaseURL: `https://next-ssr-8a383-default-rtdb.firebaseio.com`,
  });
}

export { firebaseAdmin };
