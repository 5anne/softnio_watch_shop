import { FaRegHeart } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import { useState } from 'react';
import CheckOut from './Components/CheckOut';
import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState('purple');
  const [selectedSize, setSelectedSize] = useState('S');
  const [purpleSItemNumber, setPurpleSItemNumber] = useState(0);
  const [purpleMItemNumber, setPurpleMItemNumber] = useState(0);
  const [purpleLItemNumber, setPurpleLItemNumber] = useState(0);
  const [purpleXLItemNumber, setPurpleXLItemNumber] = useState(0);
  const [cyanSItemNumber, setCyanSItemNumber] = useState(0);
  const [cyanMItemNumber, setCyanMItemNumber] = useState(0);
  const [cyanLItemNumber, setCyanLItemNumber] = useState(0);
  const [cyanXLItemNumber, setCyanXLItemNumber] = useState(0);
  const [blueSItemNumber, setBlueSItemNumber] = useState(0);
  const [blueMItemNumber, setBlueMItemNumber] = useState(0);
  const [blueLItemNumber, setBlueLItemNumber] = useState(0);
  const [blueXLItemNumber, setBlueXLItemNumber] = useState(0);
  const [blackSItemNumber, setBlackSItemNumber] = useState(0);
  const [blackMItemNumber, setBlackMItemNumber] = useState(0);
  const [blackLItemNumber, setBlackLItemNumber] = useState(0);
  const [blackXLItemNumber, setBlackXLItemNumber] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);
  const [active, setActive] = useState(false);
  const [state, setState] = useState(0);

  const handleColorChange = color => {
    setSelectedColor(color);
  }

  const handleWatchSize = size => {
    setSelectedSize(size);
  }

  const handleAddToCart = () => {
    if (itemNumber === 0) {
      alert('Please, Add Item at first!')
      setActive(false);
    }
    if (itemNumber > 0) {
      setActive(true);
    }
  }

  const handleAddItem = () => {
    if (selectedColor === 'purple') {
      if (selectedSize === 'S') {
        setPurpleSItemNumber(purpleSItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'M') {
        setPurpleMItemNumber(purpleMItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'L') {
        setPurpleLItemNumber(purpleLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'XL') {
        setPurpleXLItemNumber(purpleXLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
    }
    if (selectedColor === 'cyan') {
      if (selectedSize === 'S') {
        setCyanSItemNumber(cyanSItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'M') {
        setCyanMItemNumber(cyanMItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'L') {
        setCyanLItemNumber(cyanLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'XL') {
        setCyanXLItemNumber(cyanXLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
    }
    if (selectedColor === 'blue') {
      if (selectedSize === 'S') {
        setBlueSItemNumber(blueSItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'M') {
        setBlueMItemNumber(blueMItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'L') {
        setBlueLItemNumber(blueLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'XL') {
        setBlueXLItemNumber(blueXLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
    }
    if (selectedColor === 'black') {
      if (selectedSize === 'S') {
        setBlackSItemNumber(blackSItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'M') {
        setBlackMItemNumber(blackMItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'L') {
        setBlackLItemNumber(blackLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
      else if (selectedSize === 'XL') {
        setBlackXLItemNumber(blackXLItemNumber + 1);
        setItemNumber(itemNumber + 1);
      }
    }
  }

  const handleDeleteItem = () => {
    if (selectedColor === 'purple') {
      if (selectedSize === 'S') {
        const reducedItem = purpleSItemNumber - 1;
        if (reducedItem >= 0) {
          setPurpleSItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'M') {
        const reducedItem = purpleMItemNumber - 1;
        if (reducedItem >= 0) {
          setPurpleMItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'L') {
        const reducedItem = purpleLItemNumber - 1;
        if (reducedItem >= 0) {
          setPurpleLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'XL') {
        const reducedItem = purpleXLItemNumber - 1;
        if (reducedItem >= 0) {
          setPurpleXLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
    }
    if (selectedColor === 'cyan') {
      if (selectedSize === 'S') {
        const reducedItem = cyanSItemNumber - 1;
        if (reducedItem >= 0) {
          setCyanSItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'M') {
        const reducedItem = cyanMItemNumber - 1;
        if (reducedItem >= 0) {
          setCyanMItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'L') {
        const reducedItem = cyanLItemNumber - 1;
        if (reducedItem >= 0) {
          setCyanLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'XL') {
        const reducedItem = cyanXLItemNumber - 1;
        if (reducedItem >= 0) {
          setCyanXLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
    }
    if (selectedColor === 'blue') {
      if (selectedSize === 'S') {
        const reducedItem = blueSItemNumber - 1;
        if (reducedItem >= 0) {
          setBlueSItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'M') {
        const reducedItem = blueMItemNumber - 1;
        if (reducedItem >= 0) {
          setBlueMItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'L') {
        const reducedItem = blueLItemNumber - 1;
        if (reducedItem >= 0) {
          setBlueLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'XL') {
        const reducedItem = blueXLItemNumber - 1;
        if (reducedItem >= 0) {
          setBlueXLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
    }
    if (selectedColor === 'black') {
      if (selectedSize === 'S') {
        const reducedItem = blackSItemNumber - 1;
        if (reducedItem >= 0) {
          setBlackSItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'M') {
        const reducedItem = blackMItemNumber - 1;
        if (reducedItem >= 0) {
          setBlackMItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'L') {
        const reducedItem = blackLItemNumber - 1;
        if (reducedItem >= 0) {
          setBlackLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
      else if (selectedSize === 'XL') {
        const reducedItem = blackXLItemNumber - 1;
        if (reducedItem >= 0) {
          setBlackXLItemNumber(reducedItem);
          setItemNumber(itemNumber - 1);
        }
      }
    }
    if (itemNumber === 1) {
      setActive(false);
    }
  }

  const bandColors = {
    purple: 'https://i.ibb.co.com/c8QZFMm/purple.jpg',
    cyan: 'https://i.ibb.co.com/HKkfPSP/cyan.jpg',
    blue: 'https://i.ibb.co.com/6yrwLrp/blue.jpg',
    black: 'https://i.ibb.co.com/FD1SFKh/black.jpg',
  }

  const addedItems = [
    {
      id: 1,
      image: "/src/assets/purple.jpg",
      productName: "Classy Modern Smart Watch",
      color: "Purple",
      sizenQnt: [
        { size: 'S', qnt: purpleSItemNumber, price: purpleSItemNumber * 69 },
        { size: 'M', qnt: purpleMItemNumber, price: purpleMItemNumber * 79 },
        { size: 'L', qnt: purpleLItemNumber, price: purpleLItemNumber * 89 },
        { size: 'XL', qnt: purpleXLItemNumber, price: purpleXLItemNumber * 99 },
      ],
      quantity: purpleSItemNumber + purpleMItemNumber + purpleLItemNumber + purpleXLItemNumber,
      price: (purpleSItemNumber * 69) + (purpleMItemNumber * 79) + (purpleLItemNumber * 89) + (purpleXLItemNumber * 99),
    },
    {
      id: 2,
      image: "/src/assets/cyan.jpg",
      productName: "Classy Modern Smart Watch",
      color: "Cyan",
      sizenQnt: [
        { size: 'S', qnt: cyanSItemNumber, price: cyanSItemNumber * 69 },
        { size: 'M', qnt: cyanMItemNumber, price: cyanMItemNumber * 79 },
        { size: 'L', qnt: cyanLItemNumber, price: cyanLItemNumber * 89 },
        { size: 'XL', qnt: cyanXLItemNumber, price: cyanXLItemNumber * 99 },
      ],
      quantity: cyanSItemNumber + cyanMItemNumber + cyanLItemNumber + cyanXLItemNumber,
      price: (cyanSItemNumber * 69) + (cyanMItemNumber * 79) + (cyanLItemNumber * 89) + (cyanXLItemNumber * 99),
    },
    {
      id: 3,
      image: "/src/assets/blue.jpg",
      productName: "Classy Modern Smart Watch",
      color: "Blue",
      sizenQnt: [
        { size: 'S', qnt: blueSItemNumber, price: blueSItemNumber * 69 },
        { size: 'M', qnt: blueMItemNumber, price: blueMItemNumber * 79 },
        { size: 'L', qnt: blueLItemNumber, price: blueLItemNumber * 89 },
        { size: 'XL', qnt: blueXLItemNumber, price: blueXLItemNumber * 99 },
      ],
      quantity: blueSItemNumber + blueMItemNumber + blueLItemNumber + blueXLItemNumber,
      price: (blueSItemNumber * 69) + (blueMItemNumber * 79) + (blueLItemNumber * 89) + (blueXLItemNumber * 99),
    },
    {
      id: 4,
      image: "/src/assets/black.jpg",
      productName: "Classy Modern Smart Watch",
      color: "Black",
      sizenQnt: [
        { size: 'S', qnt: blackSItemNumber, price: blackSItemNumber * 69 },
        { size: 'M', qnt: blackMItemNumber, price: blackMItemNumber * 79 },
        { size: 'L', qnt: blackLItemNumber, price: blackLItemNumber * 89 },
        { size: 'XL', qnt: blackXLItemNumber, price: blackXLItemNumber * 99 },
      ],
      quantity: blackSItemNumber + blackMItemNumber + blackLItemNumber + blackXLItemNumber,
      price: (blackSItemNumber * 69) + (blackMItemNumber * 79) + (blackLItemNumber * 89) + (blackXLItemNumber * 99),
    }
  ]

  return (
    <>
      <div className='lg:flex justify-center items-center gap-12 p-8 md:p-28 roboto'>

        {/* Image */}

        <div className='lg:w-1/2'>
          <img className='rounded' src={bandColors[selectedColor]} alt="" />
        </div>

        {/* Band Color */}

        <div className='flex justify-center items-center gap-4 mt-4 lg:hidden'>
          <button onClick={() => handleColorChange('purple')} className={selectedColor === 'purple' && 'border-[3px] border-[#816BFF] rounded-full p-[2px]'}><p className='bg-[#816BFF] p-2 rounded-full'></p></button>

          <button onClick={() => handleColorChange('cyan')} className={selectedColor === 'cyan' && 'border-[3px] border-[#1FCEC9] rounded-full p-[2px]'}><p className='bg-[#1FCEC9] p-2 rounded-full'></p></button>

          <button onClick={() => handleColorChange('blue')} className={selectedColor === 'blue' && 'border-[3px] border-[#4B97D3] rounded-full p-[2px]'}><p className='bg-[#4B97D3] p-2 rounded-full'></p></button>

          <button onClick={() => handleColorChange('black')} className={selectedColor === 'black' && 'border-[3px] border-[#3B4747] rounded-full p-[2px]'}><p className='bg-[#3B4747] p-2 rounded-full'></p></button>
        </div>

        {/* Description */}

        <div className='lg:w-1/2 mt-10 lg:mt-0'>
          <h1 className='text-4xl font-bold text-[#364A63]'>Classy Modern Smart Watch</h1>
          <div className='flex items-center gap-2 mt-4'>
            <StarRatings rating={3.5} starRatedColor='#FFD200' starDimension='24px' starSpacing='4px' />
            <p className='text-[#8091A7]'>(2 Reviews)</p>
          </div>

          <p className='my-4'><strike className="text-xl text-[#8091A7]">$99.00</strike> <span
            className={state === 0 ? selectedColor === 'purple' ?
              'text-2xl text-[#816BFF] font-bold' : selectedColor === 'cyan' ?
                'text-2xl text-[#1FCEC9] font-bold' : selectedColor === 'blue' ?
                  'text-2xl text-[#4B97D3] font-bold' : selectedColor === 'black' ?
                    'text-2xl text-[#3B4747] font-bold' : 'text-2xl text-[#816BFF] font-bold' :
              'text-2xl text-[#816BFF] font-bold'}>
            {state === 0 ? selectedSize === 'S' ? '$69.00' : selectedSize === 'M' ? '$79.00' : selectedSize === 'L' ? '$89.00' : selectedSize === 'XL' ? '$99.00' : '$69.00' : '$69.00'}
          </span></p>

          <p className='text-[#8091A7] text-lg'>I must explain to you how all this mistaken idea of denouncing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>

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
          <div className='flex gap-2 md:gap-4 my-4'>
            <button onClick={() => handleWatchSize('S')} className={selectedSize === 'S' ? 'border-2 rounded-md px-4 py-2 border-[#816BFF]' : 'border-2 rounded-md px-4 py-2 hover:border-[#816BFF]'}><span className={selectedSize === 'S' ? 'font-bold text-[#816BFF]' : 'font-bold text-black hover:text-[#816BFF]'}>S</span> $69</button>

            <button onClick={() => handleWatchSize('M')} className={selectedSize === 'M' ? 'border-2 rounded-md px-4 py-2 border-[#1FCEC9]' : 'border-2 rounded-md px-4 py-2 hover:border-[#1FCEC9]'}><span className={selectedSize === 'M' ? 'font-bold text-[#1FCEC9]' : 'font-bold text-black hover:text-[#1FCEC9]'}>M</span> $79</button>

            <button onClick={() => handleWatchSize('L')} className={selectedSize === 'L' ? 'border-2 rounded-md px-4 py-2 border-[#4B97D3]' : 'border-2 rounded-md px-4 py-2 hover:border-[#4B97D3]'}><span className={selectedSize === 'L' ? 'font-bold text-[#4B97D3]' : 'font-bold text-black hover:text-[#4B97D3]'}>L</span> $89</button>

            <button onClick={() => handleWatchSize('XL')} className={selectedSize === 'XL' ? 'border-2 rounded-md px-4 py-2 border-[#3B4747]' : 'border-2 rounded-md px-4 py-2 hover:border-[#3B4747]'}><span className={selectedSize === 'XL' ? 'font-bold text-[#3B4747]' : 'font-bold text-black hover:text-[#3B4747]'}>XL</span> $99</button>
          </div>

          {/* Add To Cart */}

          <div className='md:flex items-center gap-4'>
            <div>
              <button onClick={handleDeleteItem} className='border-2 rounded-l-md px-4 py-2'>-</button>
              {
                selectedColor === 'purple' ?
                  selectedSize === 'S' ?
                    <button className='border-y-2 px-6 py-2'>{purpleSItemNumber}</button> :
                    selectedSize === 'M' ?
                      <button className='border-y-2 px-6 py-2'>{purpleMItemNumber}</button> :
                      selectedSize === 'L' ?
                        <button className='border-y-2 px-6 py-2'>{purpleLItemNumber}</button> :
                        selectedSize === 'XL' ?
                          <button className='border-y-2 px-6 py-2'>{purpleXLItemNumber}</button> :
                          <></> : <></>
              }
              {
                selectedColor === 'cyan' ?
                  selectedSize === 'S' ?
                    <button className='border-y-2 px-6 py-2'>{cyanSItemNumber}</button> :
                    selectedSize === 'M' ?
                      <button className='border-y-2 px-6 py-2'>{cyanMItemNumber}</button> :
                      selectedSize === 'L' ?
                        <button className='border-y-2 px-6 py-2'>{cyanLItemNumber}</button> :
                        selectedSize === 'XL' ?
                          <button className='border-y-2 px-6 py-2'>{cyanXLItemNumber}</button> :
                          <></> : <></>
              }
              {
                selectedColor === 'blue' ?
                  selectedSize === 'S' ?
                    <button className='border-y-2 px-6 py-2'>{blueSItemNumber}</button> :
                    selectedSize === 'M' ?
                      <button className='border-y-2 px-6 py-2'>{blueMItemNumber}</button> :
                      selectedSize === 'L' ?
                        <button className='border-y-2 px-6 py-2'>{blueLItemNumber}</button> :
                        selectedSize === 'XL' ?
                          <button className='border-y-2 px-6 py-2'>{blueXLItemNumber}</button> :
                          <></> : <></>
              }
              {
                selectedColor === 'black' ?
                  selectedSize === 'S' ?
                    <button className='border-y-2 px-6 py-2'>{blackSItemNumber}</button> :
                    selectedSize === 'M' ?
                      <button className='border-y-2 px-6 py-2'>{blackMItemNumber}</button> :
                      selectedSize === 'L' ?
                        <button className='border-y-2 px-6 py-2'>{blackLItemNumber}</button> :
                        selectedSize === 'XL' ?
                          <button className='border-y-2 px-6 py-2'>{blackXLItemNumber}</button> :
                          <></> : <></>
              }
              <button onClick={handleAddItem} className='border-2 rounded-r-md px-4 py-2'>+</button>
            </div>
            <button onClick={handleAddToCart} className='bg-[#6576FF] rounded-md text-white font-semibold px-4 py-2 my-4 md:my-0'>Add to Cart</button>
            <span className='text-[#816BFF]'><FaRegHeart /></span>
          </div>
        </div>
      </div>

      {/* Check Out */}

      {
        active &&
        <div className='flex justify-center animate-bounce mb-20 roboto'>
          <button className='bg-[#FFBB5A] text-[#364A63] font-bold rounded-3xl py-3 px-6' onClick={() => document.getElementById('my_modal_5').showModal()}>Checkout <button className='bg-white text-black px-2 rounded-lg'>{itemNumber}</button></button>
          <CheckOut addedItems={addedItems}></CheckOut>
        </div>
      }
    </>
  )
}

export default App;
