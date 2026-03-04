export interface IDeviceResponse{
    deviceId : string;
    deviceName : string;
    numOfSP : number;
    spIds : string[]
}

export interface IDeviceCreation{
    deviceId : string;
    deviceName : string;
    deviceType : string;
    partNumber : string;
    buildingName : string;
    numOfSP : number;
    spIds : string[]
}