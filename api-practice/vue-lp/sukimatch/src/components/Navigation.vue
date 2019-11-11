<template>
    <nav class="navbar navbar-light bg-light static-top sk-bg-color">
    <div class="container" v-for="(linkObj, ind) in navList" :key="ind">
        <a class="navbar-brand sk-title-color" href="/">Sukimatch</a>
    
    <!-- register button -->
            <!-- <a class="btn btn-primary"
         :href="linkObj.path"
         v-if="linkObj.path.indexOf('#') === 0"
         >{{ linkObj.name}}</a> -->
         <!-- <router-link class="btn btn-primary"
            v-else 
            :to="linkObj.path" 
            >{{ linkObj.name }}
         </router-link> -->
       
      
      
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

</style>