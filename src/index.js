import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'


import Counter from './components/Counter'
import reducer from './reducers/index'
import {hellosaga} from './components/saga'

const  store =createStore(reducer)

const  action=type=>store.dispatch({type})
function render() {
	ReactDOM.render(
			<div>
				<hellosaga/>
			</div>,
			document.querySelector('.container')
	)
}
render()
store.subscribe(render)