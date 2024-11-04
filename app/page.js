import { Skin } from "./Components/GlobalStyle"
import { EditorContainer } from "./Components/EditorContainer/EditorContainer"
import { TabControl } from "./Components/TabControl/TabControl"
import { Dashboard } from "./Components/Dashboard/Dashboard"
import { Malha } from "./Components/Malha/Malha"
import { Nodes } from "./Components/Nodes/Nodes"
import { Orders } from "./Components/Orders/Orders"
import { Sales } from "./Components/Sales/Sales"

let mainTheme = 'dark'
const theme = new Skin(mainTheme)

//Styles of Tabcontrol
const tabStyles = { tabControl: "tab-control-main", 
                    sidebar: "sidebar-main", 
                    button: "tab-button", 
                  }
 
const tabData = [
  { label: "Painel", content: Dashboard() },
  { label: "Malha", content: Malha() },
  { label: "Nós", content: Nodes() },
  { label: "Pedidos", content: Orders() },
  { label: "Vendas", content: Sales() },
]


export default function Page(){

    return (
      <EditorContainer>

        <TabControl 
        tabData={tabData} 
        tabStyles={tabStyles}
        />

      </EditorContainer>
      
    )
  }
