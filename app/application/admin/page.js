import Image from "next/image";
import { Dashboard } from "../../Components/Dashboard/Dashboard";
import { TabControl } from "../../Components/TabControl/TabControl";
import Logo from "../../public/icons/autosyncsgi_logo.svg"
import { NodesTab } from "../../Components/NodesTab/NodesTab";


const Header = () => {
    return <div className="admin-header">
        <Image src={Logo} alt="AutoSync SGI" width={30} height={30} />
        <div className="admin-icon-div">
            <h3>Admin</h3>
            <h4>Conta Demo</h4>
        </div>
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
        { label: "Nodes", content: NodesTab()},
        { label: "x", content: Footer(), type: true},
    ]}
    direction={"V"}
    indexActive={1}    
    />
         
    </div>
}