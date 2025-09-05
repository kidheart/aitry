import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import styles from './feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>用户反馈</Title>
      <Paragraph className={styles.description}>
        收集用户建议、需求与投稿，持续优化产品。你可以直接在下方表单提交反馈（本表单由 Tally 提供）。
      </Paragraph>
      <div className={`${styles.iframeContainer} card`}>
        <iframe
          src="https://tally.so/r/3l2Ggp"
          className={styles.iframe}
          title="用户反馈表单"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
} 