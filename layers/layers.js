ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([118.578100, 15.410337, 122.193585, 17.211450]);
var wms_layers = [];

var format_OVERALLTRAINING_0 = new ol.format.GeoJSON();
var features_OVERALLTRAINING_0 = format_OVERALLTRAINING_0.readFeatures(json_OVERALLTRAINING_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_OVERALLTRAINING_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OVERALLTRAINING_0.addFeatures(features_OVERALLTRAINING_0);
var lyr_OVERALLTRAINING_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OVERALLTRAINING_0, 
                style: style_OVERALLTRAINING_0,
                popuplayertitle: "OVERALL TRAINING",
                interactive: true,
    title: 'OVERALL TRAINING<br />\
    <img src="styles/legend/OVERALLTRAINING_0_0.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_1.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_2.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_3.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_4.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_5.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_6.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_7.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_8.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_9.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_10.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_11.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_12.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_13.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_14.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_15.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_16.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_17.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_18.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_19.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_20.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_21.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_22.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_23.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_24.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_25.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_26.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_27.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_28.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_29.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_30.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_31.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_32.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_33.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_34.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_35.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_36.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_37.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_38.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_39.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_40.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_41.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_42.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_43.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_44.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_45.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_46.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_47.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_48.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_49.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_50.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_51.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_52.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_53.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_54.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_55.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_56.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_57.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_58.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_59.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_60.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_61.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_62.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_63.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_64.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_65.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_66.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_67.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_68.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_69.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_70.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_71.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_72.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_73.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_74.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_75.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_76.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_77.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_78.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_79.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_80.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_81.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_82.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_83.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_84.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_85.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_86.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_87.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_88.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_89.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_90.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_91.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_92.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_93.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_94.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_95.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_96.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_97.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_98.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_99.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_100.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_101.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_102.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_103.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_104.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_105.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_106.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_107.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_108.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_109.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_110.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_111.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_112.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_113.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_114.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_115.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_116.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_117.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_118.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_119.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_120.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_121.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_122.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_123.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_124.png" /> <br />\
    <img src="styles/legend/OVERALLTRAINING_0_125.png" /> <br />'
        });
var format_2023_1 = new ol.format.GeoJSON();
var features_2023_1 = format_2023_1.readFeatures(json_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_1.addFeatures(features_2023_1);
var lyr_2023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2023_1, 
                style: style_2023_1,
                popuplayertitle: "2023",
                interactive: true,
    title: '2023<br />\
    <img src="styles/legend/2023_1_0.png" /> <br />\
    <img src="styles/legend/2023_1_1.png" /> <br />\
    <img src="styles/legend/2023_1_2.png" /> <br />\
    <img src="styles/legend/2023_1_3.png" /> <br />\
    <img src="styles/legend/2023_1_4.png" /> <br />\
    <img src="styles/legend/2023_1_5.png" /> <br />\
    <img src="styles/legend/2023_1_6.png" /> <br />\
    <img src="styles/legend/2023_1_7.png" /> <br />\
    <img src="styles/legend/2023_1_8.png" /> <br />\
    <img src="styles/legend/2023_1_9.png" /> <br />\
    <img src="styles/legend/2023_1_10.png" /> <br />\
    <img src="styles/legend/2023_1_11.png" /> <br />\
    <img src="styles/legend/2023_1_12.png" /> <br />\
    <img src="styles/legend/2023_1_13.png" /> <br />\
    <img src="styles/legend/2023_1_14.png" /> <br />\
    <img src="styles/legend/2023_1_15.png" /> <br />\
    <img src="styles/legend/2023_1_16.png" /> <br />\
    <img src="styles/legend/2023_1_17.png" /> <br />\
    <img src="styles/legend/2023_1_18.png" /> <br />\
    <img src="styles/legend/2023_1_19.png" /> <br />\
    <img src="styles/legend/2023_1_20.png" /> <br />\
    <img src="styles/legend/2023_1_21.png" /> <br />\
    <img src="styles/legend/2023_1_22.png" /> <br />\
    <img src="styles/legend/2023_1_23.png" /> <br />\
    <img src="styles/legend/2023_1_24.png" /> <br />\
    <img src="styles/legend/2023_1_25.png" /> <br />\
    <img src="styles/legend/2023_1_26.png" /> <br />\
    <img src="styles/legend/2023_1_27.png" /> <br />\
    <img src="styles/legend/2023_1_28.png" /> <br />\
    <img src="styles/legend/2023_1_29.png" /> <br />\
    <img src="styles/legend/2023_1_30.png" /> <br />\
    <img src="styles/legend/2023_1_31.png" /> <br />\
    <img src="styles/legend/2023_1_32.png" /> <br />\
    <img src="styles/legend/2023_1_33.png" /> <br />\
    <img src="styles/legend/2023_1_34.png" /> <br />\
    <img src="styles/legend/2023_1_35.png" /> <br />\
    <img src="styles/legend/2023_1_36.png" /> <br />\
    <img src="styles/legend/2023_1_37.png" /> <br />\
    <img src="styles/legend/2023_1_38.png" /> <br />\
    <img src="styles/legend/2023_1_39.png" /> <br />\
    <img src="styles/legend/2023_1_40.png" /> <br />\
    <img src="styles/legend/2023_1_41.png" /> <br />\
    <img src="styles/legend/2023_1_42.png" /> <br />\
    <img src="styles/legend/2023_1_43.png" /> <br />\
    <img src="styles/legend/2023_1_44.png" /> <br />\
    <img src="styles/legend/2023_1_45.png" /> <br />\
    <img src="styles/legend/2023_1_46.png" /> <br />\
    <img src="styles/legend/2023_1_47.png" /> <br />\
    <img src="styles/legend/2023_1_48.png" /> <br />\
    <img src="styles/legend/2023_1_49.png" /> <br />\
    <img src="styles/legend/2023_1_50.png" /> <br />\
    <img src="styles/legend/2023_1_51.png" /> <br />\
    <img src="styles/legend/2023_1_52.png" /> <br />\
    <img src="styles/legend/2023_1_53.png" /> <br />\
    <img src="styles/legend/2023_1_54.png" /> <br />\
    <img src="styles/legend/2023_1_55.png" /> <br />\
    <img src="styles/legend/2023_1_56.png" /> <br />\
    <img src="styles/legend/2023_1_57.png" /> <br />\
    <img src="styles/legend/2023_1_58.png" /> <br />\
    <img src="styles/legend/2023_1_59.png" /> <br />\
    <img src="styles/legend/2023_1_60.png" /> <br />\
    <img src="styles/legend/2023_1_61.png" /> <br />\
    <img src="styles/legend/2023_1_62.png" /> <br />\
    <img src="styles/legend/2023_1_63.png" /> <br />\
    <img src="styles/legend/2023_1_64.png" /> <br />\
    <img src="styles/legend/2023_1_65.png" /> <br />\
    <img src="styles/legend/2023_1_66.png" /> <br />\
    <img src="styles/legend/2023_1_67.png" /> <br />\
    <img src="styles/legend/2023_1_68.png" /> <br />\
    <img src="styles/legend/2023_1_69.png" /> <br />\
    <img src="styles/legend/2023_1_70.png" /> <br />\
    <img src="styles/legend/2023_1_71.png" /> <br />\
    <img src="styles/legend/2023_1_72.png" /> <br />\
    <img src="styles/legend/2023_1_73.png" /> <br />\
    <img src="styles/legend/2023_1_74.png" /> <br />\
    <img src="styles/legend/2023_1_75.png" /> <br />\
    <img src="styles/legend/2023_1_76.png" /> <br />\
    <img src="styles/legend/2023_1_77.png" /> <br />\
    <img src="styles/legend/2023_1_78.png" /> <br />\
    <img src="styles/legend/2023_1_79.png" /> <br />\
    <img src="styles/legend/2023_1_80.png" /> <br />\
    <img src="styles/legend/2023_1_81.png" /> <br />\
    <img src="styles/legend/2023_1_82.png" /> <br />\
    <img src="styles/legend/2023_1_83.png" /> <br />\
    <img src="styles/legend/2023_1_84.png" /> <br />\
    <img src="styles/legend/2023_1_85.png" /> <br />\
    <img src="styles/legend/2023_1_86.png" /> <br />\
    <img src="styles/legend/2023_1_87.png" /> <br />\
    <img src="styles/legend/2023_1_88.png" /> <br />\
    <img src="styles/legend/2023_1_89.png" /> <br />\
    <img src="styles/legend/2023_1_90.png" /> <br />\
    <img src="styles/legend/2023_1_91.png" /> <br />\
    <img src="styles/legend/2023_1_92.png" /> <br />\
    <img src="styles/legend/2023_1_93.png" /> <br />\
    <img src="styles/legend/2023_1_94.png" /> <br />\
    <img src="styles/legend/2023_1_95.png" /> <br />\
    <img src="styles/legend/2023_1_96.png" /> <br />\
    <img src="styles/legend/2023_1_97.png" /> <br />\
    <img src="styles/legend/2023_1_98.png" /> <br />\
    <img src="styles/legend/2023_1_99.png" /> <br />\
    <img src="styles/legend/2023_1_100.png" /> <br />\
    <img src="styles/legend/2023_1_101.png" /> <br />\
    <img src="styles/legend/2023_1_102.png" /> <br />\
    <img src="styles/legend/2023_1_103.png" /> <br />\
    <img src="styles/legend/2023_1_104.png" /> <br />\
    <img src="styles/legend/2023_1_105.png" /> <br />\
    <img src="styles/legend/2023_1_106.png" /> <br />\
    <img src="styles/legend/2023_1_107.png" /> <br />\
    <img src="styles/legend/2023_1_108.png" /> <br />\
    <img src="styles/legend/2023_1_109.png" /> <br />\
    <img src="styles/legend/2023_1_110.png" /> <br />\
    <img src="styles/legend/2023_1_111.png" /> <br />\
    <img src="styles/legend/2023_1_112.png" /> <br />\
    <img src="styles/legend/2023_1_113.png" /> <br />\
    <img src="styles/legend/2023_1_114.png" /> <br />\
    <img src="styles/legend/2023_1_115.png" /> <br />\
    <img src="styles/legend/2023_1_116.png" /> <br />\
    <img src="styles/legend/2023_1_117.png" /> <br />\
    <img src="styles/legend/2023_1_118.png" /> <br />\
    <img src="styles/legend/2023_1_119.png" /> <br />\
    <img src="styles/legend/2023_1_120.png" /> <br />\
    <img src="styles/legend/2023_1_121.png" /> <br />\
    <img src="styles/legend/2023_1_122.png" /> <br />\
    <img src="styles/legend/2023_1_123.png" /> <br />\
    <img src="styles/legend/2023_1_124.png" /> <br />\
    <img src="styles/legend/2023_1_125.png" /> <br />'
        });
