export class DeviceCard {
    Name: string
    NativeResolution: string
    Size: number
    status: number

    constructor(image:string,NativeResolution:string,Size:number,status:number){
      this.Name = image;
      this.NativeResolution = NativeResolution;
      this.Size = Size
      this.status = status
  }
  }