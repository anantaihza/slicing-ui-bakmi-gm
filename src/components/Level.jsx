import LevelSteps from './LevelSteps';

export default function Level() {
  return (
    <div className="mt-8 px-5 py-5 xl:px-10 rounded-sm shadow-[0px_2px_4px_2px_rgba(0,_0,_0,_0.1)] text-primaryText">
      <div className="flex justify-between items-center">
        <h4 className="font-black text-lg">Your Level</h4>
        <a href='' className="font-black text-sm text-secondaryText hover:text-linkText uppercase tracking-wide">Learn More</a>
      </div>
      <LevelSteps />
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6">
        <div
          className="bg-secondaryText h-2.5 rounded-full"
          style={{ width: '60%' }}
        />
      </div>
      <p className='mt-3'>Spend <b>3,500,001</b> by <b>23 Nov 2024</b> to reach <b>Gold</b></p>
    </div>
  );
}
