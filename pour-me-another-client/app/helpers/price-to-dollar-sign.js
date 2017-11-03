import { helper } from '@ember/component/helper';

export function priceToDollarSign([priceNum]) {
    const sign = '$';

    return sign.repeat(priceNum);
}

export default helper(priceToDollarSign);
