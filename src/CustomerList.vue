<template>
    <div>
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Member Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.name }}</td>
            <td>{{ customer.id_number }}</td>
            <td>{{ customer.phone_number }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.member_number }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerList',
    data() {
      return {
        customers: [
          // Replace with your actual customer data
          {
            id: 1,
            name: 'John Doe',
            id_number: '123456789',
            phone_number: '123-456-7890',
            email: 'johndoe@example.com',
            member_number: 'M123'
          },
          {
            id: 2,
            name: 'Jane Smith',
            id_number: '987654321',
            phone_number: '987-654-3210',
            email: 'janesmith@example.com',
            member_number: 'M456'
          }
          // Add more customer objects as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  