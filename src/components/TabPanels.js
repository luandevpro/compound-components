import React, { Component } from 'react'
import TabPanel from './TabPanel'

export default class TabPanels extends Component {
   static TabPanel = TabPanel
   render(){
      var {activeIndex} = this.props
      return (
         <div className="panels">
            { this.props.children[activeIndex] }
         </div>
      )
   }
}

TabPanels.displayName = "TabPanels"