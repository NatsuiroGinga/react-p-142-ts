import {makeAutoObservable} from "mobx";
import {request} from "@/utils";
import React, {ReactNode} from "react";

class ChannelStore {
    get channelList(): { name: React.ReactNode; id: number; children: string }[] {
        return this._channelList;
    }

    set channelList(value: { name: React.ReactNode; id: number; children: string }[]) {
        this._channelList = value;
    }

    private _channelList: {
        name: ReactNode; id: number, children: string
    }[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadChannelList = async () => {
        const response = await request({
            url: "/channels",
            method: "GET"
        });
        this.channelList = response.data.channels;
    }
}

export default ChannelStore;