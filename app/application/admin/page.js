import { Dashboard } from "../../Components/Dashboard/Dashboard";
import { TabControl } from "../../Components/TabControl/TabControl";
import Logo from "../../public/icons/autosyncsgi_logo.svg"


const Header = () => {
    return <div>
        <h3>logo</h3>
    </div>
}

const Footer = () => {
    return <div>
        <h3>AutoSync SGI</h3>
    </div>
}

export default function Admin(){
    return <div className="editor">

    <TabControl 
    tabData={[
        { label: "x", content: Header(), type: true},
        { label: "Dashboard", content: Dashboard()},
        { label: "Nodes", content: "Nodes"},
        { label: "x", content: Footer(), type: true},
    ]}
    direction={"V"}
    indexActive={1}    
    />
         
    </div>
}