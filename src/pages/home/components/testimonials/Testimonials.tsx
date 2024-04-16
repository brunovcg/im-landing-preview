import { useTranslation } from 'react-i18next';
import './Testimonials.css';
import Configs from 'configs/Configs';
import { VideoIFrame } from 'components';
import ButtonIcon from 'components/button-icon/ButtonIcon';
import useMeasure from 'react-use-measure';
import { useEffect, useState } from 'react';
import { ArrayUtils } from 'utils';

const { TESTIMONIALS } = Configs;

export default function Testimonials() {
  const { t } = useTranslation();
  const [displayList, setDisplayList] = useState<(typeof TESTIMONIALS)[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  const [ref, { width }] = useMeasure();

  const isFirstPosition = currentPosition === 0;
  const isLastPosition = currentPosition === displayList.length - 1;

  const handlePosition = (type: 'add' | 'sub') => () => {
    if (type === 'add' && isLastPosition) return;
    if (type === 'sub' && isFirstPosition) return;

    setCurrentPosition((state) => {
      if (type === 'add') return state + 1;
      return state - 1;
    });
  };

  const cardPlusGapWidth = 290;

  useEffect(() => {
    const maxCount = Math.trunc(width / cardPlusGapWidth);

    const matrix = ArrayUtils.toMatrix(TESTIMONIALS, maxCount);

    setPages(ArrayUtils.createRange(0, matrix.length - 1));

    setDisplayList(matrix);
  }, [width]);

  return (
    <section className="im-testimonials">
      <h2 id="im-testimonials">{t('Pages.Home.Testimonials.Title')}</h2>

      <div className="im-testimonials-videos-container">
        <ButtonIcon icon="arrowLeft" variant="primary" hidden={isFirstPosition} onClick={handlePosition('sub')} size={7} />
        <div className="im-testimonials-videos" ref={ref}>
          {displayList?.[Number(currentPosition)]?.map((item) => (
            <div className="im-testimonials-video-card" key={item.id}>
              <VideoIFrame
                src={item.src + '&autoplay=1&mute=0'}
                thumbnail={item.thumbnail}
                title={item.customer}
                width="260px"
                height="140px"
              />
              <div className="im-testimonial-info">
                <p className="im-testimonial-customer">{item.customer}</p>
                <p className="im-testimonial-company">
                  {item.company} - {item.state}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ButtonIcon icon="arrowRight" variant="primary" hidden={isLastPosition} onClick={handlePosition('add')} size={7} />
      </div>
      <div className="im-pages-icons">
        {pages.map((item) => (
          <ButtonIcon
            key={item}
            icon="dot"
            weight="fill"
            variant={currentPosition === item ? 'primary' : 'grey-light'}
            onClick={() => setCurrentPosition(item)}
            size={5}
          />
        ))}
      </div>
    </section>
  );
}
