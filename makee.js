var obj2gltf = require('obj2gltf');
var options = {
    separateTextures : true // Don't embed textures in the converted glTF
}
obj2gltf('3d_models/Grass/TrawaStojaca.obj', 'grass.gltf', options)
    .then(function() {
        console.log('Converted model');
    });
