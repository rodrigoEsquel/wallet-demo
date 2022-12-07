export interface IUser {
  id: string;
  status: string;
  partnerId: string;
  type: string;
  createdAt: number;
  depositAddresses: {
    BTC?: string;
    MATIC?: string;
    AVAX?: string;
    ETH?: string;
    XLM?: string;
  };
  totalBalances: {
    BTC?: number;
    MATIC?: number;
    AVAX?: number;
    ETH?: number;
    XLM?: number;
  };
  availableBalances: {
    BTC?: any;
    MATIC?: any;
    AVAX?: any;
    ETH?: any;
    XLM?: any;
  };
  fields: {
    legalName?: {
      value: string;
      error: null;
      status: string;
    };
    firstName?: {
      value: string;
      error: null;
      status: string;
    };
    lastName?: {
      value: string;
      error: null;
      status: string;
    };
    cellphoneNumber?: {
      value: string;
      error: null;
      status: string;
    };
    dateOfBirth?: {
      value: string;
      error: null;
      status: string;
    };
    email: {
      value: string;
      error: null;
      status: string;
    };
    residenceAddress?: {
      value: {
        street1: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
      };
      error: null;
      status: string;
    };
    ssn?: {
      value: string;
      error: string;
      status: string;
    };
  };
}

