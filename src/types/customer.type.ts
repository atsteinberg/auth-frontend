export type Customer = {
  customerId: string;
  fullName: string;
  email: string;
  status: Status;
  dateOfBirth: string;
  photoThumbnail: string;
  country: string;
};

export type CustomerFromApi = {
  customerId: string;
  fullName: string;
  email: string;
  status: Status;
  dateOfBirth: string;
  photoThumbnail?: string;
  country: string;
};

export enum Status {
  Pending = 'Pending',
}
