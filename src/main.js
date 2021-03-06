import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
var defaultConfigs = require('./configuration/layouts.json')
var constants = require('./configuration/constants.json')

Vue.use(Vuex)
const defaultStream = 'smashtherecord'
const store = new Vuex.Store({
    state: {
        currentGame: 'Melee',
        currentTwitchCategory: 'Super Smash Bros. Melee',
        componentCounts: {
            twitch: 0,
            twitter: 0,
            twitchChat: 0
        },

        componentIndexes: {
            twitch: 0,
            twitter: 0,
            twitchChat: 0
        },

        streamList: [],

        componentIndex: -1, // Used to generate component IDs, using current count of component causes reuse of IDs

        // Layout
        gridLayout: JSON.parse(localStorage.getItem('layout')) || defaultConfigs.defaultLayout,
        // gridLayout: defaultConfigs.defaultLayout,

        // Components
        twitchComponents: JSON.parse(localStorage.getItem('twitchComponents')) || [{
            twitchChannel: defaultStream,
            twitchPlayer: {},
            twitchElement: 'twitchPlayer0',
            UID: -1,
            componentIndex: -1,
            twitchComponentIndex: -1
        }],

        twitterComponents: [{
            twitterUser: 'ContentHomepage',
            twitterList: 'Melee',
            UID: -1
        }],

        twitchChatComponents: [{
            twitchChatChannel: defaultStream,
            UID: -1,
            twitchChatComponentIndex: -1
        }]
    },
    mutations: {
        // Counters TODO: Reduce repitition of these
        addTwitchComponent (state, UID) {
            ++state.componentIndex
            ++state.componentCounts.twitch
            state.twitchComponents[state.componentCounts.twitch - 1].UID = UID
            state.twitchComponents[state.componentCounts.twitch - 1].componentIndex = state.componentIndex
            state.twitchComponents[state.componentCounts.twitch - 1].twitchComponentIndex = state.componentIndexes.twitch
            ++state.componentIndexes.twitch
        },
        addTwitterComponent (state, UID) {
            ++state.componentIndex
            ++state.componentCounts.twitter
            state.twitterComponents[state.componentCounts.twitter - 1].UID = UID
            state.twitterComponents[state.componentCounts.twitter - 1].componentIndex = state.componentIndex
            state.twitterComponents[state.componentCounts.twitter - 1].twitterComponentIndex = state.componentIndexes.twitter
            ++state.componentIndexes.twitter
        },
        addTwitchChatComponent (state, UID) {
            ++state.componentIndex
            ++state.componentCounts.twitchChat
            state.twitchChatComponents[state.componentCounts.twitchChat - 1].UID = UID
            state.twitchChatComponents[state.componentCounts.twitchChat - 1].componentIndex = state.componentIndex
            state.twitchChatComponents[state.componentCounts.twitchChat - 1].twitchChatComponentIndex = state.componentIndexes.twitchChat
            ++state.componentIndexes.twitchChat
        },
        removeTwitchComponent (state, componentIndex) {
            --state.componentCounts.twitch
            const index = state.twitchComponents.findIndex(it => it.componentIndex === Number(componentIndex))
            state.twitchComponents.splice(index, 1)
        },
        removeTwitterComponent (state, componentIndex) {
            --state.componentCounts.twitter
            const index = state.twitterComponents.findIndex(it => it.componentIndex === Number(componentIndex))
            state.twitterComponents.splice(index, 1)
        },
        removeTwitchChatComponent (state, componentIndex) {
            --state.componentCounts.twitchChat
            const index = state.twitchChatComponents.findIndex(it => it.componentIndex === Number(componentIndex))
            state.twitchChatComponents.splice(index, 1)
        },

        // Layouts
        saveLayout (state, newLayout) {
            state.gridLayout = newLayout
            localStorage.setItem('layout', JSON.stringify(newLayout))
        },
        deleteGridItem (state, itemNumber) {
            state.gridLayout.splice(Number(itemNumber), 1)
        },
        resetLayout (state) {
            state.gridLayout.splice(0, state.gridLayout.length, ...defaultConfigs.defaultLayout)
            localStorage.setItem('layout', JSON.stringify(state.gridLayout))
            location.reload()
        },

        // StreamsList
        saveStreamsList (state, streams) {
            state.streamList = []
            streams.forEach((item, index) => {
                state.streamList.push(item)
            })
        },

        // Twitch
        changeTwitchChannel (state, twitch = {channel: 'vgbootcamp', component: 0}) {
            const index = state.twitchComponents.findIndex(it => it.twitchComponentIndex === twitch.component)
            state.twitchComponents[index].twitchChannel = twitch.channel
            state.twitchComponents[index].twitchPlayer.setChannel(twitch.channel)
        },
        storeTwitchPlayer (state, twitch = {player: {}, component: 0}) {
            state.twitchComponents[twitch.component].twitchPlayer = twitch.player
        },
        addTwitchItem (state, channel) {
            let newLayout = state.gridLayout
            let newTwitchComponentsList = state.twitchComponents

            newLayout.push({
                'x': 4,
                'y': 20,
                'w': 3,
                'h': 6,
                'i': 'twitch' + state.componentIndexes.twitch,
                'id': 'G' + ((state.componentIndex) + 1),
                'componentType': 'twitchComponent'
            })

            newTwitchComponentsList.push(
                {
                    twitchChannel: channel,
                    twitchPlayer: {},
                    twitchElement: 'twitchPlayer' + state.componentIndexes.twitch
                }
            )
            // localStorage.setItem('twitchComponents', JSON.stringify(newTwitchComponentsList))
        },

        // Twitch Chat
        addTwitchChatItem (state, channel) {
            let newLayout = state.gridLayout

            newLayout.push({
                'x': 4,
                'y': 20,
                'w': 3,
                'h': 6,
                'i': 'twitchChat' + state.componentIndexes.twitchChat,
                'id': 'G' + ((state.componentIndex) + 1),
                'componentType': 'twitchChatComponent'
            })

            state.twitchChatComponents.push({
                twitchChatChannel: channel
            })
        },
        changeTwitchChatChannel (state, info) {
            document.getElementById('twitchChatWindow' + info.id).setAttribute('src', 'https://www.twitch.tv/' + info.channel + '/chat')
            state.twitchComponents[info.id].twitchChannel = info.channel
        },

        // Twitter
        changeTwitterFeed (state, info) {
            const twitterIndex = state.twitterComponents.findIndex(it => it.twitterComponentIndex === info.componentNumber)
            const oldTwitter = document.querySelector('#twitter-feed-' + info.componentNumber + ' > iframe')
            const twitterContainer = document.getElementById('twitterComponent' + info.componentNumber).parentNode.getBoundingClientRect()

            let twitterHeightOffset = (twitterContainer.height > constants.heightPadding) ? constants.heightPadding : 10
            state.twitterComponents[twitterIndex].twitterList = info.list
            state.twitterComponents[twitterIndex].twitterUser = info.user
            if (oldTwitter) {
                oldTwitter.remove()
            }
            window.twttr.widgets.createTimeline(
                {
                    sourceType: 'list',
                    ownerScreenName: info.user,
                    slug: info.list
                },
                document.getElementById('twitter-feed-' + info.componentNumber),
                {
                    theme: 'dark',
                    dnt: true,
                    height: twitterContainer.height - twitterHeightOffset,
                    linkColor: '#45B29D'
                }
            )
        },
        addTwitterItem (state, info) {
            let newLayout = state.gridLayout

            newLayout.push({
                'x': 4,
                'y': 20,
                'w': 3,
                'h': 8,
                'i': 'twitter' + state.componentIndexes.twitter,
                'id': 'G' + ((state.componentIndex) + 1),
                'componentType': 'twitterComponent'
            })

            state.twitterComponents.push({
                twitterUser: info.user,
                twitterList: info.list,
                UID: 8
            })
        },

        // Route
        storeCurrentGame (state, info) {
            state.currentGame = info.game
            console.log(String(info.twitchCategory))
            state.currentTwitchCategory = String(info.twitchCategory)
        }
    },
    actions: {
        navigationActions ({ commit, state }, info) {
            commit('changeTwitchChannel', info.twitch)
            commit('changeTwitchChatChannel', {
                channel: info.twitch.channel,
                id: state.twitchChatComponents[0].twitchChatComponentIndex
            })
        },

        removeGridItem ({ commit, state }, info) {
            const componentTypeLong = state.gridLayout[info.gridItem].i
            const componentType = componentTypeLong.substring(0, componentTypeLong.length - 1)
            commit('deleteGridItem', info.gridItem)

            switch (true) { // Lets you do partial string comparison in switch cases
            case componentType.includes('twitchChat'):
                commit('removeTwitchChatComponent', info.componentIndex)
                break;

            case componentType.includes('twitch'):
                commit('removeTwitchComponent', info.componentIndex)
                break;

            case componentType.includes('twitter'):
                commit('removeTwitterComponent', info.componentIndex)
                break;

            default:
                break;
            }

            // Add vm.$destroy
        }
    }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        'App': App
    }
})
