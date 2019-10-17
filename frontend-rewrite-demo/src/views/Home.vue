<template>
  <div class="home">
    <div class="page-header">
      <h1>Contributors</h1>
      <button @click="getContributors()">get contributors of selected repo</button>
    </div>
    <div class="contributors-div">
      <div v-if="isLoading" class="loading">Making Request...</div>
      <div class="contributors" v-if="!isLoading">
        <transition-group>
          <div class="contributor" v-for="contributor in contributors" :key="contributor.user_id">
            <h2>Contributor ID: {{ contributor.user_id }}</h2>
            <!-- <h3>Total Commits: {{ contributor.commits }}</h3> -->
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      contributors: [],
      isLoading: false
    };
  },
  methods: {
    getContributors() {
      console.log("getting contributors");
      this.contributors = [];
      this.isLoading = true;
      let repo = this.$store.state.selectedRepoOne;

      fetch(
        `http://augur.osshealth.io:5000/api/unstable/repo-groups/${repo.groupId}/repos/${repo.repoId}/contributors`
      )
        .then(res => res.json())
        .then(res => {
          res.forEach(contributor => {
            this.contributors.push(contributor);
          });
        })
        .finally(() => {
          console.log(this.contributors);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
.contributors-div {
  height: 70vh;
  overflow: scroll;
  border-radius: 10px;
  border: 2px solid black;
}

button {
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  background-color: #6666ef;
  color: white;
  box-shadow: 0 0 20px #4444cd inset;
  transition: box-shadow 0.3s ease;
  margin-left: 20px;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 0 20px #8888ff inset;
}

.page-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

h2 {
  font-size: 2rem;
  border-bottom: 2px solid #8888ff;
  padding: 1rem;
}

.loading {
    margin: 2rem;
}
</style>
