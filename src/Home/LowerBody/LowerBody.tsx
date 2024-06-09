import React from 'react';
import './LowerBody.scss';

interface LowerBodyProps {
    
}

const LowerBody: React.FC<LowerBodyProps> = () => {
    return (
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
    );
};

export default LowerBody;
