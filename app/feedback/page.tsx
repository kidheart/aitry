export default function Feedback() {
  return (
    <div style={{ maxWidth: 1200, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px #6366f122', padding: 40 }}>
      <h2 style={{ color: '#1677ff', marginBottom: 20, fontSize: 32 }}>用户反馈</h2>
      <p style={{ color: '#555', marginBottom: 32, fontSize: 18 }}>
        收集用户建议、需求与投稿，持续优化产品。你可以直接在下方表单提交反馈（本表单由 Tally 提供）。
      </p>
      <div style={{ width: '100%', minHeight: 800 }}>
        <iframe
          src="https://tally.so/r/3l2Ggp"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="用户反馈表单"
          style={{ borderRadius: 12, background: '#fafbfc', width: '100%', minHeight: 800, border: 'none', overflow: 'auto' }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
} 