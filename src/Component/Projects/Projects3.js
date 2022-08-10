import React from 'react';
import { BsGithub } from "react-icons/bs";
const Projects3 = () => {
    return (
        <div id='contacts' className='py-9 md:px-8'>
        <h1 className='text-4xl text-center font-bold text-primary pb-7'>Project Details</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
            <div>
                <p className='card-title'>Moments Photography (Firebase Authentication Project)</p>
                <p className='text-2xl font-semibold text-center'>Key Feature: </p>
                <ul class="list-disc">
                    <li>Login Features implementation for the user they can also login with google and
GitHub also.
                    </li>
                    <li>
                    A checkout page for load a individual product or service.
                    </li>
                    <li>
                        User can login by Email id and pass also using the google account.
                    </li>
                    <li>User can also reset his password if he/she forget his password</li>

                </ul>
                <p className='text-2xl font-semibold text-center'>Technology Uses: </p>
                <p className='text-xl'>React JS, JavaScript, Bootstrap, React Custom Hook, Firebase Authentication.
                </p>
                <div class="card-actions">
                    <button class="btn btn-primary"><a href="https://moments-photography-8829a.web.app/" target="_blank">Live Link</a></button>
                    <button class="btn btn-accent text-xl"><a href="https://github.com/MAvi-Rup/Moments-Photography-firebase-Authentication-" target="_blank"><BsGithub /> Client</a></button>
                    
                </div>








            </div>
            <div>
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Np6gJxD/pro9.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src="https://i.ibb.co/93GpbJ0/pro10.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Lx4f1L6/pro11.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src="https://i.ibb.co/51XLPSS/pro12.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    );
};

export default Projects3;




