export default function LoadingScreen() {
  return (
    <div className='loading'>
      <div className='loading__box'>
        <div className='loading__text'>
          <div className='loading__text--border loading__width_animation'></div>
          Loading Experience
        </div>
        <div className='loading__bar'>
          <div className='loading__bar--inner'></div>
        </div>
        <div className='loading__counter'>
          <span>0%</span>
          <div className='loading__counter--number'>0%</div>
        </div>
      </div>
    </div>
  );
}
