<template>
  <div id="home">
      <TopBar/>
    <div class="parallax-1 parallax-all">
      <p style="font-size: xx-large;">MKPs mission: text here </p>
    </div>
    <div class="parallax-2 parallax-all">
      <p class="dividerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec orci a lorem lobortis malesuada in eget diam. Aliquam ut purus finibus, mattis quam non, rutrum urna. Phasellus feugiat massa at convallis pharetra. Duis vel lorem enim. Nullam eleifend a eros quis accumsan. Nam quis consequat elit, at iaculis dolor. Phasellus ac scelerisque urna, non tincidunt lorem. Suspendisse non ornare leo. Etiam in ultricies leo. Duis faucibus aliquet magna eu facilisis. Nulla a convallis eros, sit amet consequat nibh. Mauris nulla elit, vehicula a consequat vitae, commodo sit amet ipsum. Donec luctus a lectus at consectetur. In quis ornare arcu. Nunc mollis tristique ex, nec lacinia tortor tempus id. Aliquam finibus iaculis risus vitae posuere. </p>
    </div>
    <div class="parallax-3 parallax-all">
      <p class="dividerText">MN Community Mission: text here </p>
    </div>
    <div class="parallax-4 parallax-all">
      <b-form>
        sign up form here
        <b-checkbox aria-label="dummy checkbox">Do something?</b-checkbox>
      </b-form>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar"

export default {
name: "Home",
  components: {TopBar}
}
</script>

<style scoped>

.parallax-all {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  /*background-size: cover;*/

  min-height: 100%;
  height: 100vh;
}

.parallax-1 {
  background-image: url("../assets/memes23b-RobertMoore-archtypal.jpg");
}

.parallax-2 {
  background-image: url("../assets/memes52-MKP-is-About-Presence.jpg");
}

.parallax-3 {
  background-image: url("../assets/memes52-MKP-is-About-vision.jpg");
}

.parallax-4 {
  background-image: url("../assets/memes37-memes-compassion.jpg");
}

.dividerText {
  background-color: #2c3e50;
  color: #e5f3f6;
  font-size: x-large;
}

#home {
  /*height: 100%;*/
}
</style>
