import { useTranslation } from 'react-i18next';
import './Testimonials.css';
import Configs from 'configs/Configs';
import { ButtonIcon } from 'components';
import { useMemo, useState } from 'react';
import { ArrayUtils } from 'utils';
import { useElementSize } from 'hooks';
import TestimonialVideoCard from './components/testimonial-video-card/TestimonialVideoCard';

const { TESTIMONIALS } = Configs;

export default function Testimonials() {
  const { t } = useTranslation();

  const [currentPosition, setCurrentPosition] = useState(0);

  const { ref: elementSizeRef, width } = useElementSize();

  const cardPlusGapWidth = 280;

  const list = useMemo(() => {
    const maxCount = Math.trunc(width / cardPlusGapWidth);

    const matrix = ArrayUtils.toMatrix(TESTIMONIALS, maxCount);

    return {
      matrix,
      pages: ArrayUtils.createRange(0, matrix.length - 1),
    };
  }, [width]);

  const isFirstPosition = currentPosition === 0;
  const isLastPosition = currentPosition === list.matrix.length - 1;

  const handlePosition = (type: 'add' | 'sub') => () => {
    if (type === 'add' && isLastPosition) return;
    if (type === 'sub' && isFirstPosition) return;

    setCurrentPosition((state) => {
      if (type === 'add') return state + 1;
      return state - 1;
    });
  };

  return (
    <section className="im-testimonials">
      <h2 id="im-testimonials">{t('Pages.Home.Testimonials.Title')}</h2>

      <div className="im-testimonials-videos-container">
        <ButtonIcon icon="arrowLeft" variant="primary" hidden={isFirstPosition} onClick={handlePosition('sub')} size={7} />
        <div className="im-testimonials-videos" ref={elementSizeRef}>
          {list.matrix?.[Number(currentPosition)]?.map((item) => <TestimonialVideoCard key={item.id} item={item} />)}
        </div>

        <ButtonIcon icon="arrowRight" variant="primary" hidden={isLastPosition} onClick={handlePosition('add')} size={7} />
      </div>
      <div className="im-pages-icons">
        {list.pages.map((item) => (
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
