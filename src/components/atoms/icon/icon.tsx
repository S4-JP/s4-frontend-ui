import * as React from 'react'

import IconWrap from './icon-wrap'
import AllIcons from './icon-svgs'

interface Props {
  size?: number
  color: string
}

let Icon: any = {}
Object.keys(AllIcons).map((icon) => {
  Icon[icon] = (props: Props) => <IconWrap glyph={AllIcons[icon]} {...props} />
})

export default Icon
