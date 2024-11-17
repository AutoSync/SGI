import styles from './SidebarAdmin.module.css'



export const SidebarAdmin = ({tabs, activeTab, onTabClick,}) =>{
    return <div className={styles.SidebarAdmin}>
      { 
      tabs.map( (tab, index, key) => (
      tab.type == true || tab.type != undefined ? tab.content : <button 
      key={key}
      className={index == activeTab ? styles.SidebarButtonActive : styles.SidebarButton }
      onClick={() => onTabClick(index)}>
      {tab.label}
      </button>
    ))
    }
    </div>
  }