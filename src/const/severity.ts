import Color from '../const/color'

export default [
  {
    label: '緊急',
    value: 5,
    color: Color.SEVERITY.CRITICAL,
  },
  {
    label: '重要',
    value: 4,
    color: Color.SEVERITY.HIGH,
  },
  {
    label: '警告',
    value: 3,
    color: Color.SEVERITY.MEDIUM,
  },
  {
    label: '注意',
    value: 2,
    color: Color.SEVERITY.LOW,
  },
  {
    label: '情報',
    value: 1,
    color: Color.SEVERITY.INFO,
  },
]
