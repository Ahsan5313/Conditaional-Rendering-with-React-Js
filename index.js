
import React, { Component } from 'react'
import Homepage from './Homepage'
import LogInPage from './LogInPage'

 class Conditional_Rendering extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             isLongIn : true
        }
    }
    

    render() {
      
       const {isLongIn} = this.state


        return(

            <div>
                { isLongIn && <Homepage /> }
            </div>
        )
    }
}

export default Conditional_Rendering;

