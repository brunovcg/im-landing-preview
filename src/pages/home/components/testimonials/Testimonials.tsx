import { useTranslation } from 'react-i18next';
import './Testimonials.css';
import Configs from 'configs/Configs';
import { VideoIFrame } from 'components';

const { TESTIMONIALS } = Configs;

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="im-testimonials">
      <h2 id="im-testimonials">{t('Pages.Home.Testimonials.Title')}</h2>
      <div className="im-testimonials-videos">
        {TESTIMONIALS.map((item) => (
          <div className="im-testimonials-video-card" key={item.id}>
            <VideoIFrame src={item.src} thumbnail={item.thumbnail} title={item.customer} autoplay={false} width="300px" height="169px" />
            <div className="im-testimonial-info">
              <p className="im-testimonial-customer">{item.customer}</p>
              <p className="im-testimonial-company">
                {item.company} - {item.state}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
