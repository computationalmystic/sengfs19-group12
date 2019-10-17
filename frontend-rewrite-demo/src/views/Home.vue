<template>
    <div class="home">
        <h1>Home</h1>
        <button @click="getContributors()">get contributors of selected repo</button>
    </div>
</template>

<script>
export default {
    name: 'Home', 
    data: {
        contributors: []
    }, 
    methods: {
        getContributors() {
            console.log('getting contributors');
            let repo = this.$store.state.selectedRepoOne;
            fetch(`http://augur.osshealth.io:5000/api/unstable/repo-groups/${repo.groupId}/repos/${repo.repoId}/contributors`)
                .then(res => res.json())
                .then(res => {
                    res.forEach(contributor => {
                        this.contributors.push(contributor);
                    });
                });
        }
    }
}
</script>

<style scoped>

</style>
