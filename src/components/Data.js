
import './Data.css';

const Data = ( { dataName, minVal, maxVal } ) => {
    return (
        <div className='data-item'>
            <p>{dataName}</p>
            <span className='current-data-value'>$100</span>
            <input type='range' min={minVal} max={maxVal} />
            <div className='min-and-max-data-value'>
                <p className='min-data-value'>{'$ ' + minVal}</p>
                <p className='max-data-value'>{'$ ' + maxVal}</p>
            </div>
        </div>
    )
}

export default Data;
