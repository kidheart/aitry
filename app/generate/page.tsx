'use client';
import { useState } from 'react';

export default function Generate() {
  const [content, setContent] = useState('这是AI生成的内容示例。你可以点击下方按钮导出为Markdown文件，导入到Obsidian。');

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
      <p style={{ color: '#555', marginBottom: 24 }}>输入主题或关键词，AI一键生成文章、脚本、文案等内容。后续可接入AI接口实现真实生成。</p>
      <input
        type="text"
        placeholder="请输入内容主题或关键词"
        style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #eee', marginBottom: 16 }}
        onChange={e => setContent(e.target.value ? `# ${e.target.value}\n\n这是AI生成的内容示例。` : '这是AI生成的内容示例。你可以点击下方按钮导出为Markdown文件，导入到Obsidian。')}
      />
      <button style={{ width: '100%', padding: 12, borderRadius: 6, background: '#1677ff', color: '#fff', border: 'none', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
        生成内容
      </button>
      <button onClick={handleExportMarkdown} style={{ width: '100%', padding: 12, borderRadius: 6, background: '#222', color: '#fff', border: 'none', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
        导出为 Markdown（Obsidian）
      </button>
      <div style={{ marginTop: 32, color: '#888', whiteSpace: 'pre-wrap', background: '#fafbfc', borderRadius: 6, padding: 16 }}>
        {content}
      </div>
    </div>
  );
} 