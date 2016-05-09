import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const AgendaComponent = React.createClass({


  componentDidMount:function(){

    ajaxHelpers.getUserAgenda()
    .then(function(response){
      console.log('logging response after getting users agenda', response.data);
      this.setState({
        agenda: response.data
      })
      console.log(this.state.agenda);
    }.bind(this))
  },

  render: function() {
    const AgendaPics = this.state.agenda.map(function(photo){
          return <div key={photo.id} className='photo'>
              <img src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.photo_id + "_" + photo.secret + ".jpg"} />
          </div>
        }.bind(this));

        return (
          <div>
            {AgendaPics}
          </div>
        );
      }
    });

  export default AgendaComponent;