var format_2022_2 = new ol.format.GeoJSON();
var features_2022_2 = format_2022_2.readFeatures(json_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_2.addFeatures(features_2022_2);
var lyr_2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_2, 
                style: style_2022_2,
                popuplayertitle: "2022",
                interactive: true,
    title: '2022<br />\
    <img src="styles/legend/2022_2_0.png" /> <br />\
    <img src="styles/legend/2022_2_1.png" /> <br />\
    <img src="styles/legend/2022_2_2.png" /> <br />\
    <img src="styles/legend/2022_2_3.png" /> <br />\
    <img src="styles/legend/2022_2_4.png" /> <br />\
    <img src="styles/legend/2022_2_5.png" /> <br />\
    <img src="styles/legend/2022_2_6.png" /> <br />\
    <img src="styles/legend/2022_2_7.png" /> <br />\
    <img src="styles/legend/2022_2_8.png" /> <br />\
    <img src="styles/legend/2022_2_9.png" /> <br />\
    <img src="styles/legend/2022_2_10.png" /> <br />\
    <img src="styles/legend/2022_2_11.png" /> <br />\
    <img src="styles/legend/2022_2_12.png" /> <br />\
    <img src="styles/legend/2022_2_13.png" /> <br />\
    <img src="styles/legend/2022_2_14.png" /> <br />\
    <img src="styles/legend/2022_2_15.png" /> <br />\
    <img src="styles/legend/2022_2_16.png" /> <br />\
    <img src="styles/legend/2022_2_17.png" /> <br />\
    <img src="styles/legend/2022_2_18.png" /> <br />\
    <img src="styles/legend/2022_2_19.png" /> <br />\
    <img src="styles/legend/2022_2_20.png" /> <br />\
    <img src="styles/legend/2022_2_21.png" /> <br />\
    <img src="styles/legend/2022_2_22.png" /> <br />\
    <img src="styles/legend/2022_2_23.png" /> <br />\
    <img src="styles/legend/2022_2_24.png" /> <br />\
    <img src="styles/legend/2022_2_25.png" /> <br />\
    <img src="styles/legend/2022_2_26.png" /> <br />\
    <img src="styles/legend/2022_2_27.png" /> <br />\
    <img src="styles/legend/2022_2_28.png" /> <br />\
    <img src="styles/legend/2022_2_29.png" /> <br />\
    <img src="styles/legend/2022_2_30.png" /> <br />\
    <img src="styles/legend/2022_2_31.png" /> <br />\
    <img src="styles/legend/2022_2_32.png" /> <br />\
    <img src="styles/legend/2022_2_33.png" /> <br />\
    <img src="styles/legend/2022_2_34.png" /> <br />\
    <img src="styles/legend/2022_2_35.png" /> <br />\
    <img src="styles/legend/2022_2_36.png" /> <br />\
    <img src="styles/legend/2022_2_37.png" /> <br />\
    <img src="styles/legend/2022_2_38.png" /> <br />\
    <img src="styles/legend/2022_2_39.png" /> <br />\
    <img src="styles/legend/2022_2_40.png" /> <br />\
    <img src="styles/legend/2022_2_41.png" /> <br />\
    <img src="styles/legend/2022_2_42.png" /> <br />\
    <img src="styles/legend/2022_2_43.png" /> <br />\
    <img src="styles/legend/2022_2_44.png" /> <br />\
    <img src="styles/legend/2022_2_45.png" /> <br />\
    <img src="styles/legend/2022_2_46.png" /> <br />\
    <img src="styles/legend/2022_2_47.png" /> <br />\
    <img src="styles/legend/2022_2_48.png" /> <br />\
    <img src="styles/legend/2022_2_49.png" /> <br />\
    <img src="styles/legend/2022_2_50.png" /> <br />\
    <img src="styles/legend/2022_2_51.png" /> <br />\
    <img src="styles/legend/2022_2_52.png" /> <br />\
    <img src="styles/legend/2022_2_53.png" /> <br />\
    <img src="styles/legend/2022_2_54.png" /> <br />\
    <img src="styles/legend/2022_2_55.png" /> <br />\
    <img src="styles/legend/2022_2_56.png" /> <br />\
    <img src="styles/legend/2022_2_57.png" /> <br />\
    <img src="styles/legend/2022_2_58.png" /> <br />\
    <img src="styles/legend/2022_2_59.png" /> <br />\
    <img src="styles/legend/2022_2_60.png" /> <br />\
    <img src="styles/legend/2022_2_61.png" /> <br />\
    <img src="styles/legend/2022_2_62.png" /> <br />\
    <img src="styles/legend/2022_2_63.png" /> <br />\
    <img src="styles/legend/2022_2_64.png" /> <br />\
    <img src="styles/legend/2022_2_65.png" /> <br />\
    <img src="styles/legend/2022_2_66.png" /> <br />\
    <img src="styles/legend/2022_2_67.png" /> <br />\
    <img src="styles/legend/2022_2_68.png" /> <br />\
    <img src="styles/legend/2022_2_69.png" /> <br />\
    <img src="styles/legend/2022_2_70.png" /> <br />\
    <img src="styles/legend/2022_2_71.png" /> <br />\
    <img src="styles/legend/2022_2_72.png" /> <br />\
    <img src="styles/legend/2022_2_73.png" /> <br />\
    <img src="styles/legend/2022_2_74.png" /> <br />\
    <img src="styles/legend/2022_2_75.png" /> <br />\
    <img src="styles/legend/2022_2_76.png" /> <br />\
    <img src="styles/legend/2022_2_77.png" /> <br />\
    <img src="styles/legend/2022_2_78.png" /> <br />\
    <img src="styles/legend/2022_2_79.png" /> <br />\
    <img src="styles/legend/2022_2_80.png" /> <br />\
    <img src="styles/legend/2022_2_81.png" /> <br />\
    <img src="styles/legend/2022_2_82.png" /> <br />\
    <img src="styles/legend/2022_2_83.png" /> <br />\
    <img src="styles/legend/2022_2_84.png" /> <br />\
    <img src="styles/legend/2022_2_85.png" /> <br />\
    <img src="styles/legend/2022_2_86.png" /> <br />\
    <img src="styles/legend/2022_2_87.png" /> <br />\
    <img src="styles/legend/2022_2_88.png" /> <br />\
    <img src="styles/legend/2022_2_89.png" /> <br />\
    <img src="styles/legend/2022_2_90.png" /> <br />\
    <img src="styles/legend/2022_2_91.png" /> <br />\
    <img src="styles/legend/2022_2_92.png" /> <br />\
    <img src="styles/legend/2022_2_93.png" /> <br />\
    <img src="styles/legend/2022_2_94.png" /> <br />\
    <img src="styles/legend/2022_2_95.png" /> <br />\
    <img src="styles/legend/2022_2_96.png" /> <br />\
    <img src="styles/legend/2022_2_97.png" /> <br />\
    <img src="styles/legend/2022_2_98.png" /> <br />\
    <img src="styles/legend/2022_2_99.png" /> <br />\
    <img src="styles/legend/2022_2_100.png" /> <br />\
    <img src="styles/legend/2022_2_101.png" /> <br />\
    <img src="styles/legend/2022_2_102.png" /> <br />\
    <img src="styles/legend/2022_2_103.png" /> <br />\
    <img src="styles/legend/2022_2_104.png" /> <br />\
    <img src="styles/legend/2022_2_105.png" /> <br />\
    <img src="styles/legend/2022_2_106.png" /> <br />\
    <img src="styles/legend/2022_2_107.png" /> <br />\
    <img src="styles/legend/2022_2_108.png" /> <br />\
    <img src="styles/legend/2022_2_109.png" /> <br />\
    <img src="styles/legend/2022_2_110.png" /> <br />\
    <img src="styles/legend/2022_2_111.png" /> <br />\
    <img src="styles/legend/2022_2_112.png" /> <br />\
    <img src="styles/legend/2022_2_113.png" /> <br />\
    <img src="styles/legend/2022_2_114.png" /> <br />\
    <img src="styles/legend/2022_2_115.png" /> <br />\
    <img src="styles/legend/2022_2_116.png" /> <br />\
    <img src="styles/legend/2022_2_117.png" /> <br />\
    <img src="styles/legend/2022_2_118.png" /> <br />\
    <img src="styles/legend/2022_2_119.png" /> <br />\
    <img src="styles/legend/2022_2_120.png" /> <br />\
    <img src="styles/legend/2022_2_121.png" /> <br />\
    <img src="styles/legend/2022_2_122.png" /> <br />\
    <img src="styles/legend/2022_2_123.png" /> <br />\
    <img src="styles/legend/2022_2_124.png" /> <br />\
    <img src="styles/legend/2022_2_125.png" /> <br />\
    <img src="styles/legend/2022_2_126.png" /> <br />'
        });
