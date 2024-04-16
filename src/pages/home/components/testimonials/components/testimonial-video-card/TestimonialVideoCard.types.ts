import Configs from 'configs/Configs';

const { TESTIMONIALS } = Configs;

export type TestimonialVideoCardProps = {
  item: (typeof TESTIMONIALS)[number];
};
