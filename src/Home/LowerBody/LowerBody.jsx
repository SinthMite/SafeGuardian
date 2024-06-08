import react from 'react'
import './LowerBody.scss'


export default function LowerBody(){
    return(
        <div className="LowerBody">
            <form action="">
                <div className='zipcodeDiv'>
                    <input type="text" name="" id="" className="search-input" />
                    <input type="submit" value="Search" className="submit-btn" />
                </div>
                <div className='OffenseDiv'>
                <input list="browsers" />
                    <datalist id="browsers">
                        <option value="Edge"/>
                        <option value="Chrome"/>
                    </datalist>
                </div>
                <div className='severityDiv'>
                    <input type="text" name="" id="" className="search-input" />
                    <input type="submit" value="Search" className="submit-btn" />
                </div>
            </form>
        </div>
    )
}