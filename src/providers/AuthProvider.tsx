import { PropsWithChildren, createContext,useEffect,useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
type AuthData ={
    session : Session | null;
};
const AuthContext = createContext<AuthData>({});

export default function AuthProvider({children}:PropsWithChildren){
    const [session,setSession]=useState<Session | null>(null);
    useEffect(()=>{
        const fetchSession =async()=>{
            const {data} = await supabase.auth.getSession();
            console.log(data);
            setSession(data.session);
        }
        fetchSession();
    },[])


    return <AuthContext.Provider value={{session}}>
        {children}
    </AuthContext.Provider>
}