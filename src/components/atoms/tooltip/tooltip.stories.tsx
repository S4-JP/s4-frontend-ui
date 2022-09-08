import React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Tooltip } from '../tooltip'
import { Icon } from '../icon'

storiesOf('Components/Atoms/ToolTip', module).add('ToolTip', () => (
  <Wrap>
    <GlobalStyle />
    <FieldGroup>
      <FieldGroupTitle>ToolTip</FieldGroupTitle>
      <Field>
        <Tooltip content={'未対応'}>
          <Icon.StatusBacklog size={24} />
        </Tooltip>
        <Tooltip content={'対応中'}>
          <Icon.StatusProgress size={24} />
        </Tooltip>
        <Tooltip content={'対応済み'}>
          <Icon.StatusDone size={24} />
        </Tooltip>
        <Tooltip content={'対応なし'}>
          <Icon.StatusClosed size={24} />
        </Tooltip>
        <Tooltip content={'未対応'}>
          <Icon.StatusBacklog size={24} />
          <DataStatusDiagnosis>
            <Icon.Error color={Color.COMPONENT.DANGER} />
          </DataStatusDiagnosis>
        </Tooltip>
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
const DataStatusDiagnosis = styled.div`
  position: absolute;
  top: -8px;
  right: -4px;
  width: 16px;
  height: 16px;
`