var format_2021_3 = new ol.format.GeoJSON();
var features_2021_3 = format_2021_3.readFeatures(json_2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_3.addFeatures(features_2021_3);
var lyr_2021_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_3, 
                style: style_2021_3,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_3_0.png" /> <br />\
    <img src="styles/legend/2021_3_1.png" /> <br />\
    <img src="styles/legend/2021_3_2.png" /> <br />\
    <img src="styles/legend/2021_3_3.png" /> <br />\
    <img src="styles/legend/2021_3_4.png" /> <br />\
    <img src="styles/legend/2021_3_5.png" /> <br />\
    <img src="styles/legend/2021_3_6.png" /> <br />\
    <img src="styles/legend/2021_3_7.png" /> <br />\
    <img src="styles/legend/2021_3_8.png" /> <br />\
    <img src="styles/legend/2021_3_9.png" /> <br />\
    <img src="styles/legend/2021_3_10.png" /> <br />\
    <img src="styles/legend/2021_3_11.png" /> <br />\
    <img src="styles/legend/2021_3_12.png" /> <br />\
    <img src="styles/legend/2021_3_13.png" /> <br />\
    <img src="styles/legend/2021_3_14.png" /> <br />\
    <img src="styles/legend/2021_3_15.png" /> <br />\
    <img src="styles/legend/2021_3_16.png" /> <br />\
    <img src="styles/legend/2021_3_17.png" /> <br />\
    <img src="styles/legend/2021_3_18.png" /> <br />\
    <img src="styles/legend/2021_3_19.png" /> <br />\
    <img src="styles/legend/2021_3_20.png" /> <br />\
    <img src="styles/legend/2021_3_21.png" /> <br />\
    <img src="styles/legend/2021_3_22.png" /> <br />\
    <img src="styles/legend/2021_3_23.png" /> <br />\
    <img src="styles/legend/2021_3_24.png" /> <br />\
    <img src="styles/legend/2021_3_25.png" /> <br />\
    <img src="styles/legend/2021_3_26.png" /> <br />\
    <img src="styles/legend/2021_3_27.png" /> <br />\
    <img src="styles/legend/2021_3_28.png" /> <br />\
    <img src="styles/legend/2021_3_29.png" /> <br />\
    <img src="styles/legend/2021_3_30.png" /> <br />\
    <img src="styles/legend/2021_3_31.png" /> <br />\
    <img src="styles/legend/2021_3_32.png" /> <br />\
    <img src="styles/legend/2021_3_33.png" /> <br />\
    <img src="styles/legend/2021_3_34.png" /> <br />\
    <img src="styles/legend/2021_3_35.png" /> <br />\
    <img src="styles/legend/2021_3_36.png" /> <br />\
    <img src="styles/legend/2021_3_37.png" /> <br />\
    <img src="styles/legend/2021_3_38.png" /> <br />\
    <img src="styles/legend/2021_3_39.png" /> <br />\
    <img src="styles/legend/2021_3_40.png" /> <br />\
    <img src="styles/legend/2021_3_41.png" /> <br />\
    <img src="styles/legend/2021_3_42.png" /> <br />\
    <img src="styles/legend/2021_3_43.png" /> <br />\
    <img src="styles/legend/2021_3_44.png" /> <br />\
    <img src="styles/legend/2021_3_45.png" /> <br />\
    <img src="styles/legend/2021_3_46.png" /> <br />\
    <img src="styles/legend/2021_3_47.png" /> <br />\
    <img src="styles/legend/2021_3_48.png" /> <br />\
    <img src="styles/legend/2021_3_49.png" /> <br />\
    <img src="styles/legend/2021_3_50.png" /> <br />\
    <img src="styles/legend/2021_3_51.png" /> <br />\
    <img src="styles/legend/2021_3_52.png" /> <br />\
    <img src="styles/legend/2021_3_53.png" /> <br />\
    <img src="styles/legend/2021_3_54.png" /> <br />\
    <img src="styles/legend/2021_3_55.png" /> <br />\
    <img src="styles/legend/2021_3_56.png" /> <br />\
    <img src="styles/legend/2021_3_57.png" /> <br />\
    <img src="styles/legend/2021_3_58.png" /> <br />\
    <img src="styles/legend/2021_3_59.png" /> <br />\
    <img src="styles/legend/2021_3_60.png" /> <br />\
    <img src="styles/legend/2021_3_61.png" /> <br />\
    <img src="styles/legend/2021_3_62.png" /> <br />\
    <img src="styles/legend/2021_3_63.png" /> <br />\
    <img src="styles/legend/2021_3_64.png" /> <br />\
    <img src="styles/legend/2021_3_65.png" /> <br />\
    <img src="styles/legend/2021_3_66.png" /> <br />\
    <img src="styles/legend/2021_3_67.png" /> <br />\
    <img src="styles/legend/2021_3_68.png" /> <br />\
    <img src="styles/legend/2021_3_69.png" /> <br />\
    <img src="styles/legend/2021_3_70.png" /> <br />\
    <img src="styles/legend/2021_3_71.png" /> <br />\
    <img src="styles/legend/2021_3_72.png" /> <br />\
    <img src="styles/legend/2021_3_73.png" /> <br />\
    <img src="styles/legend/2021_3_74.png" /> <br />\
    <img src="styles/legend/2021_3_75.png" /> <br />\
    <img src="styles/legend/2021_3_76.png" /> <br />\
    <img src="styles/legend/2021_3_77.png" /> <br />\
    <img src="styles/legend/2021_3_78.png" /> <br />\
    <img src="styles/legend/2021_3_79.png" /> <br />\
    <img src="styles/legend/2021_3_80.png" /> <br />\
    <img src="styles/legend/2021_3_81.png" /> <br />\
    <img src="styles/legend/2021_3_82.png" /> <br />\
    <img src="styles/legend/2021_3_83.png" /> <br />\
    <img src="styles/legend/2021_3_84.png" /> <br />\
    <img src="styles/legend/2021_3_85.png" /> <br />\
    <img src="styles/legend/2021_3_86.png" /> <br />\
    <img src="styles/legend/2021_3_87.png" /> <br />\
    <img src="styles/legend/2021_3_88.png" /> <br />\
    <img src="styles/legend/2021_3_89.png" /> <br />\
    <img src="styles/legend/2021_3_90.png" /> <br />\
    <img src="styles/legend/2021_3_91.png" /> <br />\
    <img src="styles/legend/2021_3_92.png" /> <br />\
    <img src="styles/legend/2021_3_93.png" /> <br />\
    <img src="styles/legend/2021_3_94.png" /> <br />\
    <img src="styles/legend/2021_3_95.png" /> <br />\
    <img src="styles/legend/2021_3_96.png" /> <br />\
    <img src="styles/legend/2021_3_97.png" /> <br />\
    <img src="styles/legend/2021_3_98.png" /> <br />\
    <img src="styles/legend/2021_3_99.png" /> <br />\
    <img src="styles/legend/2021_3_100.png" /> <br />\
    <img src="styles/legend/2021_3_101.png" /> <br />\
    <img src="styles/legend/2021_3_102.png" /> <br />\
    <img src="styles/legend/2021_3_103.png" /> <br />\
    <img src="styles/legend/2021_3_104.png" /> <br />\
    <img src="styles/legend/2021_3_105.png" /> <br />\
    <img src="styles/legend/2021_3_106.png" /> <br />\
    <img src="styles/legend/2021_3_107.png" /> <br />\
    <img src="styles/legend/2021_3_108.png" /> <br />\
    <img src="styles/legend/2021_3_109.png" /> <br />\
    <img src="styles/legend/2021_3_110.png" /> <br />\
    <img src="styles/legend/2021_3_111.png" /> <br />\
    <img src="styles/legend/2021_3_112.png" /> <br />\
    <img src="styles/legend/2021_3_113.png" /> <br />\
    <img src="styles/legend/2021_3_114.png" /> <br />\
    <img src="styles/legend/2021_3_115.png" /> <br />\
    <img src="styles/legend/2021_3_116.png" /> <br />\
    <img src="styles/legend/2021_3_117.png" /> <br />\
    <img src="styles/legend/2021_3_118.png" /> <br />\
    <img src="styles/legend/2021_3_119.png" /> <br />\
    <img src="styles/legend/2021_3_120.png" /> <br />\
    <img src="styles/legend/2021_3_121.png" /> <br />\
    <img src="styles/legend/2021_3_122.png" /> <br />\
    <img src="styles/legend/2021_3_123.png" /> <br />\
    <img src="styles/legend/2021_3_124.png" /> <br />\
    <img src="styles/legend/2021_3_125.png" /> <br />\
    <img src="styles/legend/2021_3_126.png" /> <br />\
    <img src="styles/legend/2021_3_127.png" /> <br />\
    <img src="styles/legend/2021_3_128.png" /> <br />'
        });
