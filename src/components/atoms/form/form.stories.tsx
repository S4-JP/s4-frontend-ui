import React from 'react'
import { storiesOf } from '@storybook/react'
import Color from '../../../const/color'
import {
  InputText,
  InputDate,
  Checkbox,
  RadioButton,
  ToggleButton,
  Select,
} from '../form'
import { Icon } from '../icon'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

const data = [
  {
    value: 'a',
    label: '小田真司',
    image: '/sample.jpg',
  },
  {
    value: 'b',
    label: 'b',
  },
  {
    value: 'あああ',
    label: 'ああああああああああああああああああああああああ',
  },
  {
    value: 'いいい',
    label: 'いいい',
  },
  {
    value: 'ううう',
    label: 'ううう',
  },
  {
    value: 'えええ',
    label: 'えええ',
  },
]

storiesOf('Components/Atoms/From', module)
  .add('InputText', () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <FieldGroupTitle>Props: size</FieldGroupTitle>
        <Field>
          <FieldTitle>S（80px）</FieldTitle>
          <InputText size={'S'} />
        </Field>
        <Field>
          <FieldTitle>M（104px）</FieldTitle>
          <InputText size={'M'} />
        </Field>
        <Field>
          <FieldTitle>L（240px）</FieldTitle>
          <InputText size={'L'} />
        </Field>
        <Field>
          <FieldTitle>XL（320px）</FieldTitle>
          <InputText size={'XL'} />
        </Field>
        <Field>
          <FieldTitle>XXL（480px）</FieldTitle>
          <InputText size={'XXL'} />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <FieldGroupTitle>Props: icon</FieldGroupTitle>
        <Field>
          <FieldTitle>icon</FieldTitle>
          <InputText
            size={'L'}
            icon={<Icon.Cation color={Color.TEXT.GRAY} />}
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <FieldGroupTitle>Props: disabled</FieldGroupTitle>
        <Field>
          <FieldTitle>disabled</FieldTitle>
          <InputText size={'L'} disabled={true} value={'インプットフォーム'} />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <FieldGroupTitle>Props: invalidMessage</FieldGroupTitle>
        <Field>
          <FieldTitle>invalidMessage</FieldTitle>
          <InputText
            size={'L'}
            value={'インプットフォーム'}
            invalidMessage={'ここにエラー文言が入ります'}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('InputDate', () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <FieldGroupTitle>Standard</FieldGroupTitle>
        <Field>
          <FieldTitle>datepicker</FieldTitle>
          <InputDate placeholder={'0000/00/00'} />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('Checkbox', () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <FieldGroupTitle>Props: checked</FieldGroupTitle>
        <Field>
          <FieldTitle>true</FieldTitle>
          <Checkbox labelName={'checkbox'} checked={true} small={false} />
        </Field>
        <Field>
          <FieldTitle>false</FieldTitle>
          <Checkbox labelName={'checkbox'} checked={false} small={false} />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <FieldGroupTitle>Checkbox small</FieldGroupTitle>
        <Field>
          <FieldTitle>true</FieldTitle>
          <Checkbox labelName={'checkbox'} checked={true} small={true} />
        </Field>
        <Field>
          <FieldTitle>false</FieldTitle>
          <Checkbox labelName={'checkbox'} checked={false} small={true} />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('RadioButton', () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <FieldGroupTitle>Props: checked</FieldGroupTitle>
        <Field>
          <FieldTitle>true</FieldTitle>
          <RadioButton labelName={'radiobutton'} checked={true} />
        </Field>
        <Field>
          <FieldTitle>false</FieldTitle>
          <RadioButton labelName={'radiobutton'} checked={false} />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('ToggleButton', () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <FieldGroupTitle>Props: checked</FieldGroupTitle>
        <Field>
          <FieldTitle>true</FieldTitle>
          <ToggleButton checked={true} />
        </Field>
        <Field>
          <FieldTitle>false</FieldTitle>
          <ToggleButton checked={false} />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('Select', () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <FieldGroupTitle>Props: positionTop</FieldGroupTitle>
        <Field>
          <FieldTitle>true</FieldTitle>
          <Select name={'select'} defaultData={data[0]} data={data} />
        </Field>
        <Field>
          <FieldTitle>false</FieldTitle>
          <Select name={'select'} defaultData={data[0]} data={data} top />
        </Field>
      </FieldGroup>
    </Wrap>
  ))

const Wrap = styled.div``
const FieldGroup = styled.div`
  margin-bottom: 32px;
`
const FieldGroupTitle = styled.div`
  margin-bottom: 16px;
  padding: 8px;
  border-bottom: 1px solid ${Color.COMPONENT.FORM_BORDER};
  font-size: 16px;
  font-weight: 600;
`
const Field = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 16px;
`
const FieldTitle = styled.p`
  min-width: 150px;
  font-size: 12px;
  font-weight: 500;
`
