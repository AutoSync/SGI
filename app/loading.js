

const Style = {
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F7F7F7"
    }
}


export default function Loading(){
    return <div style={Style.loading}>Carregando xakira...</div>
}