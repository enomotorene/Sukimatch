<template>
    <nav class="navbar navbar-light bg-light static-top sk-bg-color">
    <div class="container" v-for="(linkObj, ind) in navList" :key="ind">
        <a class="navbar-brand sk-title-color" href="/">SUKIMATCH</a>
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
    /* font-family: SeasideResort; */
}

nav.sk-bg-color .sk-title-color {
    color: #ffffff;
}

a.sk-btn-reg {
    background-color: #f25458;
    color: #ffffff;
    border-radius: 30px;
    padding: 3px;
    margin-left: 10px;
    text-decoration: none;
}

a.sk-btn-reg:hover {
    background-color: #f25458;
    color: #000;
    border-radius: 30px;
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
</style>