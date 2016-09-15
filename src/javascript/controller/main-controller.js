import template from 'pug/main.pug';
import previewImage from 'pug/components/main/preview-image.pug';
import previewSvg from 'pug/components/main/preview-svg.pug';
import $ from 'jquery';
import Dropzone from 'javascript/components/dropzone';

class MainController {

  constructor(pkg) {
    this._pkg = pkg;
  }

  init() {
    this.plopDefaultTemplate();
    this.hookFileInput();
    this.hookFileInputFilesSelected();
    this.initDropzone();
    this.initPreview();
  }

  hookFileInput() {
    $('.file-input a').on('click', function click(e) {
      e.preventDefault();
      $(this).find('+ .file-input__input').trigger('click');
    });
  }

  hookFileInputFilesSelected() {
    const self = this;
    $('.file-input a + .file-input__input').on('change', function click(e) {
      e.preventDefault();
      let file;
      for (file of $(this).prop('files')) {
        if (file.type.match(/image/)) {
          const reader = new FileReader();
          reader.onloadend = fileEvent => {
            const content = fileEvent.target.result;
            self.plopPreviewImageBase64(content);
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }

  initPreview() {
    $('#preview-images').append(previewSvg({
      id: 'no-images',
      content: require('assets/img/add_user.svg')
    }));
  }

  plopPreviewImageBase64(content) {
    $('#preview-images').append(previewImage({ content }));
  }

  initDropzone() {
    const dropzone = new Dropzone('#dropzone');
    dropzone.on('windowenter', () => {
      $('#dropzone').addClass('is-active');
    });
    dropzone.on('dropzoneenter', () => {
      $('#dropzone').addClass('is-active');
    });
    dropzone.on('dropzoneexit', () => {
      $('#dropzone').removeClass('is-active');
    });
    dropzone.on('dropzonedropped', () => {
      $('#dropzone').removeClass('is-active');
    });
    dropzone.on('illegaltype', (e, file) => {
      console.log(file);
    });
    dropzone.on('filedone', (e, fileEvent, content) => {
      $('#dropzone').removeClass('is-active');
      this.plopPreviewImageBase64(content);
    });
  }

  plopDefaultTemplate() {
    $('main').append(template({
      package: this._pkg,
      logo: require('assets/img/logo_silhouette.png')
    }));
  }

}

export { MainController as default };
