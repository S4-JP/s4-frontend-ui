import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'
import Modal from '../modal'
import { Button } from '../../../index'

const handleClick = () => {}
const setIsShow = (args) => {}

storiesOf('Components/molecules/Modal', module)
  .add('Modal', () => {
    const [isShow, setIsShow] = useState<boolean>(false)

    return (
      <Wrap>
        <GlobalStyle />
        <Button
          label="OPEN"
          handleClick={() => {
            setIsShow(true)
          }}
        />
        <Modal
          title={'許可メールアドレスを登録'}
          submit={{
            label: '送信',
            buttonType: 'primary',
          }}
          isShow={isShow}
          handleClickSubmit={() => console.log('handleClickSubmit')}
        />
      </Wrap>
    )
  })
  .add('Cancel', () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
      <Wrap>
        <GlobalStyle />
        <Button
          label="OPEN"
          handleClick={() => {
            setIsShow(true)
          }}
        />
        <Modal isShow={isShow} title={'許可メールアドレスを登録'} />
      </Wrap>
    )
  })

const Wrap = styled.div``
