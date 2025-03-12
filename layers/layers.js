ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1374199.151553, 7472925.909318, 1403703.500374, 7495845.155003]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_1 = new ol.format.GeoJSON();
var features_kommuneplan_1 = format_kommuneplan_1.readFeatures(json_kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_1.addFeatures(features_kommuneplan_1);
var lyr_kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_1, 
                style: style_kommuneplan_1,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_1.png" /> kommuneplan'
            });
var format_lokalplaner_2 = new ol.format.GeoJSON();
var features_lokalplaner_2 = format_lokalplaner_2.readFeatures(json_lokalplaner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplaner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplaner_2.addFeatures(features_lokalplaner_2);
var lyr_lokalplaner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplaner_2, 
                style: style_lokalplaner_2,
                popuplayertitle: 'lokalplaner',
                interactive: true,
    title: 'lokalplaner<br />\
    <img src="styles/legend/lokalplaner_2_0.png" /> 1024399<br />\
    <img src="styles/legend/lokalplaner_2_1.png" /> 1053515<br />\
    <img src="styles/legend/lokalplaner_2_2.png" /> 1061002<br />\
    <img src="styles/legend/lokalplaner_2_3.png" /> 1061022<br />\
    <img src="styles/legend/lokalplaner_2_4.png" /> 1061038<br />\
    <img src="styles/legend/lokalplaner_2_5.png" /> 1061103<br />\
    <img src="styles/legend/lokalplaner_2_6.png" /> 1061140<br />\
    <img src="styles/legend/lokalplaner_2_7.png" /> 1061206<br />\
    <img src="styles/legend/lokalplaner_2_8.png" /> 1061209<br />\
    <img src="styles/legend/lokalplaner_2_9.png" /> 1061210<br />\
    <img src="styles/legend/lokalplaner_2_10.png" /> 1061715<br />\
    <img src="styles/legend/lokalplaner_2_11.png" /> 1061734<br />\
    <img src="styles/legend/lokalplaner_2_12.png" /> 1061739<br />\
    <img src="styles/legend/lokalplaner_2_13.png" /> 1061746<br />\
    <img src="styles/legend/lokalplaner_2_14.png" /> 1061756<br />\
    <img src="styles/legend/lokalplaner_2_15.png" /> 1061757<br />\
    <img src="styles/legend/lokalplaner_2_16.png" /> 1061824<br />\
    <img src="styles/legend/lokalplaner_2_17.png" /> 1061829<br />\
    <img src="styles/legend/lokalplaner_2_18.png" /> 1062026<br />\
    <img src="styles/legend/lokalplaner_2_19.png" /> 1062121<br />\
    <img src="styles/legend/lokalplaner_2_20.png" /> 1070479<br />\
    <img src="styles/legend/lokalplaner_2_21.png" /> 1071381<br />\
    <img src="styles/legend/lokalplaner_2_22.png" /> 1074662<br />\
    <img src="styles/legend/lokalplaner_2_23.png" /> 1074664<br />\
    <img src="styles/legend/lokalplaner_2_24.png" /> 1074675<br />\
    <img src="styles/legend/lokalplaner_2_25.png" /> 1075214<br />\
    <img src="styles/legend/lokalplaner_2_26.png" /> 1075219<br />\
    <img src="styles/legend/lokalplaner_2_27.png" /> 1075387<br />\
    <img src="styles/legend/lokalplaner_2_28.png" /> 1075393<br />\
    <img src="styles/legend/lokalplaner_2_29.png" /> 1075552<br />\
    <img src="styles/legend/lokalplaner_2_30.png" /> 1075553<br />\
    <img src="styles/legend/lokalplaner_2_31.png" /> 1075577<br />\
    <img src="styles/legend/lokalplaner_2_32.png" /> 1075593<br />\
    <img src="styles/legend/lokalplaner_2_33.png" /> 1075598<br />\
    <img src="styles/legend/lokalplaner_2_34.png" /> 1075609<br />\
    <img src="styles/legend/lokalplaner_2_35.png" /> 1075669<br />\
    <img src="styles/legend/lokalplaner_2_36.png" /> 1075682<br />\
    <img src="styles/legend/lokalplaner_2_37.png" /> 1075695<br />\
    <img src="styles/legend/lokalplaner_2_38.png" /> 1075708<br />\
    <img src="styles/legend/lokalplaner_2_39.png" /> 1075710<br />\
    <img src="styles/legend/lokalplaner_2_40.png" /> 1075718<br />\
    <img src="styles/legend/lokalplaner_2_41.png" /> 1075751<br />\
    <img src="styles/legend/lokalplaner_2_42.png" /> 1075752<br />\
    <img src="styles/legend/lokalplaner_2_43.png" /> 1075779<br />\
    <img src="styles/legend/lokalplaner_2_44.png" /> 1075795<br />\
    <img src="styles/legend/lokalplaner_2_45.png" /> 1075800<br />\
    <img src="styles/legend/lokalplaner_2_46.png" /> 1075801<br />\
    <img src="styles/legend/lokalplaner_2_47.png" /> 1075815<br />\
    <img src="styles/legend/lokalplaner_2_48.png" /> 1075877<br />\
    <img src="styles/legend/lokalplaner_2_49.png" /> 1075893<br />\
    <img src="styles/legend/lokalplaner_2_50.png" /> 1075897<br />\
    <img src="styles/legend/lokalplaner_2_51.png" /> 1075900<br />\
    <img src="styles/legend/lokalplaner_2_52.png" /> 1075902<br />\
    <img src="styles/legend/lokalplaner_2_53.png" /> 1075905<br />\
    <img src="styles/legend/lokalplaner_2_54.png" /> 1075907<br />\
    <img src="styles/legend/lokalplaner_2_55.png" /> 1075908<br />\
    <img src="styles/legend/lokalplaner_2_56.png" /> 1076004<br />\
    <img src="styles/legend/lokalplaner_2_57.png" /> 1076010<br />\
    <img src="styles/legend/lokalplaner_2_58.png" /> 1076019<br />\
    <img src="styles/legend/lokalplaner_2_59.png" /> 1076041<br />\
    <img src="styles/legend/lokalplaner_2_60.png" /> 1076064<br />\
    <img src="styles/legend/lokalplaner_2_61.png" /> 1076086<br />\
    <img src="styles/legend/lokalplaner_2_62.png" /> 1076094<br />\
    <img src="styles/legend/lokalplaner_2_63.png" /> 1076107<br />\
    <img src="styles/legend/lokalplaner_2_64.png" /> 1076114<br />\
    <img src="styles/legend/lokalplaner_2_65.png" /> 1076115<br />\
    <img src="styles/legend/lokalplaner_2_66.png" /> 1076126<br />\
    <img src="styles/legend/lokalplaner_2_67.png" /> 1076129<br />\
    <img src="styles/legend/lokalplaner_2_68.png" /> 1076287<br />\
    <img src="styles/legend/lokalplaner_2_69.png" /> 1076379<br />\
    <img src="styles/legend/lokalplaner_2_70.png" /> 1076865<br />\
    <img src="styles/legend/lokalplaner_2_71.png" /> 1076868<br />\
    <img src="styles/legend/lokalplaner_2_72.png" /> 1076874<br />\
    <img src="styles/legend/lokalplaner_2_73.png" /> 1076892<br />\
    <img src="styles/legend/lokalplaner_2_74.png" /> 1076902<br />\
    <img src="styles/legend/lokalplaner_2_75.png" /> 1076939<br />\
    <img src="styles/legend/lokalplaner_2_76.png" /> 1076961<br />\
    <img src="styles/legend/lokalplaner_2_77.png" /> 1076968<br />\
    <img src="styles/legend/lokalplaner_2_78.png" /> 1077070<br />\
    <img src="styles/legend/lokalplaner_2_79.png" /> 1077082<br />\
    <img src="styles/legend/lokalplaner_2_80.png" /> 1077085<br />\
    <img src="styles/legend/lokalplaner_2_81.png" /> 1077086<br />\
    <img src="styles/legend/lokalplaner_2_82.png" /> 1077558<br />\
    <img src="styles/legend/lokalplaner_2_83.png" /> 1077565<br />\
    <img src="styles/legend/lokalplaner_2_84.png" /> 1078074<br />\
    <img src="styles/legend/lokalplaner_2_85.png" /> 1078075<br />\
    <img src="styles/legend/lokalplaner_2_86.png" /> 1078077<br />\
    <img src="styles/legend/lokalplaner_2_87.png" /> 1078184<br />\
    <img src="styles/legend/lokalplaner_2_88.png" /> 1078227<br />\
    <img src="styles/legend/lokalplaner_2_89.png" /> 1078229<br />\
    <img src="styles/legend/lokalplaner_2_90.png" /> 1078231<br />\
    <img src="styles/legend/lokalplaner_2_91.png" /> 1078248<br />\
    <img src="styles/legend/lokalplaner_2_92.png" /> 1078275<br />\
    <img src="styles/legend/lokalplaner_2_93.png" /> 1078279<br />\
    <img src="styles/legend/lokalplaner_2_94.png" /> 1078289<br />\
    <img src="styles/legend/lokalplaner_2_95.png" /> 1078346<br />\
    <img src="styles/legend/lokalplaner_2_96.png" /> 1078464<br />\
    <img src="styles/legend/lokalplaner_2_97.png" /> 1078465<br />\
    <img src="styles/legend/lokalplaner_2_98.png" /> 1078468<br />\
    <img src="styles/legend/lokalplaner_2_99.png" /> 1079122<br />\
    <img src="styles/legend/lokalplaner_2_100.png" /> 1079123<br />\
    <img src="styles/legend/lokalplaner_2_101.png" /> 1079666<br />\
    <img src="styles/legend/lokalplaner_2_102.png" /> 1079671<br />\
    <img src="styles/legend/lokalplaner_2_103.png" /> 1081381<br />\
    <img src="styles/legend/lokalplaner_2_104.png" /> 1084485<br />\
    <img src="styles/legend/lokalplaner_2_105.png" /> 1084491<br />\
    <img src="styles/legend/lokalplaner_2_106.png" /> 1084492<br />\
    <img src="styles/legend/lokalplaner_2_107.png" /> 1103890<br />\
    <img src="styles/legend/lokalplaner_2_108.png" /> 1109560<br />\
    <img src="styles/legend/lokalplaner_2_109.png" /> 1328884<br />\
    <img src="styles/legend/lokalplaner_2_110.png" /> 1359145<br />\
    <img src="styles/legend/lokalplaner_2_111.png" /> 1369547<br />\
    <img src="styles/legend/lokalplaner_2_112.png" /> 1374739<br />\
    <img src="styles/legend/lokalplaner_2_113.png" /> 1792902<br />\
    <img src="styles/legend/lokalplaner_2_114.png" /> 1869505<br />\
    <img src="styles/legend/lokalplaner_2_115.png" /> 2136388<br />\
    <img src="styles/legend/lokalplaner_2_116.png" /> 2186492<br />\
    <img src="styles/legend/lokalplaner_2_117.png" /> 2269185<br />\
    <img src="styles/legend/lokalplaner_2_118.png" /> 2641209<br />\
    <img src="styles/legend/lokalplaner_2_119.png" /> 2702963<br />\
    <img src="styles/legend/lokalplaner_2_120.png" /> 2702964<br />\
    <img src="styles/legend/lokalplaner_2_121.png" /> 2702965<br />\
    <img src="styles/legend/lokalplaner_2_122.png" /> 2702968<br />\
    <img src="styles/legend/lokalplaner_2_123.png" /> 2702969<br />\
    <img src="styles/legend/lokalplaner_2_124.png" /> 2702993<br />\
    <img src="styles/legend/lokalplaner_2_125.png" /> 2978253<br />\
    <img src="styles/legend/lokalplaner_2_126.png" /> 3016098<br />\
    <img src="styles/legend/lokalplaner_2_127.png" /> 3016099<br />\
    <img src="styles/legend/lokalplaner_2_128.png" /> 3016105<br />\
    <img src="styles/legend/lokalplaner_2_129.png" /> 3186913<br />\
    <img src="styles/legend/lokalplaner_2_130.png" /> 3188617<br />\
    <img src="styles/legend/lokalplaner_2_131.png" /> 3188619<br />\
    <img src="styles/legend/lokalplaner_2_132.png" /> 3812280<br />\
    <img src="styles/legend/lokalplaner_2_133.png" /> 3964626<br />\
    <img src="styles/legend/lokalplaner_2_134.png" /> 3964627<br />\
    <img src="styles/legend/lokalplaner_2_135.png" /> 3964812<br />\
    <img src="styles/legend/lokalplaner_2_136.png" /> 9419556<br />\
    <img src="styles/legend/lokalplaner_2_137.png" /> 9431987<br />\
    <img src="styles/legend/lokalplaner_2_138.png" /> 9431989<br />\
    <img src="styles/legend/lokalplaner_2_139.png" /> 9431990<br />\
    <img src="styles/legend/lokalplaner_2_140.png" /> 9431991<br />\
    <img src="styles/legend/lokalplaner_2_141.png" /> 9431992<br />\
    <img src="styles/legend/lokalplaner_2_142.png" /> 9431993<br />\
    <img src="styles/legend/lokalplaner_2_143.png" /> 9431994<br />\
    <img src="styles/legend/lokalplaner_2_144.png" /> 9690454<br />\
    <img src="styles/legend/lokalplaner_2_145.png" /> 9717080<br />\
    <img src="styles/legend/lokalplaner_2_146.png" /> 9731022<br />\
    <img src="styles/legend/lokalplaner_2_147.png" /> 9732835<br />\
    <img src="styles/legend/lokalplaner_2_148.png" /> 9732862<br />\
    <img src="styles/legend/lokalplaner_2_149.png" /> 9753254<br />\
    <img src="styles/legend/lokalplaner_2_150.png" /> 10353005<br />\
    <img src="styles/legend/lokalplaner_2_151.png" /> 10456675<br />\
    <img src="styles/legend/lokalplaner_2_152.png" /> 10478656<br />\
    <img src="styles/legend/lokalplaner_2_153.png" /> 10840028<br />\
    <img src="styles/legend/lokalplaner_2_154.png" /> 10900534<br />\
    <img src="styles/legend/lokalplaner_2_155.png" /> 10906517<br />\
    <img src="styles/legend/lokalplaner_2_156.png" /> 10985743<br />\
    <img src="styles/legend/lokalplaner_2_157.png" /> 11021467<br />\
    <img src="styles/legend/lokalplaner_2_158.png" /> 11126774<br />\
    <img src="styles/legend/lokalplaner_2_159.png" /> 11159816<br />\
    <img src="styles/legend/lokalplaner_2_160.png" /> 11176926<br />\
    <img src="styles/legend/lokalplaner_2_161.png" /> 11185105<br />\
    <img src="styles/legend/lokalplaner_2_162.png" /> 11198619<br />\
    <img src="styles/legend/lokalplaner_2_163.png" /> 11228193<br />\
    <img src="styles/legend/lokalplaner_2_164.png" /> 11240317<br />\
    <img src="styles/legend/lokalplaner_2_165.png" /> 11252419<br />\
    <img src="styles/legend/lokalplaner_2_166.png" /> 11307736<br />\
    <img src="styles/legend/lokalplaner_2_167.png" /> 11307768<br />\
    <img src="styles/legend/lokalplaner_2_168.png" /> 11317442<br />\
    <img src="styles/legend/lokalplaner_2_169.png" /> 11347122<br />\
    <img src="styles/legend/lokalplaner_2_170.png" /> <br />' });
