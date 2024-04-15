import { useTranslation } from 'react-i18next';
import './FAQ.css';

export default function FAQ() {
  const { t } = useTranslation();

  const questionsIds = [1, 2, 3, 4, 5, 6] as const;

  return (
    <section className="im-faq">
      <h2>{t('Pages.Home.FAQ.Title')}</h2>
      <hr />
      <article>
        {questionsIds.map((item) => (
          <div key={item} className="im-question-group">
            <p className="im-question">{t(`Pages.Home.FAQ.Questions.Question${item}`)}</p>
            <p className="im-answer">{t(`Pages.Home.FAQ.Questions.Answer${item}`)}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
