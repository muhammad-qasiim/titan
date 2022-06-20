// import Input from '../components/common/Input';
import './event.css';
const Challenge = () => {

  return (
    <>

      <section className="container mx-auto px-24 lg:px-99 py-99">
        <div className='home-container flex gap-8 items-center'>
          <div className='join-img w-full'>
              <img src='assets/image/five.png' alt='Join' />
            </div>
            <div className='w-full'>
            <div className='join-description text-gray-600'>
            Participating Wallet Address: 0x00082759318472987489328745892xkjzc  </div>
        </div>
        </div>
      </section>


      <section className="container mx-auto px-24 lg:px-99 py-99">
        <div className='home-container flex gap-8 items-center'>
          <div className='w-full'>
            <div className='join-description text-gray-600'>
            LEOI is  coming to the cinema on the 28th of July! Our airdrop event is ongoing right now, join our event here :www.titannft.com            </div>
          </div>

          <div className='join-img w-full'>
              <img src='assets/image/leo.png' alt='Join' />
            </div>
        </div>
      </section>

      {/* Time Counter Section Starts Here */}
      <section className="container mx-auto px-24 lg:px-99 py-99">
        <div className='home-container'>
          <div className='counter-section justify-center gap-8'>
            <div className='counter'>
              <p>Days</p>
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

      {/* Join Now Section Ends Here */}
    </>
  )
}

export default Challenge;