import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form } from 'react-bootstrap';
import { addVideo } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({handleresponse}) {

    const [uploaddata, setuploaddata] = useState({
        id: "", caption: "", thumbnail: "", url: ""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // define set input 
    const setInput = (e) => {
        const { name, value } = e.target
        setuploaddata({ ...uploaddata, [name]: value })
        // setuploaddata(e.target.value)
    }

    console.log(uploaddata);

    // extract embeded url from youtube original url
    // this function uses for make the youtube video autoplay
    const extractUrl = (e) => {
        let youtubeurl = e.target.value
        if (youtubeurl.includes("v=")) {
            let index = youtubeurl.indexOf("v=")
            console.log(index);
            let videourl = youtubeurl.substring(index + 2, index + 13)
            console.log(videourl);
            let videodata = uploaddata
            videodata.url = `https://www.youtube.com/embed/${videourl}`
            setuploaddata(videodata)
        }
        console.log(uploaddata);
    }

    const handleAdd = async () => {
        const { id, caption, thumbnail, url } = uploaddata
        if (!id || !caption || !thumbnail || !url) {
            toast.info("Please fill the form completely !!!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        else {
            // make api call 
            const response = await addVideo(uploaddata)

            if (response.status >= 200 && response.status < 300) {
                // console.log(response.data);
                handleresponse(response.data)
                setShow(false);
                toast.success("New video uploaded successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else {
                toast.warn("Please provide a unique id !!!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        }
    }



    return (
        <>
            <div onClick={handleShow} className='btn'>
                <PlusCircle color='green' size={90} />
            </div>
            {/* Modal  */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><b>Upload</b> Video Datails</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* ID  */}
                        <FloatingLabel className='mb-3' controlId="floatingid" label="Video ID">
                            <Form.Control onChange={setInput} name='id' type="text" placeholder="Upload Video ID" />
                        </FloatingLabel>

                        {/* Caption  */}
                        <FloatingLabel className='mb-3' controlId="floatingcaption" label="Video Caption">
                            <Form.Control onChange={setInput} name='caption' type="text" placeholder="Video Caption" />
                        </FloatingLabel>

                        {/* Video thumbnail url  */}
                        <FloatingLabel className='mb-3' controlId="floatingimage" label="Video Cover Image URL">
                            <Form.Control onChange={setInput} name='thumbnail' type="text" placeholder="Video Cover Image URL" />
                        </FloatingLabel>

                        {/* Uploading Video link  */}
                        <FloatingLabel className='mb-3' controlId="floatinglink" label="Video Link">
                            <Form.Control onChange={extractUrl} name='url' type="text" placeholder="Video Link" />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />



        </>
    )
}

export default Add