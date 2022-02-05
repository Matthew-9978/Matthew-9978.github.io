import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";

//Using singleton breaks instantiating messaging()
// App firebase = FirebaseWeb.instance.app;


if (!firebase.apps.length) {
   firebase.initializeApp({
//     apiKey: "AIzaSyB_oAfpc6kwCqAxKucJF-8kMLARJ4cMjuE",
//     authDomain: "darmanito-280412.firebaseapp.com",
//     databaseURL: "https://darmanito-280412.firebaseio.com",
//     projectId: "darmanito-280412",
//     storageBucket: "darmanito-280412.appspot.com",
//     messagingSenderId: "434347207352",
//     appId: "1:434347207352:web:fb16b583a190eae960a24d",
//     measurementId: "G-VZY79JF6TP"

     apiKey: "AIzaSyD7xiOOJIS91tXfZawIa94etRTSaWBnx9g",
     authDomain: "darmanito-d0e42.firebaseapp.com",
     projectId: "darmanito-d0e42"
     storageBucket: "darmanito-d0e42.appspot.com",
     messagingSenderId: "486335504381",
     appId: "1:486335504381:web:d70f826a28c2c4dd430394",
     measurementId: "G-6EWN1HKQFH"
   });
}


const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});