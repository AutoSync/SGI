
export const Sidebar = ({tabs, activeTab, onTabClick, tabStyles}) =>{
    return <div className={tabStyles.sidebar}>

      { tabs.map( (tab, index) => (
      tab.type == true || tab.type != undefined ? tab.content : <button
      key={index}
      className={`${tabStyles.button} ${index == activeTab ? 'active' : ''}`}
      onClick={() => onTabClick(index)}
    >
      {tab.label}
      </button>
    ))}
    </div>
  }