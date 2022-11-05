import React from "react";
import {getToken} from "@/utils";
import {Navigate} from "react-router-dom";

interface AuthComponentProps {
    children: React.ReactNode;
}

const AuthComponent = ({children}: AuthComponentProps) => {
    return getToken() ? <>{children}</> : <Navigate to={"/login"} replace={true}></Navigate>;
}

export default AuthComponent;