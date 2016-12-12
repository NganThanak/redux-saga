/**
 * Created by thanak on 12/11/16.
 */
import React,{Component, PropTypes} from  'react';



const counter = ({value, onIncrement, onDecrement})=>
    <div>
        <div>
            <p>Hello saga</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <hr/>
            <div>
                you clicked: {value}
            </div>
        </div>
</div>
counter.propTypes={
    value :PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default counter;