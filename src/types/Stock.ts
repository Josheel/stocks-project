
export type StockKeys = [
  '1. symbol',
  '2. name',
  '3. type',
  '4. region',
  '5. marketOpen',
  '6. marketClose',
  '7. timezone',
  '8. currency',
  '9. matchScore'
];

export type Stock = {
  [K in StockKeys[number]]: string;
};