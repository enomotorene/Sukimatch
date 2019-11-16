import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import './assets/css/bootstrap.css'
import firebase from 'firebase'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBebh4YY8YHyIJg97tHe7cCql-Jn2ezH3M",
    authDomain: "sukimatch-f887f.firebaseapp.com",
    databaseURL: "https://sukimatch-f887f.firebaseio.com",
    projectId: "sukimatch-f887f",
    storageBucket: "sukimatch-f887f.appspot.com",
    messagingSenderId: "717417416241",
    appId: "1:717417416241:web:a142cc4d27107ce45cf710"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