var format_fredede_omrder_3 = new ol.format.GeoJSON();
var features_fredede_omrder_3 = format_fredede_omrder_3.readFeatures(json_fredede_omrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fredede_omrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fredede_omrder_3.addFeatures(features_fredede_omrder_3);
var lyr_fredede_omrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fredede_omrder_3, 
                style: style_fredede_omrder_3,
                popuplayertitle: 'fredede_områder',
                interactive: false,
    title: 'fredede_områder<br />\
    <img src="styles/legend/fredede_omrder_3_0.png" /> <br />\
    <img src="styles/legend/fredede_omrder_3_1.png" /> Damhuså<br />\
    <img src="styles/legend/fredede_omrder_3_2.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/fredede_omrder_3_3.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/fredede_omrder_3_4.png" /> Vestvolden<br />\
    <img src="styles/legend/fredede_omrder_3_5.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />' });
var format_strandbeskyttelse_4 = new ol.format.GeoJSON();
var features_strandbeskyttelse_4 = format_strandbeskyttelse_4.readFeatures(json_strandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelse_4.addFeatures(features_strandbeskyttelse_4);
var lyr_strandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelse_4, 
                style: style_strandbeskyttelse_4,
                popuplayertitle: 'strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/strandbeskyttelse_4.png" /> strandbeskyttelse'
            });
