    
import React, {Component} from 'react'
import Header from './header'

var CutiesView = React.createClass({
	render: function(){
    console.log(this.props.congressColl.models)

        console.log(this)
		return (
			<div className="cutiesView">
				<p>Now viewing all the cuties</p>
				<Header/>
                <CutiesList cutiesColl={this.props.congressColl.models}/>
			</div>
		)
	}
})

var CutiesList = React.createClass({
    
    _makeCutieComponent:function(model,id){
        console.log(model)
        return <Cutie cutieData={model} key={id}/>

    },

    render:function(){
        return(
            <div className="cutiesList">
                {this.props.cutiesColl.map(this._makeCutieComponent)}
            </div>
        )
    }
})

var Cutie = React.createClass({
    render:function(){
        return(
            <div>
                <p>{this.props.cutieData.get('first_name')}</p>
            </div>
        )
    }
})

export default CutiesView