import $ from 'jquery';

class Dropzone extends $.fn.init {

  constructor(selector) {
    super(selector);
    this.addEventListeners();
  }

  emitOnValidDrag(e, triggerEvent) {
    const target = $(e.target);
    const source = $(e.originalEvent.srcElement);
    if (!target.is(this) && !source.attr('src')) {
      console.log(e);
      this.trigger(triggerEvent);
    }
  }

  addEventListeners() {
    const self = this;
    $(window).on('dragenter', function dragenter(e) {
      e.preventDefault();
      e.stopPropagation();
      self.emitOnValidDrag(e, 'windowenter');
    });
    self.on('dragover', function dragover(e) {
      e.preventDefault();
      e.stopPropagation();
      e.originalEvent.dataTransfer.dropEffect = 'copy';
      self.emitOnValidDrag(e, 'dropzoneenter');
    });
    self.on('dragleave', function dragleave(e) {
      e.preventDefault();
      e.stopPropagation();
      self.emitOnValidDrag(e, 'dropzoneexit');
    });
    self.on('drop', function drop(e) {
      e.preventDefault();
      e.stopPropagation();
      self.trigger('dropzonedropped');
      let file;
      for (file of e.originalEvent.dataTransfer.files) {
        if (file.type.match(/image/)) {
          const reader = new FileReader();
          reader.onloadend = fileEvent => {
            const content = fileEvent.target.result;
            self.trigger('filedone', [fileEvent, content]);
          };
          reader.readAsDataURL(file);
        } else {
          self.trigger('illegaltype', file);
        }
      }
    });
  }

}

export { Dropzone as default };
