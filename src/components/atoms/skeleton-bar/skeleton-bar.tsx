import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'

type Props = {
  baseColor?: string
  width?: number
  height?: number
  borderRadius?: number
  marginBottom?: number
}

const SkeletonBar: React.FC<Props> = (props) => {
  return (
    <StyledSkeleton
      baseColor={props.baseColor}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
      marginBottom={props.marginBottom}
    />
  )
}

const StyledSkeleton = styled(Skeleton)<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : 'auto'};
`

export default SkeletonBar