var format_2020_4 = new ol.format.GeoJSON();
var features_2020_4 = format_2020_4.readFeatures(json_2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_4.addFeatures(features_2020_4);
var lyr_2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020_4, 
                style: style_2020_4,
                popuplayertitle: "2020",
                interactive: true,
    title: '2020<br />\
    <img src="styles/legend/2020_4_0.png" /> <br />\
    <img src="styles/legend/2020_4_1.png" /> <br />\
    <img src="styles/legend/2020_4_2.png" /> <br />\
    <img src="styles/legend/2020_4_3.png" /> <br />\
    <img src="styles/legend/2020_4_4.png" /> <br />\
    <img src="styles/legend/2020_4_5.png" /> <br />\
    <img src="styles/legend/2020_4_6.png" /> <br />\
    <img src="styles/legend/2020_4_7.png" /> <br />\
    <img src="styles/legend/2020_4_8.png" /> <br />\
    <img src="styles/legend/2020_4_9.png" /> <br />\
    <img src="styles/legend/2020_4_10.png" /> <br />\
    <img src="styles/legend/2020_4_11.png" /> <br />\
    <img src="styles/legend/2020_4_12.png" /> <br />\
    <img src="styles/legend/2020_4_13.png" /> <br />\
    <img src="styles/legend/2020_4_14.png" /> <br />\
    <img src="styles/legend/2020_4_15.png" /> <br />\
    <img src="styles/legend/2020_4_16.png" /> <br />\
    <img src="styles/legend/2020_4_17.png" /> <br />\
    <img src="styles/legend/2020_4_18.png" /> <br />\
    <img src="styles/legend/2020_4_19.png" /> <br />\
    <img src="styles/legend/2020_4_20.png" /> <br />\
    <img src="styles/legend/2020_4_21.png" /> <br />\
    <img src="styles/legend/2020_4_22.png" /> <br />\
    <img src="styles/legend/2020_4_23.png" /> <br />\
    <img src="styles/legend/2020_4_24.png" /> <br />\
    <img src="styles/legend/2020_4_25.png" /> <br />\
    <img src="styles/legend/2020_4_26.png" /> <br />\
    <img src="styles/legend/2020_4_27.png" /> <br />\
    <img src="styles/legend/2020_4_28.png" /> <br />\
    <img src="styles/legend/2020_4_29.png" /> <br />\
    <img src="styles/legend/2020_4_30.png" /> <br />\
    <img src="styles/legend/2020_4_31.png" /> <br />\
    <img src="styles/legend/2020_4_32.png" /> <br />\
    <img src="styles/legend/2020_4_33.png" /> <br />\
    <img src="styles/legend/2020_4_34.png" /> <br />\
    <img src="styles/legend/2020_4_35.png" /> <br />\
    <img src="styles/legend/2020_4_36.png" /> <br />\
    <img src="styles/legend/2020_4_37.png" /> <br />\
    <img src="styles/legend/2020_4_38.png" /> <br />\
    <img src="styles/legend/2020_4_39.png" /> <br />\
    <img src="styles/legend/2020_4_40.png" /> <br />\
    <img src="styles/legend/2020_4_41.png" /> <br />\
    <img src="styles/legend/2020_4_42.png" /> <br />\
    <img src="styles/legend/2020_4_43.png" /> <br />\
    <img src="styles/legend/2020_4_44.png" /> <br />\
    <img src="styles/legend/2020_4_45.png" /> <br />\
    <img src="styles/legend/2020_4_46.png" /> <br />\
    <img src="styles/legend/2020_4_47.png" /> <br />\
    <img src="styles/legend/2020_4_48.png" /> <br />\
    <img src="styles/legend/2020_4_49.png" /> <br />\
    <img src="styles/legend/2020_4_50.png" /> <br />\
    <img src="styles/legend/2020_4_51.png" /> <br />\
    <img src="styles/legend/2020_4_52.png" /> <br />\
    <img src="styles/legend/2020_4_53.png" /> <br />\
    <img src="styles/legend/2020_4_54.png" /> <br />\
    <img src="styles/legend/2020_4_55.png" /> <br />\
    <img src="styles/legend/2020_4_56.png" /> <br />\
    <img src="styles/legend/2020_4_57.png" /> <br />\
    <img src="styles/legend/2020_4_58.png" /> <br />\
    <img src="styles/legend/2020_4_59.png" /> <br />\
    <img src="styles/legend/2020_4_60.png" /> <br />\
    <img src="styles/legend/2020_4_61.png" /> <br />\
    <img src="styles/legend/2020_4_62.png" /> <br />\
    <img src="styles/legend/2020_4_63.png" /> <br />\
    <img src="styles/legend/2020_4_64.png" /> <br />\
    <img src="styles/legend/2020_4_65.png" /> <br />\
    <img src="styles/legend/2020_4_66.png" /> <br />\
    <img src="styles/legend/2020_4_67.png" /> <br />\
    <img src="styles/legend/2020_4_68.png" /> <br />\
    <img src="styles/legend/2020_4_69.png" /> <br />\
    <img src="styles/legend/2020_4_70.png" /> <br />\
    <img src="styles/legend/2020_4_71.png" /> <br />\
    <img src="styles/legend/2020_4_72.png" /> <br />\
    <img src="styles/legend/2020_4_73.png" /> <br />\
    <img src="styles/legend/2020_4_74.png" /> <br />\
    <img src="styles/legend/2020_4_75.png" /> <br />\
    <img src="styles/legend/2020_4_76.png" /> <br />\
    <img src="styles/legend/2020_4_77.png" /> <br />\
    <img src="styles/legend/2020_4_78.png" /> <br />\
    <img src="styles/legend/2020_4_79.png" /> <br />\
    <img src="styles/legend/2020_4_80.png" /> <br />\
    <img src="styles/legend/2020_4_81.png" /> <br />\
    <img src="styles/legend/2020_4_82.png" /> <br />\
    <img src="styles/legend/2020_4_83.png" /> <br />\
    <img src="styles/legend/2020_4_84.png" /> <br />\
    <img src="styles/legend/2020_4_85.png" /> <br />\
    <img src="styles/legend/2020_4_86.png" /> <br />\
    <img src="styles/legend/2020_4_87.png" /> <br />\
    <img src="styles/legend/2020_4_88.png" /> <br />\
    <img src="styles/legend/2020_4_89.png" /> <br />\
    <img src="styles/legend/2020_4_90.png" /> <br />\
    <img src="styles/legend/2020_4_91.png" /> <br />\
    <img src="styles/legend/2020_4_92.png" /> <br />\
    <img src="styles/legend/2020_4_93.png" /> <br />\
    <img src="styles/legend/2020_4_94.png" /> <br />\
    <img src="styles/legend/2020_4_95.png" /> <br />\
    <img src="styles/legend/2020_4_96.png" /> <br />\
    <img src="styles/legend/2020_4_97.png" /> <br />\
    <img src="styles/legend/2020_4_98.png" /> <br />\
    <img src="styles/legend/2020_4_99.png" /> <br />\
    <img src="styles/legend/2020_4_100.png" /> <br />\
    <img src="styles/legend/2020_4_101.png" /> <br />\
    <img src="styles/legend/2020_4_102.png" /> <br />\
    <img src="styles/legend/2020_4_103.png" /> <br />\
    <img src="styles/legend/2020_4_104.png" /> <br />\
    <img src="styles/legend/2020_4_105.png" /> <br />\
    <img src="styles/legend/2020_4_106.png" /> <br />\
    <img src="styles/legend/2020_4_107.png" /> <br />\
    <img src="styles/legend/2020_4_108.png" /> <br />\
    <img src="styles/legend/2020_4_109.png" /> <br />\
    <img src="styles/legend/2020_4_110.png" /> <br />\
    <img src="styles/legend/2020_4_111.png" /> <br />\
    <img src="styles/legend/2020_4_112.png" /> <br />\
    <img src="styles/legend/2020_4_113.png" /> <br />\
    <img src="styles/legend/2020_4_114.png" /> <br />\
    <img src="styles/legend/2020_4_115.png" /> <br />\
    <img src="styles/legend/2020_4_116.png" /> <br />\
    <img src="styles/legend/2020_4_117.png" /> <br />\
    <img src="styles/legend/2020_4_118.png" /> <br />\
    <img src="styles/legend/2020_4_119.png" /> <br />\
    <img src="styles/legend/2020_4_120.png" /> <br />\
    <img src="styles/legend/2020_4_121.png" /> <br />\
    <img src="styles/legend/2020_4_122.png" /> <br />\
    <img src="styles/legend/2020_4_123.png" /> <br />\
    <img src="styles/legend/2020_4_124.png" /> <br />\
    <img src="styles/legend/2020_4_125.png" /> <br />\
    <img src="styles/legend/2020_4_126.png" /> <br />\
    <img src="styles/legend/2020_4_127.png" /> <br />\
    <img src="styles/legend/2020_4_128.png" /> <br />\
    <img src="styles/legend/2020_4_129.png" /> <br />'
        });
