<template>
  <div id="topBar">
  <b-navbar type="dark" class="mkpNav" fixed="top">
    <a href="" @click="$router.push('/')">
      <img src="../assets/MKPMN_logo_hor.png" alt="small logo" id="leftLogo" class="navImages"/>
    </a>
    <LeftMenu/>
  </b-navbar>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu"
export default {
  name: "TopBar",
  components: {LeftMenu}
}
</script>

<style scoped>
.mkpNav {
  height:9vh;
  background-color: #e7f5f5;
}

.navImages {
  float: left;
  max-width:25%;
  height:auto;
  max-height:100%;
}

#topBar {
  margin-bottom: 8vh;
}
</style>
