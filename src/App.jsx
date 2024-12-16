import { FaRegHeart } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import { useState } from 'react';
import CheckOut from './Components/CheckOut';
import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState('purple');
  const [purpleItemNumber, setPurpleItemNumber] = useState(0);
  const [cyanItemNumber, setCyanItemNumber] = useState(0);
  const [blueItemNumber, setBlueItemNumber] = useState(0);
  const [blackItemNumber, setBlackItemNumber] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);
  const [active, setActive] = useState(false);

  const handleColorChange = color => {
    setSelectedColor(color);
  }

  const handleAddToCart = () => {
    if (purpleItemNumber === 0 && cyanItemNumber === 0 && blueItemNumber === 0 && blackItemNumber === 0) {
      alert('Please, Add Item at first!')
      setActive(false);
    }
    if (purpleItemNumber > 0 || cyanItemNumber > 0 || blueItemNumber > 0 || blackItemNumber > 0) {
      setActive(true);
    }
  }

  const handleAddItem = () => {
    if (selectedColor === 'purple') {
      setPurpleItemNumber(purpleItemNumber + 1);
      setItemNumber(itemNumber + 1);
    }
    if (selectedColor === 'cyan') {
      setCyanItemNumber(cyanItemNumber + 1);
      setItemNumber(itemNumber + 1);
    }
    if (selectedColor === 'blue') {
      setBlueItemNumber(blueItemNumber + 1);
      setItemNumber(itemNumber + 1);
    }
    if (selectedColor === 'black') {
      setBlackItemNumber(blackItemNumber + 1);
      setItemNumber(itemNumber + 1);
    }
  }

  const handleDeleteItem = () => {
    if (selectedColor === 'purple') {
      const reducedItem = purpleItemNumber - 1;
      if (reducedItem >= 0) {
        setPurpleItemNumber(reducedItem);
        setItemNumber(itemNumber - 1);
      }
    }
    if (selectedColor === 'cyan') {
      const reducedItem = cyanItemNumber - 1;
      if (reducedItem >= 0) {
        setCyanItemNumber(reducedItem);
        setItemNumber(itemNumber - 1);
      }
    }
    if (selectedColor === 'blue') {
      const reducedItem = blueItemNumber - 1;
      if (reducedItem >= 0) {
        setBlueItemNumber(reducedItem);
        setItemNumber(itemNumber - 1);
      }
    }
    if (selectedColor === 'black') {
      const reducedItem = blackItemNumber - 1;
      if (reducedItem >= 0) {
        setBlackItemNumber(reducedItem);
        setItemNumber(itemNumber - 1);
      }
    }
    if (purpleItemNumber === 0 && cyanItemNumber === 0 && blueItemNumber === 0 && blackItemNumber === 0) {
      setActive(false);
    }
  }


  const bandColors = {
    purple: '/src/assets/purple.jpg',
    cyan: '/src/assets/cyan.jpg',
    blue: '/src/assets/blue.jpg',
    black: '/src/assets/black.jpg',
  }

  return (
    <>
      <div className='flex justify-center items-center gap-12 p-28'>

        {/* Image */}

        <div className='w-1/2'>
          <img className='rounded' src={bandColors[selectedColor]} alt="" />
        </div>

        {/* Description */}

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

          {/* Band color */}

          <h2 className='text-[#364A63] font-bold text-lg'>Band Color</h2>
          <div className='flex gap-4 my-2'>
            <button onClick={() => handleColorChange('purple')} className={selectedColor === 'purple' && 'border-[3px] border-[#816BFF] rounded-full p-[2px]'}><p className='bg-[#816BFF] p-2 rounded-full'></p></button>

            <button onClick={() => handleColorChange('cyan')} className={selectedColor === 'cyan' && 'border-[3px] border-[#1FCEC9] rounded-full p-[2px]'}><p className='bg-[#1FCEC9] p-2 rounded-full'></p></button>

            <button onClick={() => handleColorChange('blue')} className={selectedColor === 'blue' && 'border-[3px] border-[#4B97D3] rounded-full p-[2px]'}><p className='bg-[#4B97D3] p-2 rounded-full'></p></button>

            <button onClick={() => handleColorChange('black')} className={selectedColor === 'black' && 'border-[3px] border-[#3B4747] rounded-full p-[2px]'}><p className='bg-[#3B4747] p-2 rounded-full'></p></button>
          </div>

          {/* Wrist Size */}

          <h2 className='text-[#364A63] font-bold text-lg'>Wrist Size</h2>
          <div className='flex gap-4 my-4'>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#816BFF]'><span className='font-bold text-black hover:text-[#816BFF]'>S</span> $69</button>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#1FCEC9]'><span className='font-bold text-black hover:text-[#1FCEC9]'>M</span> $79</button>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#4B97D3]'><span className='font-bold text-black hover:text-[#4B97D3]'>L</span> $89</button>
            <button className='border-2 rounded-md text-[#8091A7] px-4 py-2 hover:border-[#3B4747]'><span className='font-bold text-black hover:text-[#3B4747]'>XL</span> $99</button>
          </div>

          {/* Add To Cart */}

          <div className='flex items-center gap-4'>
            <div>
              <button onClick={handleDeleteItem} className='border-2 rounded-l-md px-4 py-2'>-</button>
              {
                selectedColor === 'purple' && <button className='border-y-2 px-6 py-2'>{purpleItemNumber}</button>
              }
              {
                selectedColor === 'cyan' && <button className='border-y-2 px-6 py-2'>{cyanItemNumber}</button>
              }
              {
                selectedColor === 'blue' && <button className='border-y-2 px-6 py-2'>{blueItemNumber}</button>
              }
              {
                selectedColor === 'black' && <button className='border-y-2 px-6 py-2'>{blackItemNumber}</button>
              }
              <button onClick={handleAddItem} className='border-2 rounded-r-md px-4 py-2'>+</button>
            </div>
            <button onClick={handleAddToCart} className='bg-[#6576FF] rounded-md text-white font-semibold px-4 py-2'>Add to Cart</button>
            <span className='text-[#816BFF]'><FaRegHeart /></span>
          </div>
        </div>
      </div>

      {/* Check Out */}

      {
        active &&
        <div className='flex justify-center animate-bounce mb-20'>
          <button className='bg-[#FFBB5A] text-[#364A63] font-bold rounded-3xl py-3 px-6' onClick={() => document.getElementById('my_modal_5').showModal()}>Checkout <button className='bg-white text-black px-2 rounded-lg'>{itemNumber}</button></button>
          <CheckOut></CheckOut>
        </div>
      }
    </>
  )
}

export default App
