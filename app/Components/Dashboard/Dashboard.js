import { Overview } from "../Overview"
import { TabControl } from "../TabControl/TabControl"

const DashMain = () => {
    return <TabControl
    tabData={[
        {label: "Visão Geral", content: Overview()},
        {label: "Faturamentos", content: "billings"},         
    ]}
    direction={"H"}
    indexActive={0} 
    />
}

const Toolbar = () => {
    return <div className="dashboard-toolbar">
        <h1>Profile</h1>

        <div>Wish</div>
        
    </div>
}







export function Dashboard(){
    return <div className="dashboard">
        <DashMain />
        <Toolbar />
    </div>
}