import React, {Component} from 'react'
import Header from './header'

    var FavesView = React.createClass({
    	render: function(){
    		return (
    			<div className="favesView">
    				<p>Now viewing all your fave cuties</p>
    				<Header/>
    			</div>
    		)
    	}
    })

export default FavesView