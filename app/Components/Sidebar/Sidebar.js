
export const Sidebar = ({tabs, activeTab, onTabClick, tabStyles}) =>{
    return <div className={tabStyles.sidebar}>
      { tabs.map( (tab, index) => (
        <button
          key={index}
          className={`${tabStyles.button} ${index == activeTab ? 'active' : ''}`}
          onClick={() => onTabClick(index)}
        >
          {tab.label}
      </button> 
    ))}
    </div>
  }