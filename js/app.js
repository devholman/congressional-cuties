// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'
import Backbone from "bbfire"
import CutiesView from "./cutiesView"
import FavesView from "./favesView"

// ?apikey=

// /legislators?apikey=[your_api_key]

var url = "http://congress.api.sunlightfoundation.com/legislators/"


function app() {
    //////////////// Collection
    var CongressionalCollection = Backbone.Collection.extend({
        url: "http://congress.api.sunlightfoundation.com/legislators/",

        apiKey: "325ade0da4514bb29ff036144a8bc016",

        parse:function(rawData){
            console.log(rawData)
            return rawData.results
        }
    })


    /////////////// Router
    var CongressionalRouter = Backbone.Router.extend({
    	routes: {
    		"favorites": "handleFaves", 
    		"*default" : "handleCuties"
    	},

    	handleCuties: function() {
            var cc = new CongressionalCollection()

            cc.fetch({
                data:{
                    "apikey":cc.apiKey
                }
            }).then(function(){
                DOM.render(<CutiesView congressColl={cc}/>, document.querySelector('.container'))
                })
    	},

    	handleFaves: function() {
    		DOM.render(<FavesView />, document.querySelector('.container'))
    	},

    	initialize: function() {
    		Backbone.history.start()
    	}
    }) 

    
    var cr = new CongressionalRouter()

    
}

app()
