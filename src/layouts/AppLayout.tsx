import { useQuery } from '@tanstack/react-query'
import { Navigate } from "react-router-dom";
import { getUser } from "../api/DevTreeAPI";
import DevTree from "../components/DevTree";

export default function AppLayout() {
    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })
    if (isLoading) return <div className="flex justify-center items-center h-screen">Cargando...</div>
    if (isError) return <Navigate to="/auth/login" replace={true} />
    if(data) return <DevTree data={data} />
}