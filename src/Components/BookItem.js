import React from 'react';

const BookItem = (props) => {
    const { details } = props;

    return (
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={!!details.imageLinks ? details.imageLinks.thumbnail : '' } />
                </div>
                <div className="content">
                    <div className="header">{details.title}</div>
                    <div className="meta">
                        <a>{details.authors}</a>
                    </div>
                    <div className="description">
                        {details.description}
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
        </div>
    );
};

export default BookItem;