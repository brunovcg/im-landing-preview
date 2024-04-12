import { useEffect } from 'react';
import './Presentation.css';
import { Video } from 'components';
import INTRO_VIDEO from 'assets/videos/houses.mp4';
// import Configs from 'configs/Configs';

// const { previewDemo } = Configs.EXTERNAL_LINKS;

export default function Presentation() {
  useEffect(() => {}, []);

  return (
    <section className="im-presentation">
      <Video height="400px" src={INTRO_VIDEO} loop muted controls={false} style={{ width: '100%', objectFit: 'cover' }} />
      {/* <div className="im-presentation-message">C</div>
      <div className="im-presentation-video">
        <iframe src={previewDemo} title="preview-demo" />
      </div> */}
    </section>
  );
}
