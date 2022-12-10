import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKnODpssxV8_mq3KozCEZSFNmuCweIhiWh-phc1hOlJYLqH9bHxcazYFUvxP6TEJQTD4&usqp=CAU'
                    alt='logo'/>
            </header>
            <nav className='nav'>
                <div>
                    < a href="#" >Profile</a>
                </div>
                <div>
                    <a href='#'>Messages</a>
                </div>
                <div>
                    <a href='#'>News</a>
                </div>
                <div>
                    <a href='#'>Music</a>
                </div>
                <div>
                    <a href='#'>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <img src= 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/06/69/4958106611a2dbe.jpg'/>
                <div>
                    Ava+description
                </div>
                <div>
                    MyPosts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            Post1
                        </div>
                        <div>
                            Post2
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;