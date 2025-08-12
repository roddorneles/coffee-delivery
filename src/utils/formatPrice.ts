
export function formatPrice(priceInNumber: number) {

    const priceInString = String(priceInNumber);

    const integerPrice = priceInString.split(".")[0];

    let cents;

    if (priceInString.split(".")[1]) {
        cents = priceInString.split(".")[1].slice(0, 2).padEnd(2, "0");
    }
    else {
        cents = "00";
    }


    return `${integerPrice},${cents}`;

} 