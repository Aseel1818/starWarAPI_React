import React from 'react';

const user = {
    id: 1,
    name: "Roaa Shoqo",
    email: "roaashoqo19@gmail.com",
    profileImage: "https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
}

const Profile = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
            <img
                src={user.profileImage}
                alt={user.name}
                style={{ width: '150px', height: '150px', maxWidth: '300px', marginBottom: "20px", borderRadius: "50%" }}
            >
            </img>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: 'white',
                border: 'none',
                borderRadius: '5px'
            }}>
                Edit Profile
            </button>
        </div>
    );
}

export default Profile;
