export const SALDO_GOFOOD = 2000000;
export const SALDO_QRIS = 600000;
export const SALDO_TOTAL = SALDO_GOFOOD + SALDO_QRIS;

export function formatRp(amount: number) {
  return "Rp" + amount.toLocaleString("id-ID");
}
