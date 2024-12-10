import { FaOpencart } from 'react-icons/fa6'

export default function Products({ product }) {
    const handleAddToCart = () => {
        console.log('hello');
    }
    return (
        <>
            <div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
                <div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
                    <img className='object-cover w-full' src={product?.image} alt='product image' />
                    <div className='absolute inset-0 bg-black bg-opacity-20' />
                </div>

                <div className='mt-4 px-5 pb-5'>
                    <h5 className='text-xl font-semibold tracking-tight text-white'>{product?.name}</h5>
                    <div className='mt-2 mb-5 flex items-center justify-between'>
                        <p>
                            <span className='text-3xl font-bold text-emerald-400'>MRP : ₹{product?.price}</span>
                        </p>
                    </div>
                    <button
                        className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
            text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
                        onClick={handleAddToCart}
                    >
                        <FaOpencart size={22} className='mr-2' />
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}
