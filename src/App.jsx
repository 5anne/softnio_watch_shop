import { FaRegHeart } from 'react-icons/fa'
import './App.css'
import StarRatings from 'react-star-ratings'

function App() {

  return (
    <>
      <div className='flex justify-center items-center gap-12 p-28'>
        <div className='w-1/2'>
          <img className='rounded' src="/src/assets/purple.jpg" alt="" />
        </div>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold text-[#364A63]'>Classy Modern Smart Watch</h1>
          <div className='flex items-center gap-2 mt-4'>
            <StarRatings rating={3.5} starRatedColor='#FFD200' starDimension='24px' starSpacing='4px' />
            <p className='text-[#8091A7]'>(2 Reviews)</p>
          </div>
          <p className='my-4'><strike className="text-xl text-[#8091A7]">$99.00</strike> <span className='text-2xl text-[#816BFF] font-bold'>$79.00</span></p>
          <p className='text-[#8091A7] text-lg'>I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>
          <div className='flex gap-8 my-4'>
            <div>
              <p className='text-[#8091A7]'>Type</p>
              <p className='text-[#364A63] font-bold text-lg'>Watch</p>
            </div>
            <div>
              <p className='text-[#8091A7]'>Model Number</p>
              <p className='text-[#364A63] font-bold text-lg'>Forerunner 290XT</p>
            </div>
          </div>
          <h2 className='text-[#364A63] font-bold text-lg'>Band Color</h2>
          <div className='flex gap-4 my-2'>
            <button className='hover:border-[3px] hover:border-[#816BFF] rounded-full p-[2px]'><p className='bg-[#816BFF] p-2 rounded-full'></p></button>
            <button className='hover:border-[3px] hover:border-[#1FCEC9] rounded-full p-[2px]'><p className='bg-[#1FCEC9] p-2 rounded-full'></p></button>
            <button className='hover:border-[3px] hover:border-[#4B97D3] rounded-full p-[2px]'><p className='bg-[#4B97D3] p-2 rounded-full'></p></button>
            <button className='hover:border-[3px] hover:border-[#3B4747] rounded-full p-[2px]'><p className='bg-[#3B4747] p-2 rounded-full'></p></button>
          </div>
          <h2 className='text-[#364A63] font-bold text-lg'>Wrist Size</h2>
          <div className='flex gap-4 my-4'>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#816BFF]'><span className='font-bold text-black hover:text-[#816BFF]'>S</span> $69</button>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#1FCEC9]'><span className='font-bold text-black hover:text-[#1FCEC9]'>M</span> $79</button>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#4B97D3]'><span className='font-bold text-black hover:text-[#4B97D3]'>L</span> $89</button>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#3B4747]'><span className='font-bold text-black hover:text-[#3B4747]'>XL</span> $99</button>
          </div>
          <div className='flex items-center gap-4'>
            <div><span className='border-2 rounded-l-md px-4 py-2'>-</span><span className='border-y-2 px-6 py-2'>0</span><span className='border-2 rounded-r-md px-4 py-2'>+</span></div>
            <button className='bg-[#6576FF] rounded-md text-white font-semibold px-4 py-2'>Add to Cart</button>
            <span className='text-[#816BFF]'><FaRegHeart /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
