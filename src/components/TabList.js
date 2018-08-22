import React, { Component , Children , cloneElement } from 'react'
import Tab from './Tab'

export default class TabList extends Component {

   static Tab = Tab
   
   render(){
      var { activeIndex } = this.props
      var children = Children.map(this.props.children , (child,index) => {
         if(child.type.displayName === "Tab"){
            return cloneElement(child , {
               isActive: activeIndex === index,
               onSelected: () => this.props.onSelected(index)
            })
         }
         return child
      })
      return (
         <div className="tabs">
            { children }
         </div>
      )
   }
}

TabList.displayName = "TabList"