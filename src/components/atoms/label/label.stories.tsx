import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  LabelIcon,
  LabelSeverity,
  LabelEmail,
} from '../label'
import GlobalStyle from '../../utils/global-style'
import Color from '../../../const/color'
import styled from 'styled-components'

storiesOf('Components/Atoms/Label', module)
  .add('Status', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Status</FieldGroupTitle>
        <Field>
          <FieldTitle>Status</FieldTitle>
          <GlobalStyle />
          <LabelIcon label={'未対応'} />
          <LabelIcon label={'対応中'} />
          <LabelIcon label={'対応済み'} />
          <LabelIcon label={'対応なし'} />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('Severity', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Severity</FieldGroupTitle>
        <Field>
          <FieldTitle>Severity</FieldTitle>
          <GlobalStyle />
          <LabelSeverity
            severityId={5}
            severity={'緊急'}
            score={10.0}
            small={true}
          />
          <LabelSeverity
            severityId={4}
            severity={'重要'}
            score={7.5}
            small={true}
          />
          <LabelSeverity
            severityId={3}
            severity={'警告'}
            score={5.0}
            small={true}
          />
          <LabelSeverity
            severityId={2}
            severity={'注意'}
            score={2.5}
            small={true}
          />
          <LabelSeverity
            severityId={1}
            severity={'情報'}
            score={0}
            small={true}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('SeverityDetail', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>SeverityDetail</FieldGroupTitle>
        <Field>
          <FieldTitle>SeverityDetail</FieldTitle>
          <GlobalStyle />
          <LabelSeverity
            severityId={5}
            severity={'緊急'}
            score={10.0}
            version={3}
          />
          <LabelSeverity
            severityId={4}
            severity={'重要'}
            score={7.5}
            version={3}
          />
          <LabelSeverity
            severityId={3}
            severity={'警告'}
            score={5.0}
            version={3}
          />
          <LabelSeverity
            severityId={2}
            severity={'注意'}
            score={2.5}
            version={3}
          />
          <LabelSeverity
            severityId={1}
            severity={'情報'}
            score={0}
            version={3}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('Email', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Email</FieldGroupTitle>
        <Field>
          <FieldTitle>Email</FieldTitle>
          <GlobalStyle />
          <LabelWrap>
            <LabelEmail label={'admin@sample.jp'} />
            <LabelEmail label={'admin@sample.jp'} />
            <LabelEmail label={'admin@sample.jp'} />
            <LabelEmail label={'admin@sample.jp'} />
            <LabelEmail label={'admin@sample.jp'} />
          </LabelWrap>
        </Field>
      </FieldGroup>
    </Wrap>
  ))

const Wrap = styled.div`
  display: block;
`
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
  display: block;
  flex-flow: column;
  margin: 0 0 16px 16px;
`
const FieldTitle = styled.p`
  min-width: 150px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
`
const LabelWrap = styled.div`
  width: 480px;
  padding: 4px;
  border-radius: 8px;
  border: solid 1px #c6d6e3;
`
