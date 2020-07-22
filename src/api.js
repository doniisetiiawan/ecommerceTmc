export const get = (uri) => new Promise((resolve) => {
  let response;

  switch (uri) {
    case '/products':
      response = [
        {
          id: 1,
          name: 'Mastering Docker - Second Edition',
          author: 'James Cameron',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 39.58,
        },
        {
          id: 2,
          name: 'Go Cookbook',
          author: 'James Cameron',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 35.98,
          discount: 20,
        },
        {
          id: 3,
          name: 'Build incredible chatbots',
          author: 'John Abruzzo',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 99.58,
          discount: 25,
        },
        {
          id: 4,
          name: 'JavaScript by Example',
          author: 'Anto Aravinth',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 105.06,
        },
        {
          id: 5,
          name: 'REST APIs with Flask and Python',
          author: 'Jose Salvatierra',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 92.82,
        },
        {
          id: 6,
          name:
              'Universal JavaScript with React, Node, and Redux',
          author: 'Maxime Najim',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 105.6,
        },
        {
          id: 7,
          name:
              'The Complete Flexbox Tutorial: Learn CSS3 Flexbox in 2017 ',
          author: 'Peter Sommerhoff',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 80.58,
        },
        {
          id: 8,
          name: 'Exploring Experience Design',
          author: 'Ezra Schwartz',
          img:
              'https://res.cloudinary.com/bao-codersx/image/upload/v1588414918/coverBook_rhne73.jpg',
          price: 22.68,
        },
      ];
      break;
    default:
      return null;
  }

  setTimeout(() => resolve(response), 1000);
  return null;
});

export const post = (uri, data) => new Promise((resolve, reject) => {
  let response;

  switch (uri) {
    case '/login':
      if (
        data.email === 'test@test.com'
          && data.password === 'test'
      ) {
        response = {
          email: 'test@test.com',
          name: 'Test Testson',
          address: '123 test street',
          postcode: '2761XZ',
          city: 'Testington',
        };
      } else {
        setTimeout(
          () => reject(new Error('Unauthorised')),
          1000,
        );
        return null;
      }
      break;
    case '/pay':
      if (data.card.cvc === '123') {
        response = true;
      } else {
        setTimeout(
          () => reject(new Error('Payment not authorised')),
          1000,
        );
        return null;
      }
      break;
    case '/register':
      response = data;
      break;
    default:
      return null;
  }

  setTimeout(() => resolve(response), 1000);
  return null;
});

export const put = () => {};
