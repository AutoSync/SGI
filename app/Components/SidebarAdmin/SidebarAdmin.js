import styles from './SidebarAdmin.module.css'



export const SidebarAdmin = ({tabs, activeTab, onTabClick}) =>{
    return <div key={"teucu"} className={styles.Sidebar}>

      { tabs.map( (tab, index) => (
      tab.type == true || tab.type != undefined ? tab.content : <button 
      key={index}
      className={index == activeTab ? styles.SidebarButtonActive : styles.SidebarButton }
      onClick={() => onTabClick(index)}>
      {tab.label}
      </button>
    ))}
    </div>
  }