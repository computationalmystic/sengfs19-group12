<template>
  <div class="dashboard">
    <augur-header></augur-header>
    <div class="row">
      <nav-bar></nav-bar>
      <div class="viewport">
        <!-- <repo-selector></repo-selector> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AugurHeader from "../components/AugurHeader.vue";
import RepoSelector from "../components/RepoSelector.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Dashboard",
  components: {
    AugurHeader,
    RepoSelector,
    NavBar
  }
};
</script>

<style>
* {
  font-family: "Open Sans";
}

h1 {
  font-size: 4rem;
  margin: 0;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
}
</style>

<style scoped>
.dashboard {
  background-color: #fdfdfd;
  width: 100%;
}

.row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.viewport {
  padding: 2rem;
  width: 80%;
}
</style>