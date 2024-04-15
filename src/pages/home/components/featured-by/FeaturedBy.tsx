import { useTranslation } from 'react-i18next';
import './FeaturedBy.css';
import INVESTOR_FUEL_LOGO from 'assets/images/logo_investor_fuel.png';
import CARROT_CAST_LOGO from 'assets/images/logo_carrot_cast.png';
import REAL_STATE_DISRUPTORS_LOGO from 'assets/images/logo_real_state_disruptors.png';
import COLLECTIVE_GENIUS_LOGO from 'assets/images/logo_collective_genius.png';
import FLIPNERD_LOGO from 'assets/images/logo_flipnerd.png';
import INVESTOR_FUSE_LOGO from 'assets/images/logo_investor_fuse.png';
import UNCENSORED_LOGO from 'assets/images/logo_uncensored.png';
import REAL_GRIT_LOGO from 'assets/images/logo_real_grit.png';
import UNDERDOG_LOGO from 'assets/images/logo_underdog.png';
import WOLF_LOGO from 'assets/images/logo_wolf.png';
import FLIP_EMPIRE_LOGO from 'assets/images/logo_empire.png';
import CEO_PULSE_LOGO from 'assets/images/logo_ceo_pulse.png';
import PROFIT_FIRST_LOGO from 'assets/images/logo_profit.png';
import DISCOUNT_PROPERTY_INVESTOR_LOGO from 'assets/images/logo_discount.png';
import WINNING_MOVE_LOGO from 'assets/images/logo_winning.png';
import PAVE_THE_WAY_LOGO from 'assets/images/logo_pave.png';
import EAT_SLEEP_INVEST_LOGO from 'assets/images/logo_eat.png';
import CEO_NATION_LOGO from 'assets/images/logo_ceo_nation.png';
import useMeasure from 'react-use-measure';
import { animate, useMotionValue, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function FeaturedBy() {
  const { t } = useTranslation();
  const logos = [
    { key: 1, src: INVESTOR_FUEL_LOGO, alt: 'investor_fuel_logo' },
    { key: 2, src: CARROT_CAST_LOGO, alt: 'carrot_cast_logo' },
    { key: 3, src: REAL_STATE_DISRUPTORS_LOGO, alt: 'real_state_disruptors_logo' },
    { key: 4, src: COLLECTIVE_GENIUS_LOGO, alt: 'collective_genius_logo' },
    { key: 5, src: FLIPNERD_LOGO, alt: 'flipnerd_logo' },
    { key: 6, src: INVESTOR_FUSE_LOGO, alt: 'investor_fuse_logo' },
    { key: 7, src: UNCENSORED_LOGO, alt: 'uncensored_logo' },
    { key: 8, src: REAL_GRIT_LOGO, alt: 'real_grit_logo' },
    { key: 9, src: UNDERDOG_LOGO, alt: 'underdog_logo' },
    { key: 10, src: WOLF_LOGO, alt: 'inside_logo' },
    { key: 11, src: FLIP_EMPIRE_LOGO, alt: 'flip_empire_logo' },
    { key: 12, src: CEO_PULSE_LOGO, alt: 'ceo_pulse_logo' },
    { key: 13, src: PROFIT_FIRST_LOGO, alt: 'profit_first_logo' },
    { key: 14, src: DISCOUNT_PROPERTY_INVESTOR_LOGO, alt: 'discount_property_investor_logo' },
    { key: 15, src: WINNING_MOVE_LOGO, alt: 'winning_move_logo' },
    { key: 16, src: PAVE_THE_WAY_LOGO, alt: 'pave_the_way_logo' },
    { key: 17, src: EAT_SLEEP_INVEST_LOGO, alt: 'eat_sleep_invest_logo' },
    { key: 18, src: CEO_NATION_LOGO, alt: 'the_ceo_nation_logo' },
    { key: 19, src: INVESTOR_FUEL_LOGO, alt: 'investor_fuel_logo' },
    { key: 20, src: CARROT_CAST_LOGO, alt: 'carrot_cast_logo' },
    { key: 21, src: REAL_STATE_DISRUPTORS_LOGO, alt: 'real_state_disruptors_logo' },
    { key: 22, src: COLLECTIVE_GENIUS_LOGO, alt: 'collective_genius_logo' },
    { key: 23, src: FLIPNERD_LOGO, alt: 'flipnerd_logo' },
    { key: 24, src: INVESTOR_FUSE_LOGO, alt: 'investor_fuse_logo' },
    { key: 25, src: UNCENSORED_LOGO, alt: 'uncensored_logo' },
    { key: 26, src: REAL_GRIT_LOGO, alt: 'real_grit_logo' },
    { key: 27, src: UNDERDOG_LOGO, alt: 'underdog_logo' },
    { key: 28, src: WOLF_LOGO, alt: 'inside_logo' },
    { key: 29, src: FLIP_EMPIRE_LOGO, alt: 'flip_empire_logo' },
    { key: 30, src: CEO_PULSE_LOGO, alt: 'ceo_pulse_logo' },
    { key: 31, src: PROFIT_FIRST_LOGO, alt: 'profit_first_logo' },
    { key: 32, src: DISCOUNT_PROPERTY_INVESTOR_LOGO, alt: 'discount_property_investor_logo' },
    { key: 33, src: WINNING_MOVE_LOGO, alt: 'winning_move_logo' },
    { key: 34, src: PAVE_THE_WAY_LOGO, alt: 'pave_the_way_logo' },
    { key: 35, src: EAT_SLEEP_INVEST_LOGO, alt: 'eat_sleep_invest_logo' },
    { key: 36, src: CEO_NATION_LOGO, alt: 'the_ceo_nation_logo' },
  ];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const gapSize = 24;
    const gapNumber = 127.5;
    const listRepetition = 2;

    const finalPosition = -width / listRepetition - gapSize * gapNumber;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return () => controls?.stop();
  }, [xTranslation, width]);

  return (
    <section className="im-featured-by">
      <h2>{t('Pages.Home.FeaturedBy.Title')}</h2>
      <hr />

      <motion.div ref={ref} style={{ x: xTranslation }} className="im-featured-by-logos">
        {logos.map((item) => (
          <img key={item.key} src={item.src} alt={item.alt} style={{ height: '60px' }} />
        ))}
      </motion.div>
    </section>
  );
}
