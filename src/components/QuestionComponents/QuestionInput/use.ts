import QuestionInput from './index'
import PropComponent from './PropComponent'
import { QuestionInputDefaultProps } from './QuestionInputStandards'

export * from './QuestionInputStandards'

export default {
  title: '输入框',
  type: 'questionInput',
  Component: QuestionInput,
  PropComponent,
  defaultProps: QuestionInputDefaultProps
}
