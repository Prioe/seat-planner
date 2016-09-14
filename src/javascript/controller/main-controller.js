import template from 'pug/index.pug';
import $ from 'jquery';
import Dropzone from 'javascript/components/dropzone';

class MainController {

  constructor(pkg) {
    this._pkg = pkg;
  }

  init() {
    this.plopDefaultTemplate();
    Dropzone.init();
    $('#dropzone').on('illegaltype', (e, file) => {
      console.log(file);
    });
  }

  plopDefaultTemplate() {
    $('main').append(template(this._pkg));
  }

}

export { MainController as default };
