import {makeAutoObservable} from "mobx";
import {getToken, removeToken, request, setToken} from "@/utils";

interface Token {
    mobile: string,
    code: string
}

class LoginStore {

    private _token: string = getToken() || "";

    constructor() {
        makeAutoObservable(this);
    }

    public get token(): string {
        return this._token;
    }

    public set token(value: string) {
        this._token = value;
    }

    public getToken = async (token: Token) => {
        const res = await request({
            url: "/authorizations",
            data: token,
            method: "POST"
        });
        this.token = res.data.token;
        setToken(this.token);
        console.log("token is ", getToken());
    };

    public logOut = () => {
        this.token = "";
        removeToken();
    };
}

export default LoginStore;