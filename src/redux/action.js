import axios from "axios"

export const userData=()=>async (action)=>{
        try {
            action({
                type:"userDataRequest"
            })
            const {data}=await axios.get('https://randomuser.me//api')
            console.log(data)
            
                action({
                    type:"userDataSuccess",
                    payload:data
                })
            
        
    } catch (error) {
        action({
            type:"userDataError"
        })
    }
}