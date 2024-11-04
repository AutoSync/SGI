'use client'

import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { TabContent } from "../TabContent/TabContent";

export const TabControl = ({tabData, tabStyles}) =>{
    const [activeTab, setActiveTab] = useState(0)

    return <div className={tabStyles.tabControl}>
      <Sidebar
        tabs={tabData}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        tabStyles={tabStyles}
      />
      {
        <TabContent  
        content={tabData[activeTab].content}
        /> 
      }

    </div>
    
  }