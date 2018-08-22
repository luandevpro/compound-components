import React, { Component } from 'react'

export default class Tab extends Component {
   render(){
      var { isActive } = this.props
      return (
         <div
            className={isActive ? "tab active" : "tab"}
            onClick={() => this.props.onSelected()}
         >
            { this.props.children }
         </div>
      )
   }
}

Tab.displayName = "Tab"