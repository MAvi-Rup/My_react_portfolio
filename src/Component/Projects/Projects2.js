import React from 'react';
import { BsGithub } from "react-icons/bs";
const Projects2 = () => {
    return (
        <div className='px-7'>
            <div id='contacts' className='py-9 md:px-8'>
                <h1 className='text-4xl text-center font-bold text-primary pb-7'>Project Details</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div>
                        <p className='card-title'>Gadgets World (MERN Product Warehouse Management Website)</p>
                        <p className='text-2xl font-semibold text-center'>Key Feature: </p>
                        <ul class="list-disc">
                            <li>Users can view our website products, but they have to login or register for update
                                the quantity of a product and also, they can add a product as a my-items and also
                                show how many products are in the my-item.
                            </li>
                            <li>
                                Users can add a new product to the database and its also show in the UI, user can
                                delete a product and can remove from my-items.
                            </li>
                            <li>
                                When a user clicks on the delivered button quantity decrease by one and user also
                                update the product quantity as he wants.
                            </li>
                            <li>
                                User can login by Email id and pass also using the google account.
                            </li>
                            <li>User can also reset his password if he/she forget his password</li>

                        </ul>
                        <p className='text-2xl font-semibold text-center'>Technology Uses: </p>
                        <p className='text-xl'>React JS, JavaScript, MongoDB, Express JS, Bootstrap
                            CSS, React Custom Hook, React Query, JWT Token, CORS, Firebase Authentication.
                        </p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary"><a href="https://warhouse-management-system.web.app/" target="_blank">Live Link</a></button>
                            <button class="btn btn-accent text-xl"><a href="https://github.com/MAvi-Rup/MERN-Warehouse-Management-Website-Client" target="_blank"><BsGithub /> Client</a></button>
                            <button class="btn btn-accent text-xl"><a href="https://github.com/MAvi-Rup/MERN-Warehouse-management-Website-Server-SIde" target="_blank"><BsGithub /> Server</a></button>
                        </div>












                    </div>
                    <div>
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/7Cz748T/pro5.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/WkjzQVf/pro6.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/h9rTgW6/pro7.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/hMDg5jk/pro8.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" class="btn btn-circle">❮</a>
                                    <a href="#slide1" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Projects2;