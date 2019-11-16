  <template>
  <div>
  

  <!-- Masthead -->
  <Header></Header>

   <!-- Top pic -->
  <Ask></Ask>

  <!-- Icons Grid -->
  <!-- <Portfolio></Portfolio> -->

  <!-- Image Showcases -->
  <Services></Services>

  <!-- Testimonials -->
  <ClickRegister></ClickRegister>

  <!-- Call to Action -->
  <Explain></Explain>

  <!-- 実績 -->
  <Performance></Performance>

  <!-- 企業の声 -->
  <Voice></Voice>

  <!-- ご利用の流れ -->
  <Flow></Flow>

  <!-- Testimonials -->
  <ClickRegister></ClickRegister>

  <!-- Footer -->
  <Footer></Footer>
  
  </div>
  </template>

<script>
import Header from './Header'
import Ask from './Ask'
import Services from './Services'
import ClickRegister from './ClickRegister'
import Explain from './Explain'
import Performance from './Performance'
import Voice from './Voice'
import Flow from './Flow'
import Footer from './Footer'


export default {
  name: 'app',
  components: {
    Header,
    Ask,
    Services,
    ClickRegister,
    Explain,
    Performance,
    Voice,
    Flow,
    Footer
    //Navigation
  }
}
</script>