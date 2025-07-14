'use client';
import { useState } from 'react';

export default function Generate() {
  const [input, setInput] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError('请输入内容主题或关键词');
      return;
    }
    setError('');
    setLoading(true);
    setContent('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      if (data.result) {
        setContent(data.result);
      } else {
        setError(data.error || '生成失败');
      }
    } catch (e) {
      setError('网络错误或服务异常');
    } finally {
      setLoading(false);
    }
  };

  const handleExportMarkdown = () => {
    const md = `# AI内容星球\n\n${content}`;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI内容星球-内容.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #f0f1f2', padding: 32 }}>
      <h2 style={{ color: '#1677ff', marginBottom: 16 }}>AI内容生成</h2>
      <p style={{ color: '#555', marginBottom: 24 }}>输入主题或关键词，AI一键生成文章、脚本、文案等内容。支持腾讯元宝API。</p>
      <input
        type="text"
        placeholder="请输入内容主题或关键词"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #eee', marginBottom: 16 }}
      />
      <button onClick={handleGenerate} disabled={loading} style={{ width: '100%', padding: 12, borderRadius: 6, background: '#1677ff', color: '#fff', border: 'none', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
        {loading ? '生成中...' : '生成内容'}
      </button>
      <button onClick={handleExportMarkdown} disabled={!content} style={{ width: '100%', padding: 12, borderRadius: 6, background: '#222', color: '#fff', border: 'none', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
        导出为 Markdown（Obsidian）
      </button>
      {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
      <div style={{ marginTop: 32, color: '#888', whiteSpace: 'pre-wrap', background: '#fafbfc', borderRadius: 6, padding: 16, minHeight: 120 }}>
        {content || (loading ? 'AI正在生成内容...' : '（这里将展示AI生成的内容结果）')}
      </div>
    </div>
  );
} 