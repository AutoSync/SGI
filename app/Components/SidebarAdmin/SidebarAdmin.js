import styles from './SidebarAdmin.module.css'



export const SidebarAdmin = ({tabs, activeTab, onTabClick,}) =>{
    return <div className={styles.SidebarAdmin}>
      { 
        tabs.map( (tab, index) => (
        tab.type == true || tab.type != undefined ? <div key={index}>{tab.content}</div> : 
        <button 
        key={index}
        className={index == activeTab ? styles.SidebarButtonActive : styles.SidebarButton }
        onClick={() => onTabClick(index)}>
        {tab.label}
      </button>
    ))
    }
    </div>
  }