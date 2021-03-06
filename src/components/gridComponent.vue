<template>
    <div class="gridComponent">
        <div id="addItem">
            <a id="addButton" href="#">+&nbsp;&nbsp;New Item</a>
            <ul id="creationList">
                <li>
                    <button class="add" v-on:click="addTwitterComponent">
                        <img alt="Twitter List" title="Twitter List" src="../assets/Twitter_Logo_Blue/Twitter_Logo_Blue.svg" type="image/svg+xml" class="addIcon"></img>
                    </button>
                </li>
                <li>
                    <button class="add" v-on:click="addTwitchComponent">
                        <img alt="Twitch Stream" title="Twitch Stream" src="../assets/Twitch_Logo_All/Screen/Purple/Twitch_Purple_RGB.svg" type="image/svg+xml" class="addIcon"></img>
                    </button>
                </li>
                <li>
                    <button class="add" v-on:click="addTwitchChatComponent">
                        <img alt="Twitch Chat" title="Twitch Chat" src="../assets/Combo_Logo_All/Screen/Purple/Combo_Purple_RGB.svg" type="image/svg+xml" class="addIcon"></img>
                    </button>
                </li>
                <li>
                    <button class="btnReset" v-on:click="resetLayout">
                        Reset Layouts
                    </button>
                </li>
            </ul>
        </div>
        <div class="layout">
            <grid-layout
                :layout="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :vertical-compact="true"
                :margin="[5, 5]"
                :use-css-transforms="true">
                <grid-item class="gridItems"
                            v-for="item in layout"
                            v-bind:key="item.id"
                        :x="item.x"
                        :y="item.y"
                        :w="item.w"
                        :h="item.h"
                        :i="item.i"
                        :id="item.id"
                            @resized="resizedEvent">
                        <button class="delete" v-on:click="removeGridItem(item.id)">
                            <img src="../assets/close.svg" type="image/svg+xml" class="expandImg"></img>
                        </button>
                        <button class="expandInput" v-on:click="expandInput(item.i)">
                            <img src="../assets/expand-down.svg" type="image/svg+xml" class="expandImg"></img>
                        </button>
                        <component :is="item.componentType"></component>
                </grid-item>
            </grid-layout>
        </div>
    </div>
</template>

<script>
import twitterComponent from './twitterComponent'
import twitchComponent from './twitchComponent'
import VueGridLayout from 'vue-grid-layout'
import resizeItem from '../mixins/resizeItem.js'
import twitchChatComponent from './twitchChatComponent'

var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;
var constants = require('../configuration/constants.json')

