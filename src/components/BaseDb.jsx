import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';
import '../css/components/BaseDb.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <ListGroup>
            {users.map(user => (
                <ListGroup.Item key={user._id} className="user-list-item">
                    <span className="user-name">{user.username}</span> - <span className="user-email">{user.email}</span>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default UserList;