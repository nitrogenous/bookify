import React from 'react';

const BookItem = () => {
    return (
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src="http://books.google.com/books/content?id=ZH4oAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
                </div>
                <div className="content">
                    <div className="header">Zero To One</div>
                    <div className="meta">
                        <a>Peter Thiel, Blake Masters</a>
                    </div>
                    <div className="description">
                        #1 NEW YORK TIMES BESTSELLER If you want to build a better future, you must believe in secrets.
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        Published at 2014.09.16
                    </span>
                    <span>
                        Business & Economics
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BookItem;