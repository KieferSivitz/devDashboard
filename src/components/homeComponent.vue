<template>
    <div class="componentContainer"> 
        <gridComponent :my-layout="savelayout"/>
        <div>
            <h1>Testing - Master</h1>
            <a href="/404">Test</a>
        </div>
    </div>
</template>

<script>
import gridComponent from './gridComponent'

export default {
    name: 'homeComponent',
    props: ['game', 'twitchCategory'],
    components: {
        gridComponent
    },
    data () {
        this.$store.commit('storeCurrentGame', {
            game: this.game,
            twitchCategory: this.twitchCategory
        })
        return {
            msg: 'Welcome to your Content Homepage!',
            savelayout: this.$store.state.gridLayout
        }
    }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body {
    padding-bottom: 0.15em;
}

</style>
