export interface CutAddressModel {
  label: string;
  street: string;
  suite: string;
  city: string;
  postalcode: string;
  geo: {
    latitude: number;
    longitude: string;
  };
}