<template>
  <div class="nav-bar">
        <router-link v-for="link in links" :key="link.route" :to="link.route" class="link-button">
            {{ link.text }}
        </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          route: "home",
          text: "Home"
        },
        {
          route: "other-info",
          text: "Other Info"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  overflow: hidden;
  float: left;
  background-color: #fdfdfd;
  height: 100vh;
  border-right: 1px solid black;
  box-shadow: 0 0 40px 0 grey;
  position: relative;
  z-index: 2;
}

.link-button {
  width: 100%;
  text-align: center;
  background-color: white;
  text-decoration: none;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid black;
}

.router-link-active {
    background-color: lightgrey;
}

.link-button:hover {
  cursor: pointer;
  background-color: lightgrey;
}
</style>