var format_2019_5 = new ol.format.GeoJSON();
var features_2019_5 = format_2019_5.readFeatures(json_2019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_5.addFeatures(features_2019_5);
var lyr_2019_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_5, 
                style: style_2019_5,
                popuplayertitle: "2019",
                interactive: true,
    title: '2019<br />\
    <img src="styles/legend/2019_5_0.png" /> <br />\
    <img src="styles/legend/2019_5_1.png" /> <br />\
    <img src="styles/legend/2019_5_2.png" /> <br />\
    <img src="styles/legend/2019_5_3.png" /> <br />\
    <img src="styles/legend/2019_5_4.png" /> <br />\
    <img src="styles/legend/2019_5_5.png" /> <br />\
    <img src="styles/legend/2019_5_6.png" /> <br />\
    <img src="styles/legend/2019_5_7.png" /> <br />\
    <img src="styles/legend/2019_5_8.png" /> <br />\
    <img src="styles/legend/2019_5_9.png" /> <br />\
    <img src="styles/legend/2019_5_10.png" /> <br />\
    <img src="styles/legend/2019_5_11.png" /> <br />\
    <img src="styles/legend/2019_5_12.png" /> <br />\
    <img src="styles/legend/2019_5_13.png" /> <br />\
    <img src="styles/legend/2019_5_14.png" /> <br />\
    <img src="styles/legend/2019_5_15.png" /> <br />\
    <img src="styles/legend/2019_5_16.png" /> <br />\
    <img src="styles/legend/2019_5_17.png" /> <br />\
    <img src="styles/legend/2019_5_18.png" /> <br />\
    <img src="styles/legend/2019_5_19.png" /> <br />\
    <img src="styles/legend/2019_5_20.png" /> <br />\
    <img src="styles/legend/2019_5_21.png" /> <br />\
    <img src="styles/legend/2019_5_22.png" /> <br />\
    <img src="styles/legend/2019_5_23.png" /> <br />\
    <img src="styles/legend/2019_5_24.png" /> <br />\
    <img src="styles/legend/2019_5_25.png" /> <br />\
    <img src="styles/legend/2019_5_26.png" /> <br />\
    <img src="styles/legend/2019_5_27.png" /> <br />\
    <img src="styles/legend/2019_5_28.png" /> <br />\
    <img src="styles/legend/2019_5_29.png" /> <br />\
    <img src="styles/legend/2019_5_30.png" /> <br />\
    <img src="styles/legend/2019_5_31.png" /> <br />\
    <img src="styles/legend/2019_5_32.png" /> <br />\
    <img src="styles/legend/2019_5_33.png" /> <br />\
    <img src="styles/legend/2019_5_34.png" /> <br />\
    <img src="styles/legend/2019_5_35.png" /> <br />\
    <img src="styles/legend/2019_5_36.png" /> <br />\
    <img src="styles/legend/2019_5_37.png" /> <br />\
    <img src="styles/legend/2019_5_38.png" /> <br />\
    <img src="styles/legend/2019_5_39.png" /> <br />\
    <img src="styles/legend/2019_5_40.png" /> <br />\
    <img src="styles/legend/2019_5_41.png" /> <br />\
    <img src="styles/legend/2019_5_42.png" /> <br />\
    <img src="styles/legend/2019_5_43.png" /> <br />\
    <img src="styles/legend/2019_5_44.png" /> <br />\
    <img src="styles/legend/2019_5_45.png" /> <br />\
    <img src="styles/legend/2019_5_46.png" /> <br />\
    <img src="styles/legend/2019_5_47.png" /> <br />\
    <img src="styles/legend/2019_5_48.png" /> <br />\
    <img src="styles/legend/2019_5_49.png" /> <br />\
    <img src="styles/legend/2019_5_50.png" /> <br />\
    <img src="styles/legend/2019_5_51.png" /> <br />\
    <img src="styles/legend/2019_5_52.png" /> <br />\
    <img src="styles/legend/2019_5_53.png" /> <br />\
    <img src="styles/legend/2019_5_54.png" /> <br />\
    <img src="styles/legend/2019_5_55.png" /> <br />\
    <img src="styles/legend/2019_5_56.png" /> <br />\
    <img src="styles/legend/2019_5_57.png" /> <br />\
    <img src="styles/legend/2019_5_58.png" /> <br />\
    <img src="styles/legend/2019_5_59.png" /> <br />\
    <img src="styles/legend/2019_5_60.png" /> <br />\
    <img src="styles/legend/2019_5_61.png" /> <br />\
    <img src="styles/legend/2019_5_62.png" /> <br />\
    <img src="styles/legend/2019_5_63.png" /> <br />\
    <img src="styles/legend/2019_5_64.png" /> <br />\
    <img src="styles/legend/2019_5_65.png" /> <br />\
    <img src="styles/legend/2019_5_66.png" /> <br />\
    <img src="styles/legend/2019_5_67.png" /> <br />\
    <img src="styles/legend/2019_5_68.png" /> <br />\
    <img src="styles/legend/2019_5_69.png" /> <br />\
    <img src="styles/legend/2019_5_70.png" /> <br />\
    <img src="styles/legend/2019_5_71.png" /> <br />\
    <img src="styles/legend/2019_5_72.png" /> <br />\
    <img src="styles/legend/2019_5_73.png" /> <br />\
    <img src="styles/legend/2019_5_74.png" /> <br />\
    <img src="styles/legend/2019_5_75.png" /> <br />\
    <img src="styles/legend/2019_5_76.png" /> <br />\
    <img src="styles/legend/2019_5_77.png" /> <br />\
    <img src="styles/legend/2019_5_78.png" /> <br />\
    <img src="styles/legend/2019_5_79.png" /> <br />\
    <img src="styles/legend/2019_5_80.png" /> <br />\
    <img src="styles/legend/2019_5_81.png" /> <br />\
    <img src="styles/legend/2019_5_82.png" /> <br />\
    <img src="styles/legend/2019_5_83.png" /> <br />\
    <img src="styles/legend/2019_5_84.png" /> <br />\
    <img src="styles/legend/2019_5_85.png" /> <br />\
    <img src="styles/legend/2019_5_86.png" /> <br />\
    <img src="styles/legend/2019_5_87.png" /> <br />\
    <img src="styles/legend/2019_5_88.png" /> <br />\
    <img src="styles/legend/2019_5_89.png" /> <br />\
    <img src="styles/legend/2019_5_90.png" /> <br />\
    <img src="styles/legend/2019_5_91.png" /> <br />\
    <img src="styles/legend/2019_5_92.png" /> <br />\
    <img src="styles/legend/2019_5_93.png" /> <br />\
    <img src="styles/legend/2019_5_94.png" /> <br />\
    <img src="styles/legend/2019_5_95.png" /> <br />\
    <img src="styles/legend/2019_5_96.png" /> <br />\
    <img src="styles/legend/2019_5_97.png" /> <br />\
    <img src="styles/legend/2019_5_98.png" /> <br />\
    <img src="styles/legend/2019_5_99.png" /> <br />\
    <img src="styles/legend/2019_5_100.png" /> <br />\
    <img src="styles/legend/2019_5_101.png" /> <br />\
    <img src="styles/legend/2019_5_102.png" /> <br />\
    <img src="styles/legend/2019_5_103.png" /> <br />\
    <img src="styles/legend/2019_5_104.png" /> <br />\
    <img src="styles/legend/2019_5_105.png" /> <br />\
    <img src="styles/legend/2019_5_106.png" /> <br />\
    <img src="styles/legend/2019_5_107.png" /> <br />\
    <img src="styles/legend/2019_5_108.png" /> <br />\
    <img src="styles/legend/2019_5_109.png" /> <br />\
    <img src="styles/legend/2019_5_110.png" /> <br />\
    <img src="styles/legend/2019_5_111.png" /> <br />\
    <img src="styles/legend/2019_5_112.png" /> <br />\
    <img src="styles/legend/2019_5_113.png" /> <br />\
    <img src="styles/legend/2019_5_114.png" /> <br />\
    <img src="styles/legend/2019_5_115.png" /> <br />\
    <img src="styles/legend/2019_5_116.png" /> <br />\
    <img src="styles/legend/2019_5_117.png" /> <br />\
    <img src="styles/legend/2019_5_118.png" /> <br />\
    <img src="styles/legend/2019_5_119.png" /> <br />\
    <img src="styles/legend/2019_5_120.png" /> <br />\
    <img src="styles/legend/2019_5_121.png" /> <br />\
    <img src="styles/legend/2019_5_122.png" /> <br />\
    <img src="styles/legend/2019_5_123.png" /> <br />\
    <img src="styles/legend/2019_5_124.png" /> <br />\
    <img src="styles/legend/2019_5_125.png" /> <br />\
    <img src="styles/legend/2019_5_126.png" /> <br />\
    <img src="styles/legend/2019_5_127.png" /> <br />'
        });
var format_BDI_6 = new ol.format.GeoJSON();
var features_BDI_6 = format_BDI_6.readFeatures(json_BDI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BDI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDI_6.addFeatures(features_BDI_6);
var lyr_BDI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDI_6, 
                style: style_BDI_6,
                popuplayertitle: "BDI",
                interactive: true,
    title: 'BDI<br />\
    <img src="styles/legend/BDI_6_0.png" /> <br />\
    <img src="styles/legend/BDI_6_1.png" /> <br />\
    <img src="styles/legend/BDI_6_2.png" /> <br />\
    <img src="styles/legend/BDI_6_3.png" /> <br />\
    <img src="styles/legend/BDI_6_4.png" /> <br />\
    <img src="styles/legend/BDI_6_5.png" /> <br />\
    <img src="styles/legend/BDI_6_6.png" /> <br />\
    <img src="styles/legend/BDI_6_7.png" /> <br />\
    <img src="styles/legend/BDI_6_8.png" /> <br />\
    <img src="styles/legend/BDI_6_9.png" /> <br />\
    <img src="styles/legend/BDI_6_10.png" /> <br />\
    <img src="styles/legend/BDI_6_11.png" /> <br />\
    <img src="styles/legend/BDI_6_12.png" /> <br />\
    <img src="styles/legend/BDI_6_13.png" /> <br />\
    <img src="styles/legend/BDI_6_14.png" /> <br />\
    <img src="styles/legend/BDI_6_15.png" /> <br />\
    <img src="styles/legend/BDI_6_16.png" /> <br />\
    <img src="styles/legend/BDI_6_17.png" /> <br />\
    <img src="styles/legend/BDI_6_18.png" /> <br />\
    <img src="styles/legend/BDI_6_19.png" /> <br />\
    <img src="styles/legend/BDI_6_20.png" /> <br />\
    <img src="styles/legend/BDI_6_21.png" /> <br />\
    <img src="styles/legend/BDI_6_22.png" /> <br />\
    <img src="styles/legend/BDI_6_23.png" /> <br />\
    <img src="styles/legend/BDI_6_24.png" /> <br />\
    <img src="styles/legend/BDI_6_25.png" /> <br />\
    <img src="styles/legend/BDI_6_26.png" /> <br />\
    <img src="styles/legend/BDI_6_27.png" /> <br />\
    <img src="styles/legend/BDI_6_28.png" /> <br />\
    <img src="styles/legend/BDI_6_29.png" /> <br />\
    <img src="styles/legend/BDI_6_30.png" /> <br />\
    <img src="styles/legend/BDI_6_31.png" /> <br />\
    <img src="styles/legend/BDI_6_32.png" /> <br />\
    <img src="styles/legend/BDI_6_33.png" /> <br />\
    <img src="styles/legend/BDI_6_34.png" /> <br />\
    <img src="styles/legend/BDI_6_35.png" /> <br />\
    <img src="styles/legend/BDI_6_36.png" /> <br />\
    <img src="styles/legend/BDI_6_37.png" /> <br />\
    <img src="styles/legend/BDI_6_38.png" /> <br />\
    <img src="styles/legend/BDI_6_39.png" /> <br />\
    <img src="styles/legend/BDI_6_40.png" /> <br />\
    <img src="styles/legend/BDI_6_41.png" /> <br />\
    <img src="styles/legend/BDI_6_42.png" /> <br />\
    <img src="styles/legend/BDI_6_43.png" /> <br />\
    <img src="styles/legend/BDI_6_44.png" /> <br />\
    <img src="styles/legend/BDI_6_45.png" /> <br />\
    <img src="styles/legend/BDI_6_46.png" /> <br />\
    <img src="styles/legend/BDI_6_47.png" /> <br />\
    <img src="styles/legend/BDI_6_48.png" /> <br />\
    <img src="styles/legend/BDI_6_49.png" /> <br />\
    <img src="styles/legend/BDI_6_50.png" /> <br />\
    <img src="styles/legend/BDI_6_51.png" /> <br />\
    <img src="styles/legend/BDI_6_52.png" /> <br />\
    <img src="styles/legend/BDI_6_53.png" /> <br />\
    <img src="styles/legend/BDI_6_54.png" /> <br />\
    <img src="styles/legend/BDI_6_55.png" /> <br />\
    <img src="styles/legend/BDI_6_56.png" /> <br />\
    <img src="styles/legend/BDI_6_57.png" /> <br />\
    <img src="styles/legend/BDI_6_58.png" /> <br />\
    <img src="styles/legend/BDI_6_59.png" /> <br />\
    <img src="styles/legend/BDI_6_60.png" /> <br />\
    <img src="styles/legend/BDI_6_61.png" /> <br />\
    <img src="styles/legend/BDI_6_62.png" /> <br />\
    <img src="styles/legend/BDI_6_63.png" /> <br />\
    <img src="styles/legend/BDI_6_64.png" /> <br />\
    <img src="styles/legend/BDI_6_65.png" /> <br />\
    <img src="styles/legend/BDI_6_66.png" /> <br />\
    <img src="styles/legend/BDI_6_67.png" /> <br />\
    <img src="styles/legend/BDI_6_68.png" /> <br />\
    <img src="styles/legend/BDI_6_69.png" /> <br />\
    <img src="styles/legend/BDI_6_70.png" /> <br />\
    <img src="styles/legend/BDI_6_71.png" /> <br />\
    <img src="styles/legend/BDI_6_72.png" /> <br />\
    <img src="styles/legend/BDI_6_73.png" /> <br />\
    <img src="styles/legend/BDI_6_74.png" /> <br />\
    <img src="styles/legend/BDI_6_75.png" /> <br />\
    <img src="styles/legend/BDI_6_76.png" /> <br />\
    <img src="styles/legend/BDI_6_77.png" /> <br />\
    <img src="styles/legend/BDI_6_78.png" /> <br />\
    <img src="styles/legend/BDI_6_79.png" /> <br />\
    <img src="styles/legend/BDI_6_80.png" /> <br />\
    <img src="styles/legend/BDI_6_81.png" /> <br />\
    <img src="styles/legend/BDI_6_82.png" /> <br />\
    <img src="styles/legend/BDI_6_83.png" /> <br />\
    <img src="styles/legend/BDI_6_84.png" /> <br />\
    <img src="styles/legend/BDI_6_85.png" /> <br />\
    <img src="styles/legend/BDI_6_86.png" /> <br />\
    <img src="styles/legend/BDI_6_87.png" /> <br />\
    <img src="styles/legend/BDI_6_88.png" /> <br />\
    <img src="styles/legend/BDI_6_89.png" /> <br />\
    <img src="styles/legend/BDI_6_90.png" /> <br />\
    <img src="styles/legend/BDI_6_91.png" /> <br />\
    <img src="styles/legend/BDI_6_92.png" /> <br />\
    <img src="styles/legend/BDI_6_93.png" /> <br />\
    <img src="styles/legend/BDI_6_94.png" /> <br />\
    <img src="styles/legend/BDI_6_95.png" /> <br />\
    <img src="styles/legend/BDI_6_96.png" /> <br />\
    <img src="styles/legend/BDI_6_97.png" /> <br />\
    <img src="styles/legend/BDI_6_98.png" /> <br />\
    <img src="styles/legend/BDI_6_99.png" /> <br />\
    <img src="styles/legend/BDI_6_100.png" /> <br />\
    <img src="styles/legend/BDI_6_101.png" /> <br />\
    <img src="styles/legend/BDI_6_102.png" /> <br />\
    <img src="styles/legend/BDI_6_103.png" /> <br />\
    <img src="styles/legend/BDI_6_104.png" /> <br />\
    <img src="styles/legend/BDI_6_105.png" /> <br />\
    <img src="styles/legend/BDI_6_106.png" /> <br />\
    <img src="styles/legend/BDI_6_107.png" /> <br />\
    <img src="styles/legend/BDI_6_108.png" /> <br />\
    <img src="styles/legend/BDI_6_109.png" /> <br />\
    <img src="styles/legend/BDI_6_110.png" /> <br />\
    <img src="styles/legend/BDI_6_111.png" /> <br />\
    <img src="styles/legend/BDI_6_112.png" /> <br />\
    <img src="styles/legend/BDI_6_113.png" /> <br />\
    <img src="styles/legend/BDI_6_114.png" /> <br />\
    <img src="styles/legend/BDI_6_115.png" /> <br />\
    <img src="styles/legend/BDI_6_116.png" /> <br />\
    <img src="styles/legend/BDI_6_117.png" /> <br />\
    <img src="styles/legend/BDI_6_118.png" /> <br />\
    <img src="styles/legend/BDI_6_119.png" /> <br />\
    <img src="styles/legend/BDI_6_120.png" /> <br />\
    <img src="styles/legend/BDI_6_121.png" /> <br />\
    <img src="styles/legend/BDI_6_122.png" /> <br />\
    <img src="styles/legend/BDI_6_123.png" /> <br />\
    <img src="styles/legend/BDI_6_124.png" /> <br />\
    <img src="styles/legend/BDI_6_125.png" /> <br />\
    <img src="styles/legend/BDI_6_126.png" /> <br />\
    <img src="styles/legend/BDI_6_127.png" /> <br />\
    <img src="styles/legend/BDI_6_128.png" /> <br />'
        });
