import { createContext, useContext } from "react";
import { SettleDebtAddDTO } from "../types/types";
import { ProviderType } from "./DataInterfaceProvider";
import { LoginContext } from "./LoginProvider";

type SettleDebtInterfaceContextType = {
    addDebt: (settleDebtAddDTO: SettleDebtAddDTO) => Promise<boolean>
}

const defaultValues:SettleDebtInterfaceContextType = {
    addDebt: async () => true
}

export const SettleDebtInterfaceContext = createContext<SettleDebtInterfaceContextType>(defaultValues)

function SettleDebtInterfaceProvider({children}:ProviderType) {
    
    const { token } = useContext(LoginContext)

    const url = process.env.REACT_APP_URL;

    const addDebt = async (settleDebtAddDTO: SettleDebtAddDTO) => {
        const data = await fetch(`${url}/v1/debt/add`, {
            headers: {
                Authorization: token || ""
            },
            method: "POST",
            body: JSON.stringify(settleDebtAddDTO)
        })
        if(data.status !== 200) return Promise.reject()
        const text = await data.text()
        return text==="true"
    }
    
    return (
        <SettleDebtInterfaceContext.Provider value={{
            addDebt
        }}>
            { children }
        </SettleDebtInterfaceContext.Provider>
    )
}

export default SettleDebtInterfaceProvider