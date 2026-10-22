import { useState } from 'react'
import './App.css'

const templates = [
  {
    id: 'late',
    label: '少し遅れます',
    text: 'ごめん、少し遅れます。今向かってます。到着予定は 10 分後です。',
  },
  {
    id: 'enroute',
    label: '今向かってます',
    text: '今出発してます。もう少しで着きます。少しだけ待っていてください。',
  },
  {
    id: 'confirm',
    label: '確認したいです',
    text: '連絡が遅れていて心配していました。今どのくらいで着けそうですか？',
  },
]

const historyList = [
  { label: '昨日', text: '今向かってます。もう少しで着きます。' },
  { label: '先週', text: '少し遅れます。到着予定は 12 分後です。' },
]

function App() {
  const [selectedId, setSelectedId] = useState(templates[0].id)
  const [history, setHistory] = useState(historyList)

  const selectedTemplate =
    templates.find((template) => template.id === selectedId) ?? templates[0]

  const handleSend = () => {
    setHistory((prev) => [{ label: '今', text: selectedTemplate.text }, ...prev].slice(0, 3))
  }

  return (
    <div className="app-shell">
      <header className="line-header">
        <div className="header-left">
          <button type="button" className="back-button">‹</button>
          <div className="profile-wrap">
            <div className="profile-avatar">待</div>
            <div>
              <h1>待ちなし</h1>
              <span>待ち合わせ中</span>
            </div>
          </div>
        </div>
        <button type="button" className="menu-button">⋯</button>
      </header>

      <main className="line-chat">
        <div className="day-label">今日は</div>

        <div className="message-row incoming">
          <div className="bubble">
            <p>返信が来ないとき、すぐ伝えられるようにしておこう。</p>
          </div>
        </div>

        <div className="message-row outgoing">
          <div className="bubble bubble-green">
            <p>少し遅れます。今向かってます。</p>
          </div>
        </div>

        <div className="message-row incoming">
          <div className="bubble">
            <p>かしこまりました。到着予定を伝えておくと安心ですよ。</p>
          </div>
        </div>

        <section className="quick-reply">
          <p className="section-label">安心確認</p>
          <div className="template-grid">
            {templates.map((template) => (
              <button
                key={template.id}
                type="button"
                className={template.id === selectedId ? 'template active' : 'template'}
                onClick={() => setSelectedId(template.id)}
              >
                {template.label}
              </button>
            ))}
          </div>

          <div className="preview-box">
            <p>{selectedTemplate.text}</p>
          </div>
        </section>

        <section className="history-box">
          <div className="history-header">
            <p className="section-label">履歴</p>
            <span>3件</span>
          </div>

          <ul className="history-list">
            {history.map((item) => (
              <li key={`${item.label}-${item.text}`}>
                <span>{item.label}</span>
                <strong>{item.text}</strong>
              </li>
            ))}
          </ul>
        </section>

        <div className="composer-bar">
          <button type="button" className="plus-button">＋</button>
          <div className="input-box">{selectedTemplate.text}</div>
          <button type="button" className="send-button" onClick={handleSend}>送信</button>
        </div>
      </main>
    </div>
  )
}

export default App
