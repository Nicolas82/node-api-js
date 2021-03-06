import {TLong} from '../../interface';
import request from '../../tools/request';


/**
 * GET /leasing/active/{address}
 * Get all active leases for an address
 */
export function fetchActive(base: string, address: string, options: RequestInit = Object.create(null)): Promise<Array<ILeaseInfo>> {
    return request({base, url: `/leasing/active/${address}`, options});
}


/**
 * GET /leasing/info/
 * Get lease transactions info.
 */
export function fetchLeasingInfo(base: string, ids: string[], options: RequestInit = Object.create(null)): Promise<Array<ILeaseInfo>> {
    const searchParams = `{\"ids\":[${ids.map(id => `\"${id}\"`).join(',')}]}`;

    return request({
        base, url: `/leasing/info/`, options: {
            ...options,
            body: searchParams,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}

export interface ILeaseInfo {
    id: string,
    originTransactionId: string,
    sender: string,
    recipient: string,
    amount: TLong,
    height: number,
    status: string,
    cancelHeight: number | null,
    cancelTransactionId: string | null
}
