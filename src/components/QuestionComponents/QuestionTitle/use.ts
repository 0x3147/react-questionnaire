import QuestionTitle from './index'
import PropComponent from './PropComponent'
import { QuestionTitleDefaultProps } from './QuestionTitleStandards'

export * from './QuestionTitleStandards'

export default {
  title: '标题',
  type: 'questionTitle',
  Component: QuestionTitle,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps
}
