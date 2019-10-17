<template>
  <div class="repo-selector">
    <select name="repo-groups" @change="changeRepoGroup($event)">
      <option
        v-for="repoGroup in repoGroups"
        :key="repoGroup.repo_group_id"
        :value="repoGroup.repo_group_id"
      >{{repoGroup.rg_name}}</option>
    </select>

    <select name="repos" @change="changeRepo($event)">
      <option v-for="repo in repos" :key="repo.repo_id" :value="repo.repo_id">{{repo.repo_name}}</option>
    </select>

    <button @click="commitSelectedRepo()">Select Repo</button>
  </div>
</template>

<script>
export default {
  name: "RepoSelector",
  data() {
    return {
      repoGroups: [],
      selectedRepoGroupId: null, 
      repos: [],
      selectedRepoId: null
    };
  },
  mounted() {
    console.log("lets get all the repo groups");
    fetch("http://augur.osshealth.io:5000/api/unstable/repo-groups")
      .then(res => res.json())
      .then(res => {
        console.dir(res);
        console.log(typeof res[0]);
        this.$store.commit("setRepoGroups", res);
        this.repoGroups = res;
      });
  },
  methods: {
    changeRepoGroup(e) {
      console.dir(e.target.value);
      fetch(
        `http://augur.osshealth.io:5000/api/unstable/repo-groups/${e.target.value}/repos`
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.repos = res;
          this.selectedRepoGroupId = e.target.value;
        });
    }, 
    changeRepo(e) {
        console.log(e.target.value);
        this.selectedRepoId = e.target.value;
    }, 
    commitSelectedRepo() {
        console.log('changing selectedRepoOne in vuex store');
        this.$store.commit('setSelectedRepoOne', {groupId: this.selectedRepoGroupId, repoId: this.selectedRepoId});
    }
  }
};
</script>

<style scoped>
.repo-selector {
}
</style>
