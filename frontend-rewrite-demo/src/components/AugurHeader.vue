<template>
    <div class="augur-header">
        <h1>Augur</h1>
        <repo-selector></repo-selector>
    </div>
</template>

<script>
import RepoSelector from './RepoSelector.vue';

export default {
    name: 'AugurHeader', 
    components: {
        RepoSelector
    }
}
</script>

<style scoped>
    .augur-header {
        padding-left: 2rem;
        background-color: #fdfdfd;
        border-bottom: 1px solid black;
        box-shadow: 0 0 40px 0 grey;
        position: relative;
        z-index: 3;
    }
</style>