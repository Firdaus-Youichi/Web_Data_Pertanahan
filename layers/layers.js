var wms_layers = [];

var format_KABTEGAL_0 = new ol.format.GeoJSON();
var features_KABTEGAL_0 = format_KABTEGAL_0.readFeatures(json_KABTEGAL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KABTEGAL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KABTEGAL_0.addFeatures(features_KABTEGAL_0);
var lyr_KABTEGAL_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KABTEGAL_0, 
                style: style_KABTEGAL_0,
                popuplayertitle: "KABTEGAL",
                interactive: true,
                title: '<img src="styles/legend/KABTEGAL_0.png" /> KABTEGAL'
            });

lyr_KABTEGAL_0.setVisible(true);
var layersList = [lyr_KABTEGAL_0];
lyr_KABTEGAL_0.set('fieldAliases', {'DESA': 'DESA', 'KODE': 'KODE', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'STATUS_IDT': 'STATUS_IDT', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_HUK': 'STATUS_HUK', 'SUMBER_AIR': 'SUMBER_AIR', 'IDT_94_95': 'IDT_94_95', 'IDT_95_96': 'IDT_95_96', 'KLASIFIKAS': 'KLASIFIKAS', 'TERMASUK_D': 'TERMASUK_D', 'LUAS_WILAY': 'LUAS_WILAY', 'SUMBER_PEN': 'SUMBER_PEN', 'SUB_SEKTOR': 'SUB_SEKTOR', 'KEMATIAN_B': 'KEMATIAN_B', 'KEMATIAN': 'KEMATIAN', 'BANYAKNYA_': 'BANYAKNYA_', });
lyr_KABTEGAL_0.set('fieldImages', {'DESA': '', 'KODE': '', 'KECAMATAN': '', 'KABUPATEN': '', 'PROPINSI': '', 'STATUS_IDT': '', 'STATUS_KOT': '', 'STATUS_HUK': '', 'SUMBER_AIR': '', 'IDT_94_95': '', 'IDT_95_96': '', 'KLASIFIKAS': '', 'TERMASUK_D': '', 'LUAS_WILAY': '', 'SUMBER_PEN': '', 'SUB_SEKTOR': '', 'KEMATIAN_B': '', 'KEMATIAN': '', 'BANYAKNYA_': '', });
lyr_KABTEGAL_0.set('fieldLabels', {'DESA': 'no label', 'KODE': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'STATUS_IDT': 'no label', 'STATUS_KOT': 'no label', 'STATUS_HUK': 'no label', 'SUMBER_AIR': 'no label', 'IDT_94_95': 'no label', 'IDT_95_96': 'no label', 'KLASIFIKAS': 'no label', 'TERMASUK_D': 'no label', 'LUAS_WILAY': 'no label', 'SUMBER_PEN': 'no label', 'SUB_SEKTOR': 'no label', 'KEMATIAN_B': 'no label', 'KEMATIAN': 'no label', 'BANYAKNYA_': 'no label', });
lyr_KABTEGAL_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});