var format_RCEF_7 = new ol.format.GeoJSON();
var features_RCEF_7 = format_RCEF_7.readFeatures(json_RCEF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RCEF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCEF_7.addFeatures(features_RCEF_7);
var lyr_RCEF_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RCEF_7, 
                style: style_RCEF_7,
                popuplayertitle: "RCEF",
                interactive: true,
    title: 'RCEF<br />\
    <img src="styles/legend/RCEF_7_0.png" /> <br />\
    <img src="styles/legend/RCEF_7_1.png" /> <br />\
    <img src="styles/legend/RCEF_7_2.png" /> <br />\
    <img src="styles/legend/RCEF_7_3.png" /> <br />\
    <img src="styles/legend/RCEF_7_4.png" /> <br />\
    <img src="styles/legend/RCEF_7_5.png" /> <br />\
    <img src="styles/legend/RCEF_7_6.png" /> <br />\
    <img src="styles/legend/RCEF_7_7.png" /> <br />\
    <img src="styles/legend/RCEF_7_8.png" /> <br />\
    <img src="styles/legend/RCEF_7_9.png" /> <br />\
    <img src="styles/legend/RCEF_7_10.png" /> <br />\
    <img src="styles/legend/RCEF_7_11.png" /> <br />\
    <img src="styles/legend/RCEF_7_12.png" /> <br />\
    <img src="styles/legend/RCEF_7_13.png" /> <br />\
    <img src="styles/legend/RCEF_7_14.png" /> <br />\
    <img src="styles/legend/RCEF_7_15.png" /> <br />\
    <img src="styles/legend/RCEF_7_16.png" /> <br />\
    <img src="styles/legend/RCEF_7_17.png" /> <br />\
    <img src="styles/legend/RCEF_7_18.png" /> <br />\
    <img src="styles/legend/RCEF_7_19.png" /> <br />\
    <img src="styles/legend/RCEF_7_20.png" /> <br />\
    <img src="styles/legend/RCEF_7_21.png" /> <br />\
    <img src="styles/legend/RCEF_7_22.png" /> <br />\
    <img src="styles/legend/RCEF_7_23.png" /> <br />\
    <img src="styles/legend/RCEF_7_24.png" /> <br />\
    <img src="styles/legend/RCEF_7_25.png" /> <br />\
    <img src="styles/legend/RCEF_7_26.png" /> <br />\
    <img src="styles/legend/RCEF_7_27.png" /> <br />\
    <img src="styles/legend/RCEF_7_28.png" /> <br />\
    <img src="styles/legend/RCEF_7_29.png" /> <br />\
    <img src="styles/legend/RCEF_7_30.png" /> <br />\
    <img src="styles/legend/RCEF_7_31.png" /> <br />\
    <img src="styles/legend/RCEF_7_32.png" /> <br />\
    <img src="styles/legend/RCEF_7_33.png" /> <br />\
    <img src="styles/legend/RCEF_7_34.png" /> <br />\
    <img src="styles/legend/RCEF_7_35.png" /> <br />\
    <img src="styles/legend/RCEF_7_36.png" /> <br />\
    <img src="styles/legend/RCEF_7_37.png" /> <br />\
    <img src="styles/legend/RCEF_7_38.png" /> <br />\
    <img src="styles/legend/RCEF_7_39.png" /> <br />\
    <img src="styles/legend/RCEF_7_40.png" /> <br />\
    <img src="styles/legend/RCEF_7_41.png" /> <br />\
    <img src="styles/legend/RCEF_7_42.png" /> <br />\
    <img src="styles/legend/RCEF_7_43.png" /> <br />\
    <img src="styles/legend/RCEF_7_44.png" /> <br />\
    <img src="styles/legend/RCEF_7_45.png" /> <br />\
    <img src="styles/legend/RCEF_7_46.png" /> <br />\
    <img src="styles/legend/RCEF_7_47.png" /> <br />\
    <img src="styles/legend/RCEF_7_48.png" /> <br />\
    <img src="styles/legend/RCEF_7_49.png" /> <br />\
    <img src="styles/legend/RCEF_7_50.png" /> <br />\
    <img src="styles/legend/RCEF_7_51.png" /> <br />\
    <img src="styles/legend/RCEF_7_52.png" /> <br />\
    <img src="styles/legend/RCEF_7_53.png" /> <br />\
    <img src="styles/legend/RCEF_7_54.png" /> <br />\
    <img src="styles/legend/RCEF_7_55.png" /> <br />\
    <img src="styles/legend/RCEF_7_56.png" /> <br />\
    <img src="styles/legend/RCEF_7_57.png" /> <br />\
    <img src="styles/legend/RCEF_7_58.png" /> <br />\
    <img src="styles/legend/RCEF_7_59.png" /> <br />\
    <img src="styles/legend/RCEF_7_60.png" /> <br />\
    <img src="styles/legend/RCEF_7_61.png" /> <br />\
    <img src="styles/legend/RCEF_7_62.png" /> <br />\
    <img src="styles/legend/RCEF_7_63.png" /> <br />\
    <img src="styles/legend/RCEF_7_64.png" /> <br />\
    <img src="styles/legend/RCEF_7_65.png" /> <br />\
    <img src="styles/legend/RCEF_7_66.png" /> <br />\
    <img src="styles/legend/RCEF_7_67.png" /> <br />\
    <img src="styles/legend/RCEF_7_68.png" /> <br />\
    <img src="styles/legend/RCEF_7_69.png" /> <br />\
    <img src="styles/legend/RCEF_7_70.png" /> <br />\
    <img src="styles/legend/RCEF_7_71.png" /> <br />\
    <img src="styles/legend/RCEF_7_72.png" /> <br />\
    <img src="styles/legend/RCEF_7_73.png" /> <br />\
    <img src="styles/legend/RCEF_7_74.png" /> <br />\
    <img src="styles/legend/RCEF_7_75.png" /> <br />\
    <img src="styles/legend/RCEF_7_76.png" /> <br />\
    <img src="styles/legend/RCEF_7_77.png" /> <br />\
    <img src="styles/legend/RCEF_7_78.png" /> <br />\
    <img src="styles/legend/RCEF_7_79.png" /> <br />\
    <img src="styles/legend/RCEF_7_80.png" /> <br />\
    <img src="styles/legend/RCEF_7_81.png" /> <br />\
    <img src="styles/legend/RCEF_7_82.png" /> <br />\
    <img src="styles/legend/RCEF_7_83.png" /> <br />\
    <img src="styles/legend/RCEF_7_84.png" /> <br />\
    <img src="styles/legend/RCEF_7_85.png" /> <br />\
    <img src="styles/legend/RCEF_7_86.png" /> <br />\
    <img src="styles/legend/RCEF_7_87.png" /> <br />\
    <img src="styles/legend/RCEF_7_88.png" /> <br />\
    <img src="styles/legend/RCEF_7_89.png" /> <br />\
    <img src="styles/legend/RCEF_7_90.png" /> <br />\
    <img src="styles/legend/RCEF_7_91.png" /> <br />\
    <img src="styles/legend/RCEF_7_92.png" /> <br />\
    <img src="styles/legend/RCEF_7_93.png" /> <br />\
    <img src="styles/legend/RCEF_7_94.png" /> <br />\
    <img src="styles/legend/RCEF_7_95.png" /> <br />\
    <img src="styles/legend/RCEF_7_96.png" /> <br />\
    <img src="styles/legend/RCEF_7_97.png" /> <br />\
    <img src="styles/legend/RCEF_7_98.png" /> <br />\
    <img src="styles/legend/RCEF_7_99.png" /> <br />\
    <img src="styles/legend/RCEF_7_100.png" /> <br />\
    <img src="styles/legend/RCEF_7_101.png" /> <br />\
    <img src="styles/legend/RCEF_7_102.png" /> <br />\
    <img src="styles/legend/RCEF_7_103.png" /> <br />\
    <img src="styles/legend/RCEF_7_104.png" /> <br />\
    <img src="styles/legend/RCEF_7_105.png" /> <br />\
    <img src="styles/legend/RCEF_7_106.png" /> <br />\
    <img src="styles/legend/RCEF_7_107.png" /> <br />\
    <img src="styles/legend/RCEF_7_108.png" /> <br />\
    <img src="styles/legend/RCEF_7_109.png" /> <br />\
    <img src="styles/legend/RCEF_7_110.png" /> <br />\
    <img src="styles/legend/RCEF_7_111.png" /> <br />\
    <img src="styles/legend/RCEF_7_112.png" /> <br />\
    <img src="styles/legend/RCEF_7_113.png" /> <br />\
    <img src="styles/legend/RCEF_7_114.png" /> <br />\
    <img src="styles/legend/RCEF_7_115.png" /> <br />\
    <img src="styles/legend/RCEF_7_116.png" /> <br />\
    <img src="styles/legend/RCEF_7_117.png" /> <br />\
    <img src="styles/legend/RCEF_7_118.png" /> <br />\
    <img src="styles/legend/RCEF_7_119.png" /> <br />\
    <img src="styles/legend/RCEF_7_120.png" /> <br />\
    <img src="styles/legend/RCEF_7_121.png" /> <br />\
    <img src="styles/legend/RCEF_7_122.png" /> <br />\
    <img src="styles/legend/RCEF_7_123.png" /> <br />\
    <img src="styles/legend/RCEF_7_124.png" /> <br />\
    <img src="styles/legend/RCEF_7_125.png" /> <br />\
    <img src="styles/legend/RCEF_7_126.png" /> <br />'
        });
