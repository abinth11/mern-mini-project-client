import React, { useState, useEffect } from 'react';
import './viewProfile.css';

const ViewProfile = () => {
    const [profilePhoto, setProfilePhoto] = useState('');
    const [previewPhoto, setPreviewPhoto] = useState('https://res.cloudinary.com/dwucedjmy/image/upload/v1681709064/rojcd14ychu49eukhjuk.png');
    const [isHovered, setIsHovered] = useState(false);
    const [changed, setChanged] = useState(false)
    const [userInfo, setUserInfo] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
        const getUserData = async () => {
            const token = localStorage.getItem('accessToken');
            console.log(token);
            try {
                const response = await fetch('http://localhost:3000/get-user-data', {
                    method: 'GET',
                    headers: {
                        'authorization': `${token}`,
                    },
                });

                const parsedResponse = await response.json();
                setUserInfo(parsedResponse);
                console.log(parsedResponse);
            } catch (error) {
                console.error(error);
            }
        };

        getUserData();
    }, []);

    const handleChangePhoto = (event) => {
        const file = event?.target?.files[0];
        setChanged(true)
        if (file) {
            setProfilePhoto(file);

            // Preview the selected image
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setPreviewPhoto(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleUpload = () => {
        // Simulating upload progress
        // console.log(profilePhoto)
        if (profilePhoto == "") {
            alert('please select a photo')
            return
        }
        const formData = new FormData();
        formData.append('image', profilePhoto, profilePhoto.name);
        const token = localStorage.getItem('accessToken');
        fetch('http://localhost:3000/update-profile', {
            method: 'PUT',
            body: formData,
            headers: {
                'authorization': `${token}`,
            },
        })
            .then((async response => {
                console.log(response)
                const parsedResponse = await response.json()
                console.log(parsedResponse)
                if (parsedResponse.statusCode === 200) {
                    alert(parsedResponse.successMessage)
                } else {
                    alert(parsedResponse.errorMessage)
                }
            })).catch(error => {
                console.log(error)
            })
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress((prevProgress) => {
                if (prevProgress === 100) {
                    clearInterval(interval);
                    return prevProgress;
                }
                return prevProgress + 10;
            });
        }, 500);
    };

    return (
        <div>
            <div className="user-profile">

                <div
                    className="image-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    <div className="profile-photo">

                        {changed ? <img src={previewPhoto} alt="Profile" /> : (userInfo?.photo ? (
                            <img src={userInfo.photo} alt="Profile" />
                        ) : (
                            <img src={previewPhoto} alt="Profile" />
                        ))}
                        {isHovered && (
                            <div className="overlay">
                                <label htmlFor="photo-upload" className="overlay-text">
                                    Change Photo
                                </label>
                                <input
                                    type="file"
                                    id="photo-upload"
                                    onChange={handleChangePhoto}
                                    accept="image/*"
                                    className="photo-input"
                                />
                            </div>
                        )}
                    </div>
                    <button className="upload-button" onClick={handleUpload}>
                        Upload
                    </button>
                </div>
                <div className="details-container">
                    <h2 className="username">Name: {userInfo?.name}</h2>
                    <p className="info">Email: {userInfo?.email}</p>
                    <p className="info">Phone: {userInfo?.mobile}</p>
                </div>
            </div>
            <div className='progress'>
                {uploadProgress > 0 && (
                    <div className="progress-bar">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                )}
                {uploadProgress > 0 && (
                    <div className="progress-percentage">{uploadProgress}%</div>
                )}
            </div>
        </div>
    );
};

export default ViewProfile;
