<template>
    <section class="features-icons bg-light text-center">
    <div class="container">
      <div class="row">

        <div class="col-lg-4" v-for="(obj, key) in portfolioJSON" :key="key">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-screen-desktop m-auto text-primary"></i>
            </div>
            <h3>{{ obj.title }}</h3>
            <p class="lead mb-0">{{ obj.caption }}</p>
          </div>
        </div>
        <!-- <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-layers m-auto text-primary"></i>
            </div>
            <h3>Bootstrap 4 Ready</h3>
            <p class="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="icon-check m-auto text-primary"></i>
            </div>
            <h3>Easy to Use</h3>
            <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data: ()=>({
        portfolioJSON: [
            {
                img: '/somthing/random/img.jpg',
                caption: 'This theme will look great on any device, no matter the size!',
                title: 'Full screen'
            },
            {
                img: '/somthing/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic design'
            },
            {
                img: '/somthing/random/img.jpg',
                caption: 'Explore',
                title: 'Graphic design'
            }
        ] 
    })
}
</script>

<style>

</style>