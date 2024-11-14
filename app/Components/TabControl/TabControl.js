'use client'

import { Suspense, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { TabContent } from "../TabContent/TabContent";
import styles from './TabControl.module.css'

function LoadingContent(){
  return <h1>Carregando...</h1>
}

export const TabControl = ({tabData, direction, indexActive}) =>{
  
    const TabControlVertical = { tabControl: "tab-control-vert", sidebar: "tab-sidebar-vert", button: "tab-button-vert" }
    const TabControlHorizontal = { tabControl: "tab-control-horizon", sidebar: "tab-sidebar-horizon", button: "tab-button-horizon" }

    const [activeTab, setActiveTab] = useState(indexActive)

    let dir = TabControlHorizontal
    switch(direction){
      case "H":
        dir = TabControlHorizontal
        break
      case "V":
        dir = TabControlVertical
        break
      default:
        dir = TabControlHorizontal
        break
    }

    return <div className={dir.tabControl}>
      <Sidebar
        tabs={tabData}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        tabStyles={dir}
      />
      {
        <Suspense fallback={<LoadingContent />}>
          <TabContent content={tabData[activeTab].content} />
        </Suspense>
      }

    </div>
    
  }