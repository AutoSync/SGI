
export class Skin{
    constructor(theme){
        this.theme = theme
    }
    getTheme(){

        if(this.theme == 'dark')
        {
            return { 
                backgroundApp: "#11161C", fontColorApp: "#B3B3B3" 
                }
        }
        if(this.theme == "light")
        {
            return {

            }
        }
    }
}