<template>
  <b-navbar type="dark" class="mkpNav">
    <a href="" @click="$router.push('/')">
      <img src="../assets/MKPUSA_logo_hor.png" alt="small logo" id="leftLogo" class="navImages"/>
    </a>
    <LeftMenu/>
  </b-navbar>
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
  /*width:100vw;*/
  height:2vh;
  background-color: #e7f5f5;
}

.navImages {
  float: left;
  max-width:25%;
  height:auto;
  max-height:100%;
}
</style>
