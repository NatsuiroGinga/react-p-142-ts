import {makeAutoObservable} from "mobx";
import {request} from "@/utils";

interface UserInfo {
    id?: string,
    name?: string,
    mobile?: string,
    gender?: number,
    birthday?: Date,
    photo?: string
}

class UserStore {

    private _userInfo: UserInfo = {};

    constructor() {
        makeAutoObservable(this);
    }

    public getUserInfo = async () => {
        const response = await request({
            url: "/user/profile",
            method: "GET",
        });
        this.userInfo = response.data as UserInfo;
    };

    public get userInfo(): UserInfo {
        return this._userInfo;
    }

    public set userInfo(value: UserInfo) {
        this._userInfo = value;
    }
}

export default UserStore;