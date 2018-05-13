// hide on save
module.exports = function ImportImageModuleUi(step, ui) {

  function setup(setImage, onLoad) {

    // generate a unique timestamp based id for the dropzone
    var dropzoneId = 'dropzone-NUMBER';

    // add a file input listener
    var dropZone ='\
    <div style="padding: 30px;margin: 0 20% 30px;border: 4px dashed #ccc;border-radius: 8px;text-align: center;color: #444;" id="' + dropzoneId + '">\
      <p>\
        <i>Select or drag in an image to overlay.</i>\
      </p>\
      <center>\
        <input type="file" class="file-input" value="">\
      </center>\
    </div>';

    // insert into .details area
    // TODO: develop API-based consistent way to add UI elements
    $(step.ui)
      .find('.details')
      .prepend(dropZone);

    // setup file input listener
    sequencer.setInputStep({
      dropZoneSelector: "#" + dropzoneId,
      fileInputSelector: "#" + dropzoneId + " .file-input",
      onLoad: function onLoadFromInput(progress) {
console.log('onLoadFromInput')
        var reader = progress.target;
        step.options.imageUrl = reader.result;
        sequencer.run();
      }
    });

  }

  return {
    setup: setup
  }
}
