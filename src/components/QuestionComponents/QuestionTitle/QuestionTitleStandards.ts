export interface IQuestionTitleProps {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean
  onChange?: (newProps: IQuestionTitleProps) => void
}

export const QuestionTitleDefaultProps = {
  text: '一行标题',
  level: 1,
  isCenter: false
} as IQuestionTitleProps
