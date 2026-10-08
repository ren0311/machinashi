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

const initialHistory = [
  { label: '昨日', text: '今向かってます。もう少しで着きます。' },
  { label: '先週', text: '少し遅れます。到着予定は 12 分後です。' },
]

function App() {
  const [selectedId, setSelectedId] = useState(templates[0].id)
  const [history, setHistory] = useState(initialHistory)
  const [sentAt, setSentAt] = useState('3分前')

  const selectedTemplate =
    templates.find((template) => template.id === selectedId) ?? templates[0]

  const handleSend = () => {
    const sentText = selectedTemplate.text
    setHistory((prev) => [{ label: '今', text: sentText }, ...prev].slice(0, 3))
    setSentAt('ちょうど今')
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">待ち合わせの安心</p>
          <h1>待ちなし</h1>
        </div>
        <div className="status-pill">待ち合わせ中</div>
      </header>

      <main className="content">
        <section className="card hero-card">
          <div className="hero-copy">
            <p className="label">相手からの返信が来ない</p>
            <h2>待ち時間が不安なとき、すぐ伝えられる</h2>
            <p className="description">
              既読がついていても返信がこないとき、迷わず安心確認を送れるようにします。
            </p>
          </div>
          <div className="status-box">
            <span className="dot" />
            <div>
              <strong>待ち合わせ開始</strong>
              <small>集合時間 18:30</small>
            </div>
          </div>
        </section>

        <section className="card template-panel">
          <div className="panel-header">
            <h3>安心確認テンプレート</h3>
            <span>{sentAt}</span>
          </div>

          <div className="template-list">
            {templates.map((template) => (
              <button
                key={template.id}
                type="button"
                className={template.id === selectedId ? 'template active' : 'template'}
                onClick={() => setSelectedId(template.id)}
              >
                <span>{template.label}</span>
              </button>
            ))}
          </div>

          <div className="preview-box">
            <p className="preview-label">送信内容</p>
            <p>{selectedTemplate.text}</p>
          </div>

          <button type="button" className="send-button" onClick={handleSend}>
            送信する
          </button>
        </section>

        <section className="card history-panel">
          <div className="panel-header">
            <h3>最近の送信履歴</h3>
            <span>3件</span>
          </div>

          <ul className="history-list">
            {history.map((item) => (
              <li key={`${item.label}-${item.text}`}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
