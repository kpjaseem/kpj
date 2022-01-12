export interface gopArray {
    pricingGroupId: number;
    groupOfPortType: string;
    groupOfPortName: string;
    groupOfPortId: number;
    ratedPorts?: (RatedPortsEntity)[] | null;
    shippingCompany: string;
    validGop: boolean;
  }
  export interface RatedPortsEntity {
    cargoRates?: (CargoRatesEntity)[] | null;
    mainPort: boolean;
    port: Port;
    ratedPortId: number;
    refrigerated: boolean;
    effectiveDate?: string | null;
    expirationDate?: string | null;
  }
  export interface CargoRatesEntity {
    equipmentSizeType: string;
    rate?: number | null;
  }
  export interface Port {
    code: string;
    name: string;
  }
  