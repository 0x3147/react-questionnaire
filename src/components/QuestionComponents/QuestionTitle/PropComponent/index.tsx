import React, { memo, useEffect } from 'react'
import { Form, Input, Checkbox, Select } from 'antd'

import type { FC, ReactNode } from 'react'
import type { IQuestionTitleProps } from '../QuestionTitleStandards'

interface IProps {
  children?: ReactNode
}

type currentProps = IProps & IQuestionTitleProps

const PropComponent: FC<currentProps> = ({
  level,
  text,
  isCenter,
  onChange
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ level, text, isCenter })
  }, [level, text, isCenter])

  /**
   * @desc 表单值改变触发
   * @Author bk0x114
   * @Date 2023-06-28 15:51:58
   * @param
   */
  const handleValuesChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ text, level, isCenter }}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          label="标题内容"
          name="text"
          rules={[{ required: true, message: '标题不能为空' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="层级" name="level">
          <Select
            options={[
              { value: 1, text: 1 },
              { value: 2, text: 2 },
              { value: 3, text: 3 }
            ]}
          />
        </Form.Item>

        <Form.Item name="isCenter" valuePropName="checked">
          <Checkbox>居中显示</Checkbox>
        </Form.Item>
      </Form>
    </>
  )
}

export default memo(PropComponent)
