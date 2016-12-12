import React from 'react'
import Counter from './Counter'

class App extends  React.Component{

    render(){
        return(
            <div>
              <h1>Hello saga</h1>
                <Counter/>
            </div>
        )
    }
}
export default App