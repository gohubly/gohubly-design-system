const cssUnit: { [unit: string]: boolean } = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  "%": true,
};

export interface LengthObject {
  value: number;
  unit: string;
}

export type LengthType = number | string;

export function parseLengthAndUnit(size: number | string): LengthObject {
  if (typeof size === "number") {
    return {
      value: size,
      unit: "px",
    };
  }

  let value: number;
  const valueString: string = (size.match(/^[0-9.]*/) || "").toString();

  if (valueString.includes(".")) {
    value = parseFloat(valueString);
  } else {
    value = parseInt(valueString, 10);
  }

  const unit: string = (size.match(/[^0-9]*$/) || "").toString();

  if (cssUnit[unit]) {
    return {
      value,
      unit,
    };
  }

  return {
    value,
    unit: "px",
  };
}

export function cssValue(value: number | string): string {
  const lengthWithunit = parseLengthAndUnit(value);

  return `${lengthWithunit.value}${lengthWithunit.unit}`;
}