var format_RiceBIS_8 = new ol.format.GeoJSON();
var features_RiceBIS_8 = format_RiceBIS_8.readFeatures(json_RiceBIS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RiceBIS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceBIS_8.addFeatures(features_RiceBIS_8);
var lyr_RiceBIS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiceBIS_8, 
                style: style_RiceBIS_8,
                popuplayertitle: "RiceBIS",
                interactive: true,
    title: 'RiceBIS<br />\
    <img src="styles/legend/RiceBIS_8_0.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_1.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_2.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_3.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_4.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_5.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_6.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_7.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_8.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_9.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_10.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_11.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_12.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_13.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_14.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_15.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_16.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_17.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_18.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_19.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_20.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_21.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_22.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_23.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_24.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_25.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_26.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_27.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_28.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_29.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_30.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_31.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_32.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_33.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_34.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_35.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_36.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_37.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_38.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_39.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_40.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_41.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_42.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_43.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_44.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_45.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_46.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_47.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_48.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_49.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_50.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_51.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_52.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_53.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_54.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_55.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_56.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_57.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_58.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_59.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_60.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_61.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_62.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_63.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_64.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_65.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_66.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_67.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_68.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_69.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_70.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_71.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_72.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_73.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_74.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_75.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_76.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_77.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_78.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_79.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_80.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_81.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_82.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_83.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_84.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_85.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_86.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_87.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_88.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_89.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_90.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_91.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_92.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_93.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_94.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_95.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_96.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_97.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_98.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_99.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_100.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_101.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_102.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_103.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_104.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_105.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_106.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_107.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_108.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_109.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_110.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_111.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_112.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_113.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_114.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_115.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_116.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_117.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_118.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_119.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_120.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_121.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_122.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_123.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_124.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_125.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_126.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_127.png" /> <br />\
    <img src="styles/legend/RiceBIS_8_128.png" /> <br />'
        });

