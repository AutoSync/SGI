'use client'

import { useState } from "react";
import { TabContent } from "../TabContent/TabContent";
import styles from './TabAdmin.module.css'
import { SidebarAdmin } from "../SidebarAdmin/SidebarAdmin";

export const TabAdmin = ({tabData, indexActive}) =>{
  
    const [activeTab, setActiveTab] = useState(indexActive)

    return <div className={styles.TabControl}>
      <SidebarAdmin
        tabs={tabData}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      {
        <TabContent content={tabData[activeTab].content} />
      }

    </div>
    
  }