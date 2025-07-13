'use client';
import { useState } from 'react';

const contents = [
  '如何用AI高效写作？\n\nAI可以帮助你自动生成文章大纲、润色内容、提升写作效率。',
  '内容分发的最佳实践\n\n选择合适的平台、定时推送、分析数据反馈，不断优化内容策略。',
  '自媒体人如何用AI提升效率\n\n利用AI工具批量生成内容、自动排版、智能校对，节省大量时间。',
];

export default function Distribute() {
  const [selected, setSelected] = useState<number[]>([]);
  const [platform, setPlatform] = useState('');
  const [message, setMessage] = useState('');

  const handleSelect = (idx: number) => {
    setSelected(sel => sel.includes(idx) ? sel.filter(i => i !== idx) : [...sel, idx]);
  };

  const handleDistribute = () => {
    if (!selected.length || !platform) {
      setMessage('请先选择内容和分发平台！');
      return;
    }
    setMessage(`已模拟分发${selected.length}条内容到${platform}！`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px #6366f122', padding: 40 }}>
      <h2 style={{ color: '#1677ff', marginBottom: 20, fontSize: 32 }}>内容分发</h2>
      <p style={{ color: '#555', marginBottom: 32, fontSize: 18 }}>
        选择要分发的内容和平台，一键分发到小红书、知乎等新媒体平台，统计分发效果。
      </p>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ margin: 0, color: '#222' }}>选择要分发的内容</h4>
        <ul style={{ margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
          {contents.map((c, i) => {
            const [title, ...bodyArr] = c.split('\n');
            const body = bodyArr.join('\n');
            return (
              <li key={i} style={{ padding: '12px 0', borderBottom: i < contents.length - 1 ? '1px solid #f0f0f0' : 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                <input type="checkbox" checked={selected.includes(i)} onChange={() => handleSelect(i)} style={{ width: 18, height: 18 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#222', marginBottom: 4 }}>{title}</div>
                  <div style={{ color: '#888', fontSize: 15, whiteSpace: 'pre-wrap' }}>{body}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ margin: 0, color: '#222' }}>选择分发平台</h4>
        <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ width: 220, padding: 12, borderRadius: 6, border: '1px solid #eee', fontSize: 16 }}>
          <option value="">请选择分发平台</option>
          <option value="小红书">小红书</option>
          <option value="知乎">知乎</option>
        </select>
      </div>
      <button onClick={handleDistribute} style={{ width: 220, padding: 12, borderRadius: 6, background: '#1677ff', color: '#fff', border: 'none', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
        一键分发
      </button>
      {message && <div style={{ color: '#52c41a', marginTop: 8, fontWeight: 600 }}>{message}</div>}
      <div style={{ marginTop: 48, background: '#fafbfc', borderRadius: 8, padding: 24, color: '#555' }}>
        <h4 style={{ color: '#1677ff', margin: 0, marginBottom: 12 }}>内容分发平台说明</h4>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15 }}>
          <li><b>小红书：</b>适合图文、短视频内容，分发时注意封面、标题和标签优化，内容要有实用性和分享感。</li>
          <li><b>知乎：</b>适合长文、问答、干货内容，分发时注重结构清晰、观点鲜明，适当插入图片提升可读性。</li>
        </ul>
        <div style={{ color: '#888', fontSize: 14, marginTop: 12 }}>
          （本功能为模拟分发，实际可通过平台API或手动发布实现）
        </div>
      </div>
    </div>
  );
} 