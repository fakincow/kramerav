import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StabDataService {
    constructor() { }
   
    
    getDeviceList() {
        return  DEVICE_LIST_STAB;
    }
   
  }

const DEVICE_LIST_STAB = {
    "devices": [
        {"Name":"BenQ SC3211","NativeResolution":"1920X540","Size":256,"status":1},
        {"Name":"Dell ZT60","NativeResolution":"1920X1080","Size":256,"status":0},
        {"Name":"Haier LE39B50","NativeResolution":"1600X900","Size":128,"status":1},
        {"Name":"LG 50LA621Y","NativeResolution":"1920X1080","Size":256,"status":1},
        {"Name":"Mag RD24L","NativeResolution":"640X480","Size":256,"status":1},
        {"Name":"Normande ND3276","NativeResolution":"1600X1050","Size":256,"status":1},
        {"Name":"Panasonic TH-L32B6","NativeResolution":"4096X2160","Size":256,"status":1},
        {"Name":"Philips 55PFL6008","NativeResolution":"1440X900","Size":128,"status":1},
        {"Name":"Philips 226V4LSB","NativeResolution":"1920X1080","Size":128,"status":0},
        {"Name":"Samsung UA46F6400","NativeResolution":"1920X1080","Size":256,"status":1},
        {"Name":"Samsung UA55F6400","NativeResolution":"1920X1080","Size":256,"status":1},
        {"Name":"Sharp LC50LE450M","NativeResolution":"640X480","Size":128,"status":0},
        {"Name":"Sony KDL50W656","NativeResolution":"1920X1080","Size":256,"status":1}
    ]
  };  
  