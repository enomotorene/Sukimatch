<template>
  
  <section class="page-section" id="services">
    <div class="container">
      <div class="signup">
    <h2 class="sk-reg-title">サインアップ</h2>
    <!-- 登録フォーム -->
    <label class="fieldname" for="email_verification_key_email">メールアドレスで登録する</label><br>
    <input type="email" placeholder="email" v-model="email" ><br>
    <p>Your email is: {{ email }}</p>

    <!-- <h3>One way binding form (Data object of Vue.js -> input form)</h3>
    <input type="text" placeholder="test" v-bind:value="test" >
    <p>{{ test }}</p> -->
    <input type="password" placeholder="password" v-model="password">
    <button class="btn-register" @click="signUp">登録</button>

    <hr>
    <!-- サインインへの遷移ボタン -->
    <p>
      アカウントをすでにお持ちの方
      <router-link to="/signin">sign in now</router-link>
    </p>
  </div>
</div>

    <hr>
<!-- 
  <div class="thirdparty">
    <strong>他のアカウントで登録する</strong>
    <ul class="mixin-reset">
      <li>
        <a class="cw-social_button cw-social_button_sm cw-social_button_fb" rel="nofollow" href="/auth/facebook"><span class="sns_icon"></span><span class="cw-social_button_label">Facebookではじめる</span></a>
      </li>
      <li>
        <a class="cw-social_button cw-social_button_sm cw-social_button_yj" rel="nofollow" href="/auth/yahoojp"><span class="sns_icon"></span><span class="cw-social_button_label">Yahoo!IDではじめる</span></a>
      </li>
      <li>
        <a class="cw-social_button cw-social_button_sm cw-social_button_go" rel="nofollow" href="/auth/google_oauth2"><span class="sns_icon"></span><span class="cw-social_button_label">Googleではじめる</span></a>
      </li>
    </ul>
  </div> -->

  <p class="please_agree">
    ※<a href="/" target="_blank">利用規約</a>、<a href="/" target="_blank">個人情報</a>の取り扱いについてを確認、同意のうえボタンをクリックしてください。
  </p>

  </section>
</template>

<script>
import firebase from "firebase"; // firebaseのインポート
export default {
  name: "Singup",
  data() {
    return {
      email: "",
      password: "",
      test: "test from data object of Vue.js"
    };
  },
  methods: {
    // singUpボタンが押されたときに実行されるfunction
    signUp: function() {
      firebase
        .auth()
        // May 7にメソッド名変わった https://firebase.google.com/support/release-notes/js#version_600_-_may_7_2019
        .createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          // 成功時
          alert("Create account: " + user.user.email);
        })
        .catch(error => {
          // 失敗時
          alert(error.message);
        });
    }
  }
};
</script>

<style>
/*
.users-new_email div.new_email div.thirdparty ul{
    display: inline-block;
    text-align: left;
    margin-left: 17px;
    letter-spacing: -.40em;
    width: 564px;
}

.users-new_email div.new_email {
    padding: 30px 30px;
    width: 900px;
    margin: auto;
}

.cw-well {
min-height: 20px;
    padding: 12px;
    margin-bottom: 20px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 3px;
}

ul {
    display: inline-block;
    text-align: left;
    margin-left: 17px;
    width: 564px;
}


ul.mixin-reset {
    margin: 0;
    padding: 0;
    list-style: none;
}

.cw-social_button_sm {
    height: 32px;
    padding: 4.5px 4.5px;
    font-size: 12px;
    line-height: 22px;
}

.cw-social_button_go {
    color: #fff;
    text-shadow: 0 -1px 0px rgba(0,0,0,0.3);
    background-color: #ad4a32;
    background-image: linear-gradient(to bottom, #b2553f, #a73e25);
    border: 1px solid #a34f2c;
    border-bottom-color: #7b3c21;
}

.cw-social_button {
    position: relative;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    height: 48px;
    padding: 7px 7px;
    font-size: 15px;
    line-height: 33px;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.25), 0 0 1px rgba(0,0,0,0.15);
}

.cw-social_button_yj {
    color: #333;
    text-shadow: 0 -1px 0px rgba(0,0,0,0.3);
    background-color: #ebeff9;
    background-image: linear-gradient(to bottom, #ecf0f9, #e9eef8);
    border: 1px solid #cccccc;
    border-bottom-color: #b3b3b3;
    text-shadow: 0 1px 0 rgba(255,255,255,0.15);
}

.cw-social_button_fb {
    color: #fff;
    text-shadow: 0 -1px 0px rgba(0,0,0,0.3);
    background-color: #47639e;
    background-image: linear-gradient(to bottom, #536da4, #3b5998);
    border: 1px solid #2f4588;
    border-bottom-color: #223262;
}*/

.sk-reg-title {
    margin-top: 20px;
}

.btn-register {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
}

.btn-register:hover {background-color: #e7e7e7;}

input {
    color: gray;
}

</style>