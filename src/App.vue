<template>
  <div id="app">
    <Navbar :brand="'EOX'">Test</Navbar>
    <PageContent>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias voluptates magni dolorem, praesentium dolores quo vitae beatae magnam earum minus libero eius, voluptatem, expedita consequatur id? Et sed incidunt enim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, porro. Rem perspiciatis aut ipsa facere quas consequatur, consequuntur illo laudantium in voluptas optio, possimus blanditiis quidem voluptatem quos ipsam adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore aliquam tenetur sunt est repellat rerum et iste, fugiat unde numquam ad tempora eligendi. Officiis a voluptas deserunt expedita totam? lorem
      <br>
      <Logo :height="'30px'"/>
    </PageContent>
    <Footer><div>© 2019 <a href="https://eox.at" target="_blank">EOX IT Services GmbH</a>.</div></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageContent from './components/PageContent.vue'
import Footer from './components/Footer.vue'
import Logo from './components/Logo.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    PageContent,
    Footer,
    Logo,
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Open Sans';
}
</style>
