const axios = require('axios');
const { expect } = require('chai');

const apiUrl = 'https://jsonplaceholder.typicode.com';

describe('API Testing with Axios', () => {
  it('should fetch a post by ID', async () => {
    const response = await axios.get(`${apiUrl}/posts/1`);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('id', 1);
  });

  it('should create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await axios.post(`${apiUrl}/posts`, newPost);
    expect(response.status).to.equal(201);
    expect(response.data).to.include(newPost);
  });

  it('should update a post', async () => {
    const updatedPost = {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };
    const response = await axios.put(`${apiUrl}/posts/1`, updatedPost);
    expect(response.status).to.equal(200);
    expect(response.data).to.include(updatedPost);
  });

  it('should delete a post', async () => {
    const response = await axios.delete(`${apiUrl}/posts/1`);
    expect(response.status).to.equal(200);
  });
});