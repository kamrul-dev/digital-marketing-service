import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='row container mx-auto mb-5'>
            <div className='col-md-12'>
                <h3 className='text-center mt-5 mb-4 primary-color'>Blogs</h3>
                <article>
                    <h4 className='primary-color'>Difference Between Authentication and Authorization</h4>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Authentication</th>
                                <th>Authorization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Autentication confirms your identity to grant access to the system</td>
                                <td>Authorization determines whether you are authorized to access the resources</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>It is the process of validating user credidentials to gain user access</td>
                                <td>It is the process of verifying whether access is allowed or not</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>It determines whether user is what the claims to be</td>
                                <td>It determines what user can and cannot access</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Authentication usually requires a username and a password</td>
                                <td>Authentication factors required for authorization may vay, depending on hte security level</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Authentication is the first step of authorization so always comes first</td>
                                <td>Authorization is done after successful authentication</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>For example, students of a particular university are required to authenticate themselves vefore accessing the student link of the university's official website.This is called authentication</td>
                                <td>For example, authorization determines exactly what information the students are authorized to access on the university website after successful authentication</td>
                            </tr>
                        </tbody>
                    </Table>
                </article>
            </div>
            <div className='col-md-12'>
                <article>
                    <h4 className='primary-color'>Why are you using firebase? What other options do you have to implement authentication?
                    </h4>
                    <p>Because of Authentication. using Firebase Authentication makes it easier to build secure authentication systems while improving the login and onboarding experience for end-users., Firebase Authentication gives back-end development services, simple-to-use SDKs, and instant UI libraries to confirm clients over your application. It supports authentication using passwords, email id, or username.You can allow users to sign in to Firebase app either by using FirebaseUI as a complete drop-in authentication solution or by using the Firebase Authentication SDK to manually integrate one or a few sign-in techniques into our application. <br />
                        <strong>Authentication Options:</strong>
                        <li>Email/Password Authentication</li>
                        <li>Phone Authentication</li>
                        <li>Sign in with Google</li>
                        <li>Sign in with Facebook</li>
                        <li>Sign in with Twitter</li>
                        <li>Sign in with Github</li>
                        <li>Sign in with Apple</li>
                        <li>Sign in with Microsoft</li>
                        <li>Sign in with Yahoo</li>
                        <li>Sign in with Play Games</li>
                        <li>Sign in with Game Center</li>
                        <li>Anonymous Autentication</li>
                    </p>
                </article>
            </div>
            <div className='col-md-12'>
                <article>
                    <h4 className='primary-color'>What other services does firebase provide other than authentication?
                    </h4>
                    <p>Cloud Firestore, ML Kit, Cloud Functions, Authentication, Hosting, Cloud Storage, Realtime Database, Google Analytics, In-App Messaging etc.</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;