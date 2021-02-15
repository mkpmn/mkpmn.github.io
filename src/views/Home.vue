<template>
  <div id="home">
    <div id="navDiv">
      <TopBar/>
    </div>
    <b-container>
      <img src="../assets/memes23b-RobertMoore-archtypal.jpg" alt="Robert Moore archetype image">
    </b-container>
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
#navDiv{
  margin-bottom: 2%;
}
</style>
