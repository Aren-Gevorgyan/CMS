const regexColor =
  /^(?:[a-zA-Z]+|#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}|[0-9a-fA-F]{4}))$/

const regexOnlyString = /.*[^\d].*/

export const validation =
  (type: string) =>
  (Rule: any): boolean | string =>
    Rule.custom((value: string | number | undefined) => {
      if (!value) return true
      const errorText = `${type}  is required`
      if (typeof value === 'string') return value.length ? true : errorText
      return value > 0 ? true : errorText
    })

export const validationImage =
  (type: string) =>
  (Rule: any): boolean | string =>
    Rule.custom((value: {asset: {_ref: string}}) => {
      if (!value) return true
      const errorText = `${type}  is required`
      return !!value?.asset?._ref ? true : errorText
    })

export const validationDescription =
  (type: string) =>
  (Rule: any): boolean | string =>
    Rule.custom((value: any) => {
      const errorText = `${type}  is required`
      return value ? true : errorText
    })

export const colorValidation = (Rule: any): boolean | string =>
  Rule.custom((value: Array<string>) => {
    if (!value || !value.length) return true
    const checkValues = value.every((val: string) => val.match(regexColor))
    return checkValues ? true : 'Please enter a valid color code like these (black, #ffcc55, ...)'
  })

export const validationStrings =
  (type: string) =>
  (Rule: any): boolean | string =>
    Rule.custom((value: Array<string>) => {
      if (!value || !value.length) return true
      const checkValues = value.every((val: string) => val.match(regexOnlyString))
      return checkValues ? true : `Please enter a valid ${type}, ${type} can only be the text`
    })
