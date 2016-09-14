import $ from 'jquery';

const DROPZONE = '.dropzone';

class Dropzone {

  constructor() {
    this.addEventListeners();
    this._reader = this.initFileReader();
  }

  initFileReader() {
    const reader = new FileReader();
    reader.onloadend = e => {
      this.handleFile(e);
    };
    return reader;
  }

  handleFile(e) {
    const dataUri = e.target.result;
    const base64 = dataUri.substr(dataUri.indexOf(',') + 1);
    console.log(dataUri);
    console.log(base64);
  }

  addEventListeners() {
    const self = this;
    $(DROPZONE).on('dragover', function dragover(e) {
      e.preventDefault();
      e.stopPropagation();
      e.originalEvent.dataTransfer.dropEffect = 'copy';
      $(this).addClass('dropzone__dragging');
    });
    $(DROPZONE).on('dragleave', function dragleave(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('dropzone__dragging');
    });
    $(DROPZONE).on('drop', function drop(e) {
      e.preventDefault();
      e.stopPropagation();
      let file;
      for (file of e.originalEvent.dataTransfer.files) {
        if (file.type.match(/image/)) {
          self._reader.readAsDataURL(file);
        } else {
          $(this).trigger('illegaltype', file);
        }
      }
    });
  }

}

exports.init = () => new Dropzone();