var format_togstationer_5 = new ol.format.GeoJSON();
var features_togstationer_5 = format_togstationer_5.readFeatures(json_togstationer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_5.addFeatures(features_togstationer_5);
var lyr_togstationer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_5, 
                style: style_togstationer_5,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_5.png" /> togstationer'
            });
var format_folkeskoler_6 = new ol.format.GeoJSON();
var features_folkeskoler_6 = format_folkeskoler_6.readFeatures(json_folkeskoler_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_6.addFeatures(features_folkeskoler_6);
var lyr_folkeskoler_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_6, 
                style: style_folkeskoler_6,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_6.png" /> folkeskoler'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_kommuneplan_1.setVisible(true);lyr_lokalplaner_2.setVisible(true);lyr_fredede_omrder_3.setVisible(true);lyr_strandbeskyttelse_4.setVisible(true);lyr_togstationer_5.setVisible(true);lyr_folkeskoler_6.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_kommuneplan_1,lyr_lokalplaner_2,lyr_fredede_omrder_3,lyr_strandbeskyttelse_4,lyr_togstationer_5,lyr_folkeskoler_6];
lyr_kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_lokalplaner_2.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_fredede_omrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_strandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_togstationer_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_folkeskoler_6.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_lokalplaner_2.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_fredede_omrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_strandbeskyttelse_4.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_togstationer_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_folkeskoler_6.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_kommuneplan_1.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'hidden field', 'planid': 'inline label - visible with data', 'objektkode': 'hidden field', 'komnr': 'hidden field', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - visible with data', 'datoforsl': 'hidden field', 'datovedt': 'inline label - visible with data', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'no label', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'no label', 'glkomnavn_besk': 'hidden field', });
lyr_lokalplaner_2.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_fredede_omrder_3.set('fieldLabels', {'fid': 'hidden field', 'Temakode': 'hidden field', 'Temanavn': 'hidden field', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_strandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_togstationer_5.set('fieldLabels', {'Name': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_folkeskoler_6.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_folkeskoler_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});