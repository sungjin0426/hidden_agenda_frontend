import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';

const DisplayResults = React.createClass({
  getIntitialState: function(){
    return {
      photo_url: '',
      search_name: '',
      description: ''
    }
  },
  onSavePhoto: function(photo){
    console.log('onClick worked');
    console.log(photo);

    const photo_rails = {
      isfamily: photo.isfamily,
      ispublic: photo.ispublic,
      isfriend: photo.isfriend,
      server: photo.server,
      secret: photo.secret,
      title: photo.title,
      owner: photo.owner,
      farm: photo.farm,
      photo_id: photo.id
    }

    ajaxHelpers.addAgenda(photo_rails)
    .then(function(response){
      console.log("response",response)
    });
  },



  render: function() {
    const TravelPics = this.props.photos.map(function(photo){
          return <div key={photo.id} className='photo'>
              <img onClick={this.onSavePhoto.bind(this, photo)} src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} />
          </div>
        }.bind(this));

    return (
      <div>
        {TravelPics}
      </div>
    );
  }
});

export default DisplayResults;
