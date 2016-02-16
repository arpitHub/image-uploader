import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/'
};

const djsConfig = {
    addRemoveLinks: true,
    params: {
        myParam: 'Hello from a parameter!',
        anotherParam: 43
    }
};


var simpleCallBack = function () {
    console.log('I\'m a simple callback');
};

const eventHandlers = {
    // All of these receive the event as first parameter:
    drop: simpleCallBack,
    dragstart: null,
    dragend: null,
    dragenter: null,
    dragover: null,
    dragleave: null,
    // All of these receive the file as first parameter:
    addedfile: '',
    removedfile: null,
    thumbnail: null,
    error: null,
    processing: null,
    uploadprogress: null,
    sending: null,
    success: null,
    complete: null,
    canceled: null,
    maxfilesreached: null,
    maxfilesexceeded: null,
    // All of these receive a list of files as first parameter
    // and are only called if the uploadMultiple option
    // in djsConfig is true:
    processingmultiple: null,
    sendingmultiple: null,
    successmultiple: null,
    completemultiple: null,
    canceledmultiple: null,
    // Special Events
    totaluploadprogress: null,
    reset: null,
    queuecompleted: null
}

export default class DragDrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  render() {
    return (
      <div>
        <DropzoneComponent config={componentConfig} djsConfig={djsConfig} eventHandlers={eventHandlers} />
      </div>
    )
  }
}