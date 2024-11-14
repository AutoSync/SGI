import styles from './SidebarAdmin.module.css'



export const SidebarAdmin = ({tabs, activeTab, onTabClick}) =>{
    return <div className={styles.Sidebar}>

      { tabs.map( (tab, index) => (
      tab.type == true || tab.type != undefined ? tab.content : <button
      key={index}
      className={`${styles.SidebarButton} ${index == activeTab ? 'Active' : ''}`}
      onClick={() => onTabClick(index)}
    >
      {tab.label}
      </button>
    ))}
    </div>
  }