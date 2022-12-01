import LoginStore from "@/store/login.Store";
import {createContext, useContext} from "react";
import UserStore from "@/store/user.Store";
import ChannelStore from "@/store/channel.Store";

class RootStore {

    private _loginStore: LoginStore;

    private _userStore: UserStore;

    private _channelStore: ChannelStore;

    constructor() {
        this._loginStore = new LoginStore();
        this._userStore = new UserStore();
        this._channelStore = new ChannelStore();
    }

    get loginStore(): LoginStore {
        return this._loginStore;
    }

    set loginStore(value: LoginStore) {
        this._loginStore = value;
    }

    get userStore(): UserStore {
        return this._userStore;
    }

    set userStore(value: UserStore) {
        this._userStore = value;
    }

    get channelStore(): ChannelStore {
        return this._channelStore;
    }

    set channelStore(value: ChannelStore) {
        this._channelStore = value;
    }
}

const rootStore = new RootStore();
const context = createContext(rootStore);
const useStore = () => useContext(context);

export default useStore;