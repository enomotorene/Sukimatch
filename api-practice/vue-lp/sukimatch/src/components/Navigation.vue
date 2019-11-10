<template>
    <nav class="navbar navbar-light bg-light static-top">
    <div class="container" v-for="(linkObj, ind) in navList" :key="ind">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
    
            <a class="btn btn-primary"
         :href="linkObj.path"
         v-if="linkObj.path.indexOf('#') === 0"
         >{{ linkObj.name}}</a>
         <router-link class="btn btn-primary"
            v-else 
            :to="linkObj.path" 
            >{{ linkObj.name }}
         </router-link>
       
      
      
    </div>
  </nav>
</template>

<script>
export default {
    data: () => ({
        navList: [
            // {
            // name: 'Services',
            // path: '#services'
            // },
            {
            name: 'Register',
            path: '/Register'
            }
        ]
    })
}
</script>

<style>

</style>