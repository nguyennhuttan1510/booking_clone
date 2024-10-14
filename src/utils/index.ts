import { TbRulerMeasure } from "react-icons/tb";
import { IoSnowOutline, IoCheckmark, IoEllipseSharp  } from "react-icons/io5";
const formatCurrency = (currency: number) => {
  return Intl.NumberFormat('vn', {
    style: 'currency',
    currency: 'VND',
  }).format(currency)
}

const convertToPercent = (num: number = 0, total: number = 100) => {
  if(typeof num !== "number" || typeof total !== "number") return 0
  return num / total * 100
}

const PROPERTIES_MAPPING = {
  "1": {
    Icon: TbRulerMeasure
  },"2": {
    Icon: IoSnowOutline
  },
}

const CHOOSE_MAPPING = {
  "1": {
    Icon: IoCheckmark
  },"2": {
    Icon: IoEllipseSharp
  },
}

export type PropertiesMappingType = keyof typeof PROPERTIES_MAPPING
export type ChooseMappingType = keyof typeof CHOOSE_MAPPING

export const Utils = {
  formatCurrency,
  convertToPercent,
  PROPERTIES_MAPPING,
  CHOOSE_MAPPING
}

