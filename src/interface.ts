import { IScriptInfoMeta, TCallableFuncArguments, TCallableFuncArgumentsArray, TCallableFuncArgumentsRecord } from './api-node/addresses'

export type TParse<T> = (json: string) => T;
export type TLong = string | number;

export interface IRequestOptions {
    retry?: number;
    parse?: TParse<any>;
}

export type TRANSACTION_TYPE_MAP = {
    3: 'issue';
    4: 'transfer';
    5: 'reissue';
    6: 'burn';
    7: 'exchange';
    8: 'lease';
    9: 'cancelLease';
    10: 'alias';
    11: 'massTransfer';
    12: 'data';
    13: 'setScript';
    14: 'sponsorship';
    15: 'setAssetScript';
    16: 'invoke';
    18: 'diplomaCampaign';
};

export type TRANSACTION_NAME_MAP = {
    issue: 3;
    transfer: 4;
    reissue: 5;
    burn: 6;
    exchange: 7;
    lease: 8;
    cancelLease: 9;
    alias: 10;
    massTransfer: 11;
    data: 12;
    setScript: 13;
    sponsorship: 14;
    setAssetScript: 15;
    invoke: 16;
    diplomaCampaign: 18;
};
 
//TODO move to ts-types
export interface IWithApplicationStatus {
    applicationStatus?: 'succeed' | 'script_execution_failed';
}

export const isCallableFuncArrayArguments = (scriptInfoMeta: IScriptInfoMeta<TCallableFuncArguments>): scriptInfoMeta is IScriptInfoMeta<TCallableFuncArgumentsArray> => 
    !!scriptInfoMeta.isArrayArguments

export const isCallableFuncRecordArguments = (scriptInfoMeta: IScriptInfoMeta<TCallableFuncArguments>): scriptInfoMeta is IScriptInfoMeta<TCallableFuncArgumentsRecord> => 
    !scriptInfoMeta.isArrayArguments