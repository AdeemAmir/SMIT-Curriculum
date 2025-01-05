 /*************************************************
Code by Adeem Amir
*************************************************/
function dispMd(...a) {
  const x = a.join(' ');
  document.getElementById("output").innerHTML = x;
  document.getElementById("output").classList.add('active');
}

function dispMdx(...a) {
  const x = a.join(' ');
  document.getElementById("output").innerHTML += x;
  document.getElementById("output").classList.add('active');
}

document.getElementById('backButton').addEventListener('click', () => {window.history.back();});
document.getElementById('homeButton').addEventListener('click', () => {window.location.href = 'https://adeemamir.github.io/SMIT-Curriculum';});

 import {xpCol} from "../CommonJS/manage.mjs"
 import {initializeApp} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import {getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithPopup, 
  GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 // https://firebase.google.com/docs/web/setup#available-libraries

 let auth;
 let g_btn = document.getElementById("g_btn");
 let reg_btn = document.getElementById("reg_btn");
 let login_btn = document.getElementById("login_btn");

 const provider = new GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


async function init() {
    const res = await fetch('files/data');
    const z = await res.json();
    let x;
    z.apiKey = await xpCol(2, 2, "../CommonJS/cBasics.dll");
    x = initializeApp(z);
    auth = getAuth(x);
    auth.languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // auth.useDeviceLanguage();
}
init();

reg_btn.addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.getElementById("signup-email");
    let password = document.getElementById("signup-password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          dispMdx(`\nSent Email${auth.currentUser}`);
        });

      const user = userCredential.user;
      dispMd(`User:${user}\nSigned Up`);
    })
    .catch((err) => {
      dispMd(`Error: ${err}\nError Code: ${err.code}\nError Message ${err.message}`);
    });

})

login_btn.addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password");

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    dispMd(`User:${user}\nSigned In`)
  })
  .catch((err) => {
    dispMd(`Error: ${err}\nError Code: ${err.cd}\nError Message ${err.msg}`);
  });
})

g_btn.addEventListener("click", function(event) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      dispMd(`Logged in: ${user}\nToken: ${token}`);
      // IdP data available using getAdditionalUserInfo(result)
    }).catch((err) => {
      const email = err.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(err);
      dispMd(`Error: ${err}\nError Code: ${err.code}\nError Message ${err.message}\nRes: ${email},\nCred: ${credential}`);
    });
  });

/*
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const auth = getAuth();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

*/