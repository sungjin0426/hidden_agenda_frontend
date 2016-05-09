var axios = require('axios');

module.exports = {
  baseUrl: 'http://localhost:3000',

  getPhotos: function(afterAjaxFxn) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    axios.get(this.baseUrl + '/photos', {
      // these 3 tokens will be sent to server for auth
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    })
    // success: pass the response to afterAjaxFxn
    .then(function (response) {
      console.log("response:", response.data);
      if (afterAjaxFxn) {
        afterAjaxFxn(response.data);
      }
    })
    // upon failure, pass nothing
    .catch(function (response) {
      // we failed to logout
      console.log('There was an error', response);
      afterAjaxFxn();
    });
  }
};
