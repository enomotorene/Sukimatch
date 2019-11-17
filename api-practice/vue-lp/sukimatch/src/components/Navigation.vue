<template>
    <nav class="navbar navbar-light bg-light static-top sk-bg-color">
    <div class="container" v-for="(linkObj, ind) in navList" :key="ind">
        <a class="navbar-brand sk-title-color" href="/">Sukimatch</a>
        <div>
        <a href="/Signin" class="sk-btn-sign"><span>Sign in</span></a>
        <a href="/Register" class="sk-btn-reg"><span>無料会員登録</span></a>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    data: () => ({
        navList: [
            {
            name: 'Register',
            path: '/Register'
            }
        ]
    })
}
</script>

<style>
nav.sk-bg-color{
    background-color: #f18b02;
}

nav.sk-bg-color .sk-title-color {
    color: #ffffff;
}

a.sk-btn-reg {
    background-color: #f25458;
    color: #ffffff;
    border-radius: 30px;
    padding: 5px;
    margin-left: 20px;
    text-decoration: none;
}

a.sk-btn-reg:hover {
    background-color: #f25458;
    color: #000;
    border-radius: 30px;
    padding: 5px;
    margin-left: 20px;
    text-decoration: none;
}

a.sk-btn-sign {
    text-decoration: none;
    color: #000;
}

a.sk-btn-sign:hover {
    text-decoration: none;
    color: #ffffff;
}

.button {
  display: inline-block;
  /* border-radius: 4px; */
  background-color: #ffffff;
  border: none;
  color: #000000;
  text-align: center;
  font-size: 18px;
  padding: 8px 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: initial;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


</style>