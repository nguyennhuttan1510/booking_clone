import moment from "moment";
import React, {JSX} from "react";

export const FormatHelper = {
  datetime: (date?: string, formatInput?: string, formatOutput: string ='DD/MM/YYYY', _default: string = '__') => {
    if(!date) return _default
    if(formatInput) {
      return moment(date, formatInput).isValid() ? moment(date, formatInput).format(formatOutput) : _default
    }
    return moment(date).format(formatOutput)
  },
  rating: (number: number | undefined, IconComponent: (key: number) => JSX.Element) => {
    return Array.from({length: number || 0}, (v, i) => IconComponent(i))
  }
}
