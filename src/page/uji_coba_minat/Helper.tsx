export const getInterestDescription = (code: string): string => {
  const interestMap: Record<string, string> = {
    AGM: "Minat Keagamaan",
    MTK: "Minat Matematika",
    IPA: "Minat IPA",
    IPS: "Minat IPS",
    BDB: "Minat Bahasa dan Budaya",
    TDR: "Minat Teknologi dan Rekayasa",
    TIK: "Minat Teknologi Informasi dan Komunikasi",
    KES: "Minat Kesehatan",
    AGR: "Minat Agrobisnis dan Agroteknologi",
    PDK: "Minat Perikanan dan Kelautan",
    BDM: "Minat Bisnis dan Manajemen",
    PRW: "Minat Pariwisata",
    SDK: "Minat Seni dan Kerjainan",
    KOR: "Minat Keolahragaan",
  };

  return interestMap[code] || "Unknown Code";
};

export const getInterestDescription2 = (code: string): string => {
  const interestMap: Record<string, string> = {
    AGM: "Keagamaan",
    MTK: "Matematika",
    IPA: "IPA",
    IPS: "IPS",
    BDB: "Bahasa dan Budaya",
    TDR: "Teknologi dan Rekayasa",
    TIK: "Teknologi Informasi dan Komunikasi",
    KES: "Kesehatan",
    AGR: "Agrobisnis dan Agroteknologi",
    PDK: "Perikanan dan Kelautan",
    BDM: "Bisnis dan Manajemen",
    PRW: "Pariwisata",
    SDK: "Seni dan Kerjainan",
    KOR: "Keolahragaan",
  };

  return interestMap[code] || "Unknown Code";
};
