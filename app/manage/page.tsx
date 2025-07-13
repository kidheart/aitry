'use client';

const contents = [
  '如何用AI高效写作？\n\nAI可以帮助你自动生成文章大纲、润色内容、提升写作效率。',
  '内容分发的最佳实践\n\n选择合适的平台、定时推送、分析数据反馈，不断优化内容策略。',
  '自媒体人如何用AI提升效率\n\n利用AI工具批量生成内容、自动排版、智能校对，节省大量时间。',
];

function exportMarkdown(title: string, body: string) {
  const md = `# ${title}\n\n${body}`;
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/[^\w\u4e00-\u9fa5]/g, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Manage() {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #f0f1f2', padding: 32 }}>
      <h2 style={{ color: '#1677ff', marginBottom: 16 }}>内容管理</h2>
      <p style={{ color: '#555', marginBottom: 24 }}>统一管理已生成内容，支持分类、搜索、同步知识库。后续可接入数据库实现真实内容管理。</p>
      <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 16, background: '#fafbfc' }}>
        <h4 style={{ margin: 0, color: '#222' }}>示例内容列表</h4>
        <ul style={{ margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
          {contents.map((c, i) => {
            const [title, ...bodyArr] = c.split('\n');
            const body = bodyArr.join('\n');
            return (
              <li key={i} style={{ padding: '12px 0', borderBottom: i < contents.length - 1 ? '1px solid #f0f0f0' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#222', marginBottom: 4 }}>{title}</div>
                  <div style={{ color: '#888', fontSize: 15, whiteSpace: 'pre-wrap' }}>{body}</div>
                </div>
                <button onClick={() => exportMarkdown(title, body)} style={{ padding: '8px 16px', borderRadius: 6, background: '#222', color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, marginLeft: 8 }}>
                  导出为Markdown
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
} 