export default {
    name: 'gridComponent',
    mixins: [resizeItem],
    components: {
        twitterComponent,
        twitchComponent,
        GridLayout,
        GridItem,
        twitchChatComponent
    },
    data () {
        return {
            layout: this.$store.state.gridLayout
        }
    },
    methods: {
        resetLayout () {
            this.$store.commit('resetLayout')
        },
        addTwitchComponent: function () {
            this.$store.commit('addTwitchItem', 'vgbootcamp')
            this.layout = this.$store.state.gridLayout
            localStorage.setItem('layout', JSON.stringify(this.layout))
        },
        addTwitchChatComponent: function () {
            this.$store.commit('addTwitchChatItem', 'vgbootcamp')

            this.layout = this.$store.state.gridLayout
            localStorage.setItem('layout', JSON.stringify(this.layout))
        },
        addTwitterComponent: function () {
            this.$store.commit('addTwitterItem', {
                user: 'ContentHomepage',
                list: 'Melee'
            })

            this.layout = this.$store.state.gridLayout
            localStorage.setItem('layout', JSON.stringify(this.layout))
        },
        removeGridItem: function (componentID) {
            for (var i = 0; i < this.$store.state.gridLayout.length; ++i) {
                if (this.$store.state.gridLayout[i].id === componentID) {
                    this.$store.dispatch('removeGridItem', {
                        gridItem: i,
                        componentIndex: componentID.substring(1, componentID.length)
                    })
                    break
                }
            }
            localStorage.setItem('layout', JSON.stringify(this.layout))
        },
        expandInput: function (componentID) {
            let input = ''
            let inputString = ''
            switch (true) {
            case componentID.includes('twitchChat'):
                inputString = '#twitchChatInput' + Number(componentID.substring('twitchChat'.length, componentID.length))
                input = document.querySelector(inputString)
                break;

            case componentID.includes('twitch'):
                inputString = '#twitchInput' + Number(componentID.substring('twitch'.length, componentID.length))
                input = document.querySelector(inputString)
                break;

            case componentID.includes('twitter'):
                inputString = '#twitterListInput' + Number(componentID.substring('twitter'.length, componentID.length))
                input = document.querySelector(inputString)
                break;

            default:
                break;
            }
            if (input.style.display !== 'inline') {
                input.style.display = 'inline'
                document.querySelector(inputString).style.display = 'inline'
            } else {
                input.style.display = 'none'
            }
        },
        resizeWithContainer: function (newH, newW, newWPx, newHPx, element, offsetW, offsetH) { // eslint-disable-line
            const width = Number(newWPx) - offsetW
            const height = Number(newHPx) - offsetH

            document.getElementById(element).width = width
            document.getElementById(element).height = height
        },

        resizedEvent: function (i, newH, newW, newWPx, newHPx) {
            this.storeItemProperties()
            switch (true) {
            case i.includes('twitchChat'):
                const chatNumber = i.charAt(i.length - 1)
                this.resizeWithContainer(newH, newW, newWPx, newHPx, 'twitchChatWindow' + chatNumber, constants.widthPadding, constants.heightPadding)
                break;

            case i.includes('twitch'):
                const streamNumber = Number(i.charAt(i.length - 1))
                const twitchIndex = this.$store.state.twitchComponents.findIndex(it => it.twitchComponentIndex === streamNumber)
                this.resizeWithContainer(newH, newW, newWPx, newHPx, this.$store.state.twitchComponents[twitchIndex].twitchElement, constants.widthPadding, constants.heightPadding)
                break;

            case i.includes('twitter'):
                // const twitterElement = document.querySelectorAll('#twitter-feed-0 > iframe')[0].id
                const twitterNumber = i.charAt(i.length - 1)
                const twitterWindow = document.querySelector('#twitter-feed-' + twitterNumber + ' > iframe')
                let twitterHeightOffset = constants.heightPadding
                twitterWindow.style.height = String((newHPx - twitterHeightOffset) + 'px')
                break;

            default:
                break;
            }
        },
        storeItemProperties: function () {
            this.$store.commit('saveLayout', this.layout)
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gridItems {
    background: transparent;
    border-radius: 5px;
    margin: 0;
}

button {
    border-radius: 10px;
    width: 32px;
    height: 32px;
    border: none;
}

.gridItems:hover {
    background: #4A484C;
}

.gridItems:hover .delete{
    display: block;
}
.gridItems:hover .expandInput {
    display: block;
}

#addItem {
    position: absolute;
    float: right;
    top: 0;
    padding-left: 5px;
    padding-right: 5px;
    right: 0;
    width: 0px;
    transition: all 0.5s ease;
    height: 32px;
}

#addButton {
    width: 150px;
    z-index: 999;
    position: absolute;
    float: right;
    top: 0;
    right: 0;
    color: white;
    text-align: center;
    padding: 4px 16px;
    height: 38px;
    padding-top: 12px;

    text-decoration: none;
    font-size: 1.2em;
    font-weight: 700;
}


#creationList {
    margin-top: 38px;
    display: none;
}

#addItem:hover #creationList {
    display: block;
}

#addItem:hover {
    transition:  width 0s ease;
    background-color: #4A484C;
    width: 12%;
    height: 100%;
    z-index: 999;
    transition: all 0.5s ease;
}

.delete {
    background-color: #ccc;
    z-index: 999;
    position: absolute;
    right: 0;
    max-width: 100%;
    top: 0;
    display: none;
}

.expandInput {
    background-color: #ccc;
    z-index: 999;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
}

.expandImg {
    max-width: 80%;
}

.addIcon {
    max-height: 100%;
}

.add {
    background-color: white;
    min-width: 100%;
    height: 80px;
    border: none;
    padding: 10px;
    margin-top: 5px;
}

.add img {
    max-width: 60%;
    max-height: 90%;
}

.btnReset {
    position: absolute;
    bottom: 5px;
    left: 0;
    background-color: grey;
    min-width: 100%;
    height: 40px;
    border: none;
}

ul {
    min-width: 100%;
    background-color: #4A484C;
}

li {
    min-width: 100%;
}

</style>
