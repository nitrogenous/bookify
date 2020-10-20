import React from 'react';

const BookItem = (props) => {
    const { details } = props;

    return (
        <a href={details.infoLink} target='_blank' rel='noopener noreferrer' className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={!!details.imageLinks ? details.imageLinks.thumbnail : '' } alt='book-cover' draggable='false' />
                </div>
                <div className="content">
                    <div className="header">{details.title}</div>
                    <div className="meta">
                        <a>{details.authors}</a>
                    </div>
                    <div className="description">
                        {details.description ? details.description.split('').slice(0, 250).join('') + '...' : 'No details'}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        {details.publishedDate}
                    </span>
                    <span>
                        {details.categories}
                    </span>
                </div>
            </div>
        </a>
    );
};

export default BookItem;