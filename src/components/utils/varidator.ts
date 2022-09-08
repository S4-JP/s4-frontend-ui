export const composeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )

export const required = (message: string) => (value: any) =>
  value ? undefined : message

export const number = (value: any) => {
  value = value || ''
  if (value === '') {
    return undefined
  }

  return value.match(/^[0-9]+$/) ? undefined : '半角数字で入力してください'
}

export const greaterNumber = (letterOfNumber: any) => (value: any) => {
  letterOfNumber = letterOfNumber || ''
  if (letterOfNumber === '') {
    return undefined
  }
  value = value || ''
  if (value === '') {
    return undefined
  }
  return value.length >= letterOfNumber
    ? undefined
    : `${letterOfNumber}文字以上で入力してください`
}

export const sameValue = (confirmValue: any) => (value: any) => {
  confirmValue = confirmValue || ''
  if (confirmValue === '') {
    return undefined
  }
  value = value || ''
  if (value === '') {
    return undefined
  }

  return value === confirmValue ? undefined : 'パスワードが一致しません'
}

export const postalCode = (value: any) => {
  value = value || ''
  if (value === '') return undefined
  return value.match(/^[0-9]{7}$/) ? undefined : '半角数字7桁で入力してください'
}

export const alphabeticAndNumeric = (value: any) => {
  value = value || ''
  if (value === '') return undefined
  return value.match(/[0-9]+/) && value.match(/[a-zA-Z]+/)
    ? undefined
    : '半角英数字で入力してください'
}

export const email = (value: any) => {
  value = value || ''
  if (value === '') {
    return undefined
  }

  if (!value.match(/^[\s!-~]+$/i)) {
    return 'メールアドレスは半角で入力してください'
  } else if (!value.match(/^.{1,255}$/)) {
    return 'メールアドレスは255文字以下で指定してください'
  } else if (!value.match(/^.{1,64}@/)) {
    return 'メールアドレスに正しい形式を指定してください'
  } else if (
    // @see: https://github.com/jquense/yup/blob/master/src/string.js
    !value.match(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    )
  ) {
    return 'メールアドレスに正しい形式を指定してください'
  } else {
    return undefined
  }
}

export const url = (value: any) => {
  value = value || ''
  if (value === '') {
    return undefined
  }

  return value.match(/^(http|https):\/\/[^ "]+$/)
    ? undefined
    : '正しいURLを入力してください'
}

export const time = (value: any) => {
  value = value || ''
  if (value === '') {
    return undefined
  }

  return value.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)
    ? undefined
    : '正しい時間を入力してください'
}

export const notOnlySpace = (value: any) => {
  value = value || ''
  if (value === '') {
    return undefined
  }

  return value.match(/^( |　)+$/)
    ? 'スペース文字のみでは、入力できません'
    : undefined
}

export const alphabeticAndNumericAndSymbolic = (value: any) => {
  value = value || ''
  if (value === '') return undefined
  return /^(?=.*?[a-zA-Z\d])(?=.*?[!-\/:-@[-`{-~])[!-~]+$/.test(value)
    ? undefined
    : '半角英数および記号を含めて入力してください'
}

export const password = (value: any) => {
  value = value || ''
  if (value === '') return undefined
  return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]+$/.test(
    value
  )
    ? undefined
    : '半角英大文字・小文字・数字・記号をそれぞれ含む必要があります'
}
