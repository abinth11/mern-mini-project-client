import React, { useState, useEffect } from 'react';
import './viewProfile.css'
const ViewProfile = () => {
    const [profilePhoto, setProfilePhoto] = useState('https://c4.wallpaperflare.com/wallpaper/588/409/90/demon-slayer-kimetsu-no-yaiba-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg');
    const [isHovered, setIsHovered] = useState(false);
    const [userInfo,setUserInfo] = useState('')
    useEffect(() => {
        const getUserData = async () => {
            const token = localStorage.getItem('accessToken')
            console.log(token)
            await fetch('http://localhost:3000/get-user-data', {
                method: "GET",
                headers: {
                    authorization: `${token}`,
                },
            }).then(async(response) => {
                console.log(response)
                const parsedResponse = await response.json()
                setUserInfo(parsedResponse)
                console.log(parsedResponse)
            }).catch((error) => {
                console.error(error)
            })
        }
        getUserData()
    },[])
    const handleChangePhoto = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfilePhoto(reader.result);
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="user-profile">
            <div
                className="image-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="profile-photo">
                    <img src={profilePhoto} alt="Profile" />
                    {isHovered && (
                        <div className="overlay">
                            <label htmlFor="photo-upload" className="overlay-text">Change Photo</label>
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
            </div>
            <div className="details-container">
                <h2 className="username">Name: {userInfo?.name}</h2>
                <p className="info">Email: {userInfo?.email}</p>
                <p className="info">Phone: {userInfo?.mobile}</p>
            </div>
        </div>
    );
};

export default ViewProfile;
