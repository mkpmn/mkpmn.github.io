<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown right id="navMenu">
      <template slot="button-content">
        <img src="../assets/127px-Hamburger_icon.svg.png" alt="hamburger menu left side" class="navImages"/>
      </template>

      <b-dropdown-item href="#mnMission">About The MN MKP Community</b-dropdown-item>
      <b-dropdown-item>MN Community Calendar</b-dropdown-item>
      <b-dropdown-item href="#mnRequestForm">Request a conversation</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
export default {
name: "LeftMenu"
}
</script>

<style scoped>

.navImages {
  max-width:25%;
  height:auto;
  max-height:100%;
}

</style>
