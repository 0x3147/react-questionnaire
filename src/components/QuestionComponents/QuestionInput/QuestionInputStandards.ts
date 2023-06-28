export interface IQuestionInputProps {
  title?: string
  placeholder?: string
  onChange?: (newProps: IQuestionInputProps) => void
}

export const QuestionInputDefaultProps = {
  title: '标题输入框',
  placeholder: '请输入标题'
} as IQuestionInputProps
