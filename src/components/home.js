import Event from './event';
import Story from './story';
import Slide from './slide';
import Media from './media';

function Home() {
  return (
    <div className="">

      <Slide />
      <Story />
      {/* <Gallery /> */}
      <Media />
      <Event />
    </div>
  );
}

export default Home;
