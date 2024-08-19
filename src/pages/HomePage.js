import axios from 'axios';
import React, { useEffect } from 'react';

const HomePage = () => {

  const getUserData = async () => {
    try {
      const response = await axios.post('/api/v1/users/getUserData', {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      // Verificando se a resposta foi bem-sucedida
      if (response.status === 200) {
        console.log("User data:", response.data);
      } else {
        console.error("Failed to fetch user data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Exibir uma mensagem de erro ou redirecionar o usuário, se necessário
    }
  }
  

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
