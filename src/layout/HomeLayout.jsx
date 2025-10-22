import React from 'react';
import { Outlet } from 'react-router';
import Header from '../componentts/Header/Header';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <main>
                {/* <button className='btn btn-primary'>Click me</button> */}
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;