lyr_OVERALLTRAINING_0.setVisible(true);lyr_2023_1.setVisible(true);lyr_2022_2.setVisible(true);lyr_2021_3.setVisible(true);lyr_2020_4.setVisible(true);lyr_2019_5.setVisible(true);lyr_BDI_6.setVisible(true);lyr_RCEF_7.setVisible(true);lyr_RiceBIS_8.setVisible(true);
var layersList = [lyr_OVERALLTRAINING_0,lyr_2023_1,lyr_2022_2,lyr_2021_3,lyr_2020_4,lyr_2019_5,lyr_BDI_6,lyr_RCEF_7,lyr_RiceBIS_8];
lyr_OVERALLTRAINING_0.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'RSTC_M': 'RSTC_M', 'RSTC_F': 'RSTC_F', 'CEC_M': 'CEC_M', 'CEC_F': 'CEC_F', 'OPCS_M': 'OPCS_M', 'OPCS_F': 'OPCS_F', 'TOMush_M': 'TOMush_M', 'TOMush_F': 'TOMush_F', 'VPT_M': 'VPT_M', 'VPT_F': 'VPT_F', 'TOT_HQS_M': 'TOT_HQS_M', 'TOT_HQS_F': 'TOT_HQS_F', 'TOT_PNM_M': 'TOT_PNM_M', 'TOT_PNM_F': 'TOT_PNM_F', 'SC_PNM_M': 'SC_PNM_M', 'SC_PNM_F': 'SC_PNM_F', 'FFSchool_M': 'FFSchool_M', 'FFSchool_F': 'FFSchool_F', 'FBSchool_M': 'FBSchool_M', 'FBSchool_F': 'FBSchool_F', 'VPT_M_1': 'VPT_M_1', 'VPT_F_1': 'VPT_F_1', 'FoodPT_M': 'FoodPT_M', 'FoodPT_F': 'FoodPT_F', 'TESDA_M': 'TESDA_M', 'TESDA_F': 'TESDA_F', });
lyr_2023_1.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'TOMush_M': 'TOMush_M', 'TOMush_F': 'TOMush_F', 'VPT_M': 'VPT_M', 'VPT_F': 'VPT_F', 'TOT_HQS_M': 'TOT_HQS_M', 'TOT_HQS_F': 'TOT_HQS_F', 'TOT_PNM_M': 'TOT_PNM_M', 'TOT_PNM_F': 'TOT_PNM_F', 'SC_PNM_M': 'SC_PNM_M', 'SC_PNM_F': 'SC_PNM_F', });
lyr_2022_2.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'TOT_HQS_M': 'TOT_HQS_M', 'TOT_HQS_F': 'TOT_HQS_F', 'TOT_PNM_M': 'TOT_PNM_M', 'TOT_PNM_F': 'TOT_PNM_F', 'SC_PNM_M': 'SC_PNM_M', 'SC_PNM_F': 'SC_PNM_F', 'FFS_M': 'FFS_M', 'FFS_F': 'FFS_F', 'FBS_M': 'FBS_M', 'FBS_F': 'FBS_F', 'FoodPT_M': 'FoodPT_M', 'FoodPT_F': 'FoodPT_F', 'CEC_M': 'CEC_M', 'CEC_F': 'CEC_F', });
lyr_2021_3.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'OPCS_M': 'OPCS_M', 'OPCS_F': 'OPCS_F', 'RSTC_M': 'RSTC_M', 'RSTC_F': 'RSTC_F', 'SC_PNM_M': 'SC_PNM_M', 'SC_PNM_F': 'SC_PNM_F', 'FFS_M': 'FFS_M', 'FFS_F': 'FFS_F', 'FBS_M': 'FBS_M', 'FBS_F': 'FBS_F', 'TESDA_M': 'TESDA_M', 'TESDA_F': 'TESDA_F', 'VPT_M': 'VPT_M', 'VPT_F': 'VPT_F', });
lyr_2020_4.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'TOT_HQS_M': 'TOT_HQS_M', 'TOT_HQS_F': 'TOT_HQS_F', 'FFS_M': 'FFS_M', 'FFS_F': 'FFS_F', 'OPCS_M': 'OPCS_M', 'OPCS_F': 'OPCS_F', 'RSTC_M': 'RSTC_M', 'RSTC_F': 'RSTC_F', });
lyr_2019_5.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'RSTC_M': 'RSTC_M', 'RSTC_F': 'RSTC_F', 'CEC_M': 'CEC_M', 'CEC_F': 'CEC_F', });
lyr_BDI_6.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'RSTC_M': 'RSTC_M', 'RSTC_F': 'RSTC_F', 'CEC_M': 'CEC_M', 'CEC_F': 'CEC_F', 'OPCS_M': 'OPCS_M', 'OPCS_F': 'OPCS_F', 'TOMush_M': 'TOMush_M', 'TOMush_F': 'TOMush_F', 'VPT_M': 'VPT_M', 'VPT_F': 'VPT_F', });
lyr_RCEF_7.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'TOT_HQS_M': 'TOT_HQS_M', 'TOT_HQS_F': 'TOT_HQS_F', 'TOT_PNM_M': 'TOT_PNM_M', 'TOT_PNM_F': 'TOT_PNM_F', 'SC_PNM_M': 'SC_PNM_M', 'SC_PNM_F': 'SC_PNM_F', });
lyr_RiceBIS_8.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'FFSchool_M': 'FFSchool_M', 'FFSchool_F': 'FFSchool_F', 'FBSchool_M': 'FBSchool_M', 'FBSchool_F': 'FBSchool_F', 'TESDA_M': 'TESDA_M', 'TESDA_F': 'TESDA_F', 'VPT_M': 'VPT_M', 'VPT_F': 'VPT_F', 'FoodPT_M': 'FoodPT_M', 'FoodPT_F': 'FoodPT_F', });
lyr_OVERALLTRAINING_0.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'RSTC_M': 'Range', 'RSTC_F': 'Range', 'CEC_M': 'Range', 'CEC_F': 'Range', 'OPCS_M': 'Range', 'OPCS_F': 'Range', 'TOMush_M': 'Range', 'TOMush_F': 'Range', 'VPT_M': 'Range', 'VPT_F': 'Range', 'TOT_HQS_M': 'Range', 'TOT_HQS_F': 'Range', 'TOT_PNM_M': 'Range', 'TOT_PNM_F': 'Range', 'SC_PNM_M': 'Range', 'SC_PNM_F': 'Range', 'FFSchool_M': 'Range', 'FFSchool_F': 'Range', 'FBSchool_M': 'Range', 'FBSchool_F': 'Range', 'VPT_M_1': 'Range', 'VPT_F_1': 'Range', 'FoodPT_M': 'Range', 'FoodPT_F': 'Range', 'TESDA_M': 'Range', 'TESDA_F': 'Range', });
lyr_2023_1.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'TOMush_M': 'Range', 'TOMush_F': 'Range', 'VPT_M': 'Range', 'VPT_F': 'Range', 'TOT_HQS_M': 'Range', 'TOT_HQS_F': 'Range', 'TOT_PNM_M': 'Range', 'TOT_PNM_F': 'Range', 'SC_PNM_M': 'Range', 'SC_PNM_F': 'Range', });
lyr_2022_2.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'TOT_HQS_M': 'Range', 'TOT_HQS_F': 'Range', 'TOT_PNM_M': 'Range', 'TOT_PNM_F': 'Range', 'SC_PNM_M': 'Range', 'SC_PNM_F': 'Range', 'FFS_M': 'Range', 'FFS_F': 'Range', 'FBS_M': 'Range', 'FBS_F': 'Range', 'FoodPT_M': 'Range', 'FoodPT_F': 'Range', 'CEC_M': 'Range', 'CEC_F': 'Range', });
lyr_2021_3.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'OPCS_M': 'Range', 'OPCS_F': 'Range', 'RSTC_M': 'Range', 'RSTC_F': 'Range', 'SC_PNM_M': 'Range', 'SC_PNM_F': 'Range', 'FFS_M': 'Range', 'FFS_F': 'Range', 'FBS_M': 'Range', 'FBS_F': 'Range', 'TESDA_M': 'Range', 'TESDA_F': 'Range', 'VPT_M': 'Range', 'VPT_F': 'Range', });
lyr_2020_4.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'TOT_HQS_M': 'Range', 'TOT_HQS_F': 'Range', 'FFS_M': 'Range', 'FFS_F': 'Range', 'OPCS_M': 'Range', 'OPCS_F': 'Range', 'RSTC_M': 'Range', 'RSTC_F': 'Range', });
lyr_2019_5.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'RSTC_M': 'Range', 'RSTC_F': 'Range', 'CEC_M': 'Range', 'CEC_F': 'Range', });
lyr_BDI_6.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'RSTC_M': 'Range', 'RSTC_F': 'Range', 'CEC_M': 'Range', 'CEC_F': 'Range', 'OPCS_M': 'Range', 'OPCS_F': 'Range', 'TOMush_M': 'Range', 'TOMush_F': 'Range', 'VPT_M': 'Range', 'VPT_F': 'Range', });
lyr_RCEF_7.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'TOT_HQS_M': 'Range', 'TOT_HQS_F': 'Range', 'TOT_PNM_M': 'Range', 'TOT_PNM_F': 'Range', 'SC_PNM_M': 'Range', 'SC_PNM_F': 'Range', });
lyr_RiceBIS_8.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'FFSchool_M': 'Range', 'FFSchool_F': 'Range', 'FBSchool_M': 'Range', 'FBSchool_F': 'Range', 'TESDA_M': 'Range', 'TESDA_F': 'Range', 'VPT_M': 'Range', 'VPT_F': 'Range', 'FoodPT_M': 'Range', 'FoodPT_F': 'Range', });
lyr_OVERALLTRAINING_0.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'inline label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'RSTC_M': 'inline label - visible with data', 'RSTC_F': 'inline label - visible with data', 'CEC_M': 'inline label - visible with data', 'CEC_F': 'inline label - visible with data', 'OPCS_M': 'inline label - visible with data', 'OPCS_F': 'inline label - visible with data', 'TOMush_M': 'inline label - visible with data', 'TOMush_F': 'inline label - visible with data', 'VPT_M': 'inline label - visible with data', 'VPT_F': 'inline label - visible with data', 'TOT_HQS_M': 'inline label - visible with data', 'TOT_HQS_F': 'inline label - visible with data', 'TOT_PNM_M': 'inline label - visible with data', 'TOT_PNM_F': 'inline label - visible with data', 'SC_PNM_M': 'inline label - visible with data', 'SC_PNM_F': 'inline label - visible with data', 'FFSchool_M': 'inline label - visible with data', 'FFSchool_F': 'inline label - visible with data', 'FBSchool_M': 'inline label - visible with data', 'FBSchool_F': 'inline label - visible with data', 'VPT_M_1': 'inline label - visible with data', 'VPT_F_1': 'inline label - visible with data', 'FoodPT_M': 'inline label - visible with data', 'FoodPT_F': 'inline label - visible with data', 'TESDA_M': 'inline label - visible with data', 'TESDA_F': 'inline label - visible with data', });
lyr_2023_1.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'TOMush_M': 'no label', 'TOMush_F': 'no label', 'VPT_M': 'no label', 'VPT_F': 'no label', 'TOT_HQS_M': 'no label', 'TOT_HQS_F': 'no label', 'TOT_PNM_M': 'no label', 'TOT_PNM_F': 'no label', 'SC_PNM_M': 'no label', 'SC_PNM_F': 'no label', });
lyr_2022_2.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'TOT_HQS_M': 'inline label - visible with data', 'TOT_HQS_F': 'inline label - visible with data', 'TOT_PNM_M': 'inline label - visible with data', 'TOT_PNM_F': 'inline label - visible with data', 'SC_PNM_M': 'inline label - visible with data', 'SC_PNM_F': 'inline label - visible with data', 'FFS_M': 'inline label - visible with data', 'FFS_F': 'inline label - visible with data', 'FBS_M': 'inline label - visible with data', 'FBS_F': 'inline label - visible with data', 'FoodPT_M': 'inline label - visible with data', 'FoodPT_F': 'inline label - visible with data', 'CEC_M': 'inline label - visible with data', 'CEC_F': 'inline label - visible with data', });
lyr_2021_3.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'OPCS_M': 'inline label - visible with data', 'OPCS_F': 'inline label - visible with data', 'RSTC_M': 'inline label - visible with data', 'RSTC_F': 'inline label - visible with data', 'SC_PNM_M': 'inline label - visible with data', 'SC_PNM_F': 'inline label - visible with data', 'FFS_M': 'inline label - visible with data', 'FFS_F': 'inline label - visible with data', 'FBS_M': 'inline label - visible with data', 'FBS_F': 'inline label - visible with data', 'TESDA_M': 'inline label - visible with data', 'TESDA_F': 'inline label - visible with data', 'VPT_M': 'inline label - visible with data', 'VPT_F': 'inline label - visible with data', });
lyr_2020_4.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'TOT_HQS_M': 'inline label - visible with data', 'TOT_HQS_F': 'inline label - visible with data', 'FFS_M': 'inline label - visible with data', 'FFS_F': 'inline label - visible with data', 'OPCS_M': 'inline label - visible with data', 'OPCS_F': 'inline label - visible with data', 'RSTC_M': 'inline label - visible with data', 'RSTC_F': 'inline label - visible with data', });
lyr_2019_5.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'RSTC_M': 'inline label - visible with data', 'RSTC_F': 'inline label - visible with data', 'CEC_M': 'inline label - visible with data', 'CEC_F': 'inline label - visible with data', });
lyr_BDI_6.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'RSTC_M': 'inline label - visible with data', 'RSTC_F': 'inline label - visible with data', 'CEC_M': 'inline label - visible with data', 'CEC_F': 'inline label - visible with data', 'OPCS_M': 'inline label - visible with data', 'OPCS_F': 'inline label - visible with data', 'TOMush_M': 'inline label - visible with data', 'TOMush_F': 'inline label - visible with data', 'VPT_M': 'inline label - visible with data', 'VPT_F': 'inline label - visible with data', });
lyr_RCEF_7.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'TOT_HQS_M': 'inline label - visible with data', 'TOT_HQS_F': 'inline label - visible with data', 'TOT_PNM_M': 'inline label - visible with data', 'TOT_PNM_F': 'inline label - visible with data', 'SC_PNM_M': 'inline label - visible with data', 'SC_PNM_F': 'inline label - visible with data', });
lyr_RiceBIS_8.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'FFSchool_M': 'inline label - visible with data', 'FFSchool_F': 'inline label - visible with data', 'FBSchool_M': 'inline label - visible with data', 'FBSchool_F': 'inline label - visible with data', 'TESDA_M': 'inline label - visible with data', 'TESDA_F': 'inline label - visible with data', 'VPT_M': 'inline label - visible with data', 'VPT_F': 'inline label - visible with data', 'FoodPT_M': 'inline label - visible with data', 'FoodPT_F': 'inline label - visible with data', });
lyr_RiceBIS_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});