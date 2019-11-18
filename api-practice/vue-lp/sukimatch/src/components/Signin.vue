<template>
  <div id="signin">
    <h2 class="sk-reg-title">サインイン</h2>

    <!-- emailとpasswordの入力欄 -->
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="Password" v-model="password"><br>
    <button class="btn-register" @click="signIn">Sign in</button>

    <hr>
    <!-- サインアップページ遷移ボタン -->
    <p>
      アカウントをお持ちではない方
      <router-link to="/Register">新規作成</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase"; // firebaseのインポート

export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // signinボタンを押したときに実行されるfunction
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインが成功した場合にメインページに遷移させる
          alert("success : " + user.user.email);
          this.$router.push("/");
        })
        .catch(error => {
          // ログインに失敗した場合
          alert(error.message);
        });
    }
  }
};
</script>

<style>
#signin {
  margin: 20px;
}

.sk-reg-title {
    margin-top: 20px;
}

.btn-register {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  margin-top: 10px;
}

.btn-register:hover {background-color: #e7e7e7;}

input {
  margin: 10px;
}
</style>
