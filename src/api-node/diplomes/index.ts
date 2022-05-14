import request from "src/tools/request";

export function fetchUserDiplomes(base: string, address: string): Promise<IUserDiplomes> {

    return request({
        base,
        url: `/diplomes/balances/${address}`
    });

}

export function fetchDiplomeOfUser(base: string, address: string, diplomeId: number): Promise<IDiplomeOfUser> {

    return request({
        base,
        url: `diplomes/getDiplome/${address}/${diplomeId}`
    });
}

export type Tdiplome = {
    assetId: string;
    sender: string;
    recipient: string;
    name: string;
    description: string;
}

export interface IUserDiplomes {

    diplomes: Array<Tdiplome>;

}

export interface IDiplomeOfUser {

    assetId: string;
    sender: string;
    recipient: string;
    name: string;
    description: string;

}