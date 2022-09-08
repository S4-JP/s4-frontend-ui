import React, { useState } from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'

type Props = {
  name?: string
  placeholder?: string
  minDate?: any
  value?: string | null
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputDate: React.FC<Props> = (props: any) => {
  const [selectedDate, setSelectedDate] = useState(null)

  registerLocale('ja', ja)

  return (
    <Wrap data-testid="atoms-f-input-date">
      <InputWrap>
        <DatePickerWrap>
          <DatePicker
            {...props}
            name={props.name}
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date)
              props.onChange(date)
            }}
            minDate={props.minDate && new Date(props.minDate)}
            dateFormat={'yyyy/MM/dd'}
            locale={'ja'}
            placeholderText={props.placeholder ?? '0000/00/00'}
            value={props.value ?? undefined}
            autoComplete={'off'}
          />
        </DatePickerWrap>
      </InputWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
`
const InputWrap = styled.div`
  position: relative;
  display: flex;
`
const DatePickerWrap = styled.div`
  display: flex;

  .react-datepicker-popper {
    z-index: 9999 !important;
  }
  > .react-datepicker-wrapper > .react-datepicker__input-container {
    width: 112px;

    > input {
      width: 100%;
      height: 40px;
      border: 1px solid ${Color.COMPONENT.FORM_BORDER};
      border-radius: 8px;
      padding: 16px;
      font-size: 14px;
      appearance: none;

      &::placeholder {
        color: ${Color.TEXT.LIGHT_GRAY};
      }
    }
  }

  .react-datepicker {
    border: none;
    border-radius: 8px;
    box-shadow: ${Color.ELEVATION.L};
  }

  .react-datepicker__header {
    padding: 16px 16px 8px;
    border: none;
    background: ${Color.COMPONENT.SURFACE};
  }

  .react-datepicker__current-month {
    padding: 10px 0 16px;
    font-size: 14px;
    font-weight: normal;
  }

  .react-datepicker__month {
    margin: 0;
    padding: 0 16px 16px;
  }

  .react-datepicker__day--outside-month {
    color: ${Color.TEXT.GRAY};
  }

  .react-datepicker__navigation {
    top: 20px;

    &--previous {
      left: 20px;
    }

    &--next {
      right: 20px;
    }
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    display: none;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    display: none;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background: ${Color.PRIMARY._500};
    color: ${Color.TEXT.WHITE};
    font-weight: bold;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    background: ${Color.COMPONENT.WHITE_HOVER};
  }
`

export default InputDate
