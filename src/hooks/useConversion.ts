import { useMemo } from 'react';

import { addComma } from '~/utils/number_conversion';

export const UNIT = {
    WON: '원',
    KW: 'kWh',
} as const;

export default function useConversionUnit(
    unit: typeof UNIT[keyof typeof UNIT],
    value: number | undefined
) {
    const conversion = useMemo(() => {
        if (value) {
            if (unit === UNIT.KW) {
                if (value > 100000000) {
                    return { value: addComma(value / 1000000), unit: 'GWh' };
                } else if (value > 100000) {
                    return { value: addComma(value / 1000), unit: 'MWh' };
                }
                return { value: addComma(value), unit: 'kWh' };
            } else if (unit === UNIT.WON) {
                if (value > 100000) {
                    return { value: addComma(value / 1000), unit: '백만원' };
                }
                return { value: addComma(value), unit: '천원' };
            }
        } else return null;
    }, [value]);

    const conversionValue = conversion?.value;
    const conversionUnit = conversion?.unit;

    return [conversionValue, conversionUnit] as const;
}
