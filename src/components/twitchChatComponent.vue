<template>
    <div class="twitchChatComponent" :id="'twitchChat' + componentNumber">
        <input type="text" class="gridInput twitchChatInput" :id="'twitchChatInput' + componentNumber" placeholder="Chat Channel" v-model="chatChannel"></input>
        <iframe v-bind:src="twitchSource"
                frameborder="0"
                scrolling="no"
                :id="'twitchChatWindow' + componentNumber"
                :width="props.width"
                :height="props.height"
                allowfullscreen="true"
                pointerevents="none">
        </iframe>
    </div>
</template>

<script>
import inputListener from '../mixins/inputListener.js'
import resizeItem from '../mixins/resizeItem.js'
var constants = require('../configuration/constants.json')


export default {
    name: 'twitchChatComponent',
    mixins: [resizeItem, inputListener],
    componentNumber: -1,
    data () {
        const index = this.$store.state.componentIndexes.twitchChat
        this.$store.commit('addTwitchChatComponent', this._uid)
        return {
            chatChannel: '',
            componentNumber: index,
            twitchSource: 'https://www.twitch.tv/' + this.$store.state.twitchChatComponents[this.$store.state.componentCounts.twitchChat - 1].twitchChatChannel + '/chat' || 'https://www.twitch.tv/tradechat/chat',
            props: {
                width: 200,
                height: 160
            }
        }
    },

    mounted () {
        const registerListener = (element) => {
            if (!document.getElementById(element)) {
                window.requestAnimationFrame(registerListener)
            } else {
                resizeItem.methods.parentSize('twitchChatWindow' + this.componentNumber, 'twitchChat' + this.componentNumber, constants.heightPadding, constants.widthPadding)
                inputListener.methods.createListener('twitchChatInput' + this.componentNumber, this, this.componentNumber)
            }
        }

        registerListener('twitchChat' + this.componentNumber)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.twitchChatComponent {
    margin: 8px;
}

.input-descriptor {
    line-height: 1.6em;
}

input {
    display: none;
    position: absolute;
    left: 25%;
    width: 50%
}
</style>
