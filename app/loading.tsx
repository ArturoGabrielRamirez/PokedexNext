export default function Loading() {
    return (
        <main className="grow flex justify-center items-center">
            <div className='flex flex-col justify-center items-center animate-bounce'>
                <div className='bg-red-700 w-32 h-16 border-black text-white font-bold  border-4 rounded-t-full'>
                </div>
                <div className='absolute bg-white z-10 rounded-full border-black border-4 w-10 h-10 font-bold'></div>
                <div className='border-black text-black bg-white font-bold w-32 h-16 border-4 rounded-b-full' />
                <div />
            </div>
        </main>
    )
}