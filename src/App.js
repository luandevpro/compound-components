import "./index.css"
import React, { Component } from "react"
import Tabs from './components/Tabs'
import FaAutomobile from "react-icons/lib/fa/automobile"
import FaBed from "react-icons/lib/fa/bed"
import FaPlane from "react-icons/lib/fa/plane"
import FaSpaceShuttle from "react-icons/lib/fa/space-shuttle"
import * as text from "./text"

class App extends Component {

   render() {
      const data = [
         {
           label: <FaAutomobile />,
           content: text.cars
         },
         {
           label: <FaBed />,
           content: text.hotels
         },
         {
           label: <FaPlane />,
           content: text.flights
         },
         {
           label: <FaSpaceShuttle />,
           content: text.space
         }
       ]
      return (
         <div className="App">
            <Tabs>
               <Tabs.TabList>
                  {
                     data.map((tab,index) => (
                        <Tabs.TabList.Tab key={index}>{tab.label}</Tabs.TabList.Tab>
                     ))
                  }
               </Tabs.TabList>
               <Tabs.TabPanels>
                  {
                     data.map((tab,index) => (
                        <Tabs.TabPanels.TabPanel key={index}>{tab.content}</Tabs.TabPanels.TabPanel>
                     ))
                  }
               </Tabs.TabPanels>
            </Tabs>
         </div>
   )
  }
}

export default App
