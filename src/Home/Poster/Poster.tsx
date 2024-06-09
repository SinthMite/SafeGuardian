import React from 'react';
import './Poster.scss';

interface PosterProps {}

const Poster: React.FC<PosterProps> = () => {
    return (
        <div className="Poster">
            <h1>SafeGuardian</h1>
            <div className="input-group">
                <form action="">
                    <input type="submit" value="Search" className="submit-btn" />
                    <input type="text" name="" id="" className="search-input" />
                </form>
            </div>
        </div>
    );
}

export default Poster;
