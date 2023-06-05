import React from 'react'

function App() {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublish: false },
    { id: 'q2', title: '问卷2', isPublish: true },
    { id: 'q3', title: '问卷3', isPublish: false },
    { id: 'q3', title: '问卷4', isPublish: true }
  ]

  const edit = (id: string) => {
    console.log('编辑', id)
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(({ id, title, isPublish }) => (
          <div key={id}>
            <strong>{title}</strong>
            &nbsp;
            {isPublish ? (
              <span style={{ color: 'green' }}>已发布</span>
            ) : (
              <span style={{ color: 'red' }}>未发布</span>
            )}
            &nbsp;
            <button onClick={() => edit(id)}>编辑问卷</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
