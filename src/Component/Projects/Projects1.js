import React from 'react';
import { BsGithub } from "react-icons/bs";
const Projects1 = () => {
    return (
        <div className='px-5'>
            <div className='py-9 md:px-8'>
                <h1 className='text-4xl text-center font-bold text-primary pb-7'>Project Details</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div>
                        <p className='card-title'>Ceramic Tiles (MERN Product Manufacturer Website)</p>
                        <p className='text-2xl font-semibold text-center'>Key Feature: </p>
                        <ul class="list-disc">
                            <li>Users can view our website products and review, they can login or register an
                                account for placing an order, there are user dashboard where he can show all his
                                order history and update his personal information and can post a review of his
                                own.
                            </li>
                            <li>
                                There are admin panel who can add or delete a product, make an admin, show all
                                the order placed and can delete an order.
                            </li>
                            <li>
                                Admin cannot delete a review or modify it or post a review. Admin have only read access to the review.
                            </li>
                            <li>
                                User can login by Email id and pass also using the google account.
                            </li>
                            <li>User can also reset his password if he/she forget his password</li>

                        </ul>
                        <p className='text-2xl font-semibold text-center'>Technology Uses: </p>
                        <p className='text-xl'>React JS, JavaScript, Daisy UI, MongoDB, Express JS, Tailwind
                            CSS, React Custom Hook, React Query, JWT Token, CORS, Firebase Authentication.
                        </p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary"><a href="https://product-manufacture-auth.web.app/" target="_blank">Live Link</a></button>
                            <button class="btn btn-accent text-xl"><a href="https://github.com/MAvi-Rup/MERN-Fullstack-Manufacuture-Website-" target="_blank"><BsGithub /><span className='text-xl'> Client</span></a></button>
                            <button class="btn btn-accent text-xl"><a href="https://github.com/MAvi-Rup/MERN-Manufacture-Website-Server-Side" target="_blank"><BsGithub /> <span>Server</span></a></button>
                        </div>








                    </div>
                    <div>
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/3cHSWcX/pro1.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/bHy1zGx/pro2.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/84fghmz/pro3.jpg" class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" class="carousel-item relative w-full">
                                <img src="https://i.ibb.co/ZMxRtSy/pro4.jpg" class="w-full" />
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

export default Projects1;




