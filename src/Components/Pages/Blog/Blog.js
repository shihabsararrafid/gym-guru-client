import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <h1 className='uppercase text-5xl text-violet-600 mb-7  text-center'>blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify gap-8 mx-8'>
                <div className='rounded-lg shadow-2xl shadow-gray-400 p-5'>
                    <h1 className='text-2xl text-violet-600 font-bold'>Q1. Difference between authorization and authentication ?</h1>
                    <p>Authentication is the process of validating a user whereas authorization is the process of giving permission of several things by a user to a third party .Authentication is visible to the users and authorization is not visible to the users.Authorization works through id token , on the contrast authentication works through access token.</p>
                </div>
                <div className='rounded-lg shadow-2xl p-5 shadow-gray-400'>
                    <h1 className='text-2xl text-violet-600 font-bold'>Q2.1.Why am I  using firebase?</h1>
                    <p>I am using firebase mainly for the authentication purposes though firebase serves a lot of services including realtime database, hoisting etc. I am using for hosting my sites too. </p>
                    <h1 className='text-2xl text-violet-600 font-bold'>Q2.2. What other options do you have to implement authentication?</h1>
                    <p>If we consider only the authentication purpose then followings can be a good competitors :
                        Okta,
                        OneLogin,
                        JumpCloud,
                        Microsoft Azure Active Directory,

                        Auth0,
                        Rippling,
                        SecureAuth Identity Platform,
                        ForgeRock </p>
                </div>
                <div className='rounded-lg shadow-2xl p-5 shadow-gray-400'>
                    <h1 className='text-2xl text-violet-600 font-bold'>Q3.What other services does firebase provide other than authentication?</h1>
                    <p className='text-center'>There are many services which firebase provides beside authentication. For example:</p>
                    <p className='text-center'>Cloud Firestore</p>
                    <p className='text-center'>Cloud Functions</p>

                    <p className='text-center'> Hosting</p>
                    <p className='text-center'> Cloud Storage</p>
                    <p className='text-center'>  Google Analytics</p>
                    <p className='text-center'>   Predictions</p>
                    <p className='text-center'>  Cloud Messaging</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;