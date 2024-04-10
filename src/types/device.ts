export interface Device {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: DeviceDescription[];
}

export interface DeviceDescription {
  number: number;
  title: string;
  description: string;
}
