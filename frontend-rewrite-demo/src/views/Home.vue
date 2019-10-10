<template>
    <div class="home">
        <h1>Home</h1>
        <button @click="getContributors()">get contributors of selected repo</button>
    </div>
</template>

<script>
export default {
    name: 'Home', 
    methods: {
        getContributors() {
            console.log('getting contributors');
            let repo = this.$store.state.selectedRepoOne;
            fetch(`http://localhost:5000/api/unstable/repo-groups/${repo.groupId}/repos/${repo.repoId}/contributors`)
                .then(res => res.json())
                .then(res => console.log(res));
        }
    }
}
</script>

<style scoped>

</style>