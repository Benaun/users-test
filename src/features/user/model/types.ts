export interface IUserResponse {
  id: number
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website: string
  company: ICompany
}

interface IAddress {
  street?: string
  suite?: string
  city?: string
  zipcode?: string
  geo?: IGeo
}

interface IGeo {
  lat: string
  lng: string
}

interface ICompany {
  name?: string
  catchPhrase?: string
  bs?: string
}

export interface IUserCard {
  id: number
  username: string
  city: string
  companyName: string
  avatar?: string | undefined
}

export interface IUserCardFull extends IUserCard {
  name: string
  email: string
  phone: string
}
