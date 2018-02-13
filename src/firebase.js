/**
 * Created by shengliu on 10/31/17.
*/
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjZ8wP0vvhq3spvC8XZL3pnoCtrD7kmCE",
    authDomain: "personal-page-641b8.firebaseapp.com",
    databaseURL: "https://personal-page-641b8.firebaseio.com",
    projectId: "personal-page-641b8",
    storageBucket: "personal-page-641b8.appspot.com",
    messagingSenderId: "193851124509"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;


