// import Input from '../components/common/Input';
import './event.css';
const Event = () => {

  return (
    <>
      <div className='home-banner'>
        <section className="container mx-auto px-24 lg:px-99 py-99">
          <div className='home-container'>
            <div className='banner-details'>
              <p>LEIO NFT AIRDROP EVENT</p>
              <div className='titan-actions d-flex'>
                <button>PARTICIPATE NOW</button>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Time Counter Section Starts Here */}
      <section className="container mx-auto px-24 lg:px-99 py-99">
        <div className='home-container'>
          <div className='counter-section'>
            <div className='counter'>
              <p>Days</p>
              <div className='counter-content'>
                21
              </div>
            </div>

            <div className='counter'>
              <p>HOURS</p>
              <div className='counter-content'>
                21
              </div>
            </div>

            <div className='counter'>
              <p>MINUTES</p>
              <div className='counter-content'>
                21
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Time Counter Section Ends Here */}

      {/* Join Now Section Starts Here */}

      <section className="container mx-auto px-24 lg:px-99 py-99">
        <div className='home-container'>
          <div className='join gap-8 items-center'>
            <div className='join-img'>
              <img src='assets/image/king.png' alt='Join' />
            </div>

            <div className='join-description text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className='join-btn'>
            <button type='button'>JOIN NOW</button>
          </div>
        </div>
      </section>
      {/* Join Now Section Ends Here */}
    </>
  )
}

export default Event;