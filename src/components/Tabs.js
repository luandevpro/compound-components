import React, { Component , Children , cloneElement } from 'react'
import TabList from './TabList'
import TabPanels from './TabPanels'

export default class Tabs extends Component {

   static TabList = TabList
   
   static TabPanels = TabPanels

   state = {
      activeIndex: 0
   }
   onSelected = (activeIndex) => {
      this.setState({
         activeIndex
      })
   }
   render(){
      var children = Children.map(this.props.children , (child) => {
         if(child.type.displayName === "TabList"){
            return cloneElement(child , {
               activeIndex: this.state.activeIndex,
               onSelected: this.onSelected
            })
         }
         if(child.type.displayName === "TabPanels"){
            return cloneElement(child , {
               activeIndex: this.state.activeIndex
            })
         }
         return child
      })
      return (
         <div className="Tabs">
            {
               children
            }
         </div>
      )
   }
}