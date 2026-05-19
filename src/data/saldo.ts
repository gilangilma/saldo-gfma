export const SALDO_GOFOOD = 450000;
export const SALDO_QRIS = 130000;
export const SALDO_TOTAL = SALDO_GOFOOD + SALDO_QRIS;

export function formatRp(amount: number) {
  return "Rp" + amount.toLocaleString("id-ID");
}
