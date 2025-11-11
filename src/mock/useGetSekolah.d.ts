export interface School {
  id: number;
  nama: string;
}

export interface KabupatenData {
  kabupaten: string;
  sma: School[];
  smk: School[];
}

export interface MockSchoolData {
  status: boolean;
  message: string;
  data: KabupatenData[];
}

export const mockSchoolData: MockSchoolData;
