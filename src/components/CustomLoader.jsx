import PacmanLoader from 'react-spinners/PacmanLoader';

export function CustomLoader({ progress }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="h-40 w-40">
        <PacmanLoader size={'5rem'} color={'#ffff00'} />
      </div>
      <p className="text-2xl font-semibold rounded-full bg-customBlue text-white mt-4 px-8 py-2">
        Loading: {Math.max(progress, 12.0)}%
      </p>
    </div>
  )
}