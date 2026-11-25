export type FormOrderItem = {
  code: string;
  spec: string;
  price: number;
  sheets: number;
  /** 샘플 이미지 경로. 없으면 샘플 준비 중 안내 */
  sampleImage: string | null;
};

export type FormOrderGroup = {
  name: string;
  items: FormOrderItem[];
};

export type FormOrderCatalogGroup = {
  name: string;
  items: Omit<FormOrderItem, "sampleImage">[];
};

/** 파일명 = 품번 (예: 1001.jpg). 폴더: public/forms/samples/ */
export const formOrderCatalog: FormOrderCatalogGroup[] = [
  {
    name: "거래명세서",
    items: [
      { code: "1001", spec: "연속지(2P)", price: 49500, sheets: 2000 },
      { code: "1002", spec: "A5", price: 47300, sheets: 2000 },
      { code: "1003", spec: "A4", price: 47300, sheets: 2000 },
      { code: "1006", spec: "A4", price: 47300, sheets: 2000 },
      { code: "1007", spec: "A4", price: 47300, sheets: 2000 },
    ],
  },
  {
    name: "급여명세서",
    items: [{ code: "4001", spec: "연속지(2P)", price: 49500, sheets: 2000 }],
  },
  {
    name: "관리비 고지서",
    items: [{ code: "8001", spec: "A4", price: 58300, sheets: 1000 }],
  },
];

export function formatFormPrice(value: number) {
  return `${value.toLocaleString("ko-KR")}원`;
}

export function formatFormSheets(value: number) {
  return `${value.toLocaleString("ko-KR")}매`;
}
