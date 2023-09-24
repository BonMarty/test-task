export interface IString {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: number | null | undefined;
  rowName: string;
  salary: number;
  supportCosts: number;
  id?: number;
  child?: IString[];
  total?: number;
}
