import QuestionTitle from './index'
import { QuestionTitleDefaultProps } from './QuestionTitleStandards'

export * from './QuestionTitleStandards'

export default {
  title: '标题',
  type: 'questionTitle',
  Component: QuestionTitle,
  defaultProps: QuestionTitleDefaultProps
}
