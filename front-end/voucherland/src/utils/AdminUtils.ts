import {IVoucher} from "./types";

/**
 * Sort the given array of voucher by date
 *
 * @param vouchers
 * @return IVoucher[][]
 */
export function SortVoucherByDate(vouchers: IVoucher[]): IVoucher[][] {
    let sortedByDate: IVoucher[][] = [];

    while (vouchers.length) {
        let sortOutOnDate = vouchers[0].expiry;
        let newArray: IVoucher[] = [];
        let voucherCollection = [...vouchers];

        voucherCollection.forEach((voucher: IVoucher) => {
            if (voucher.expiry === sortOutOnDate) {
                newArray.push(voucher);
                vouchers.splice(vouchers.indexOf(voucher, 0), 1);
            }
        });

        sortedByDate.push(newArray);
    }

    return sortedByDate;
}


/**
 * Transforms the given date to a more readable date
 *
 * @param date
 *
 * @return string
 * @example '2022-01-01' becomes 'monday 01 january'
 */
export function SetFullDate(date: string): string {
    let fullDate = "";
    const newDate = new Date(date);

    fullDate =
        newDate.toLocaleDateString("en", {weekday: "long"}).toLowerCase()
        + " " +
        newDate.getDate().toLocaleString()
        + " " +
        newDate.toLocaleDateString("en", {month: "long"}).toLowerCase();

    return fullDate;
}
