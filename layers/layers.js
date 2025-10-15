ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32614").setExtent([347910.098139, 2989057.654264, 353612.597686, 2991624.217040]);
var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UBICACIONESDEESTABLECIMIENTOS_1 = new ol.format.GeoJSON();
var features_UBICACIONESDEESTABLECIMIENTOS_1 = format_UBICACIONESDEESTABLECIMIENTOS_1.readFeatures(json_UBICACIONESDEESTABLECIMIENTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_UBICACIONESDEESTABLECIMIENTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBICACIONESDEESTABLECIMIENTOS_1.addFeatures(features_UBICACIONESDEESTABLECIMIENTOS_1);
var lyr_UBICACIONESDEESTABLECIMIENTOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBICACIONESDEESTABLECIMIENTOS_1, 
                style: style_UBICACIONESDEESTABLECIMIENTOS_1,
                popuplayertitle: 'UBICACIONES DE ESTABLECIMIENTOS',
                interactive: true,
    title: 'UBICACIONES DE ESTABLECIMIENTOS<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_0.png" /> Actividades administrativas de instituciones de bienestar social<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_1.png" /> Administraci�n p�blica en general<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_2.png" /> Asociaciones y organizaciones religiosas<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_3.png" /> Bibliotecas y archivos del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_4.png" /> Cafeter�as, fuentes de sodas, never�as, refresquer�as y similares<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_5.png" /> Cl�nicas de consultorios m�dicos del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_6.png" /> Comercio al por menor de art�culos de papeler�a<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_7.png" /> Comercio al por menor de gasolina y diesel<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_8.png" /> Comercio al por menor en minisupers<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_9.png" /> Comercio al por menor en tiendas de abarrotes, ultramarinos y miscel�neas<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_10.png" /> Consultorios de medicina general del sector privado<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_11.png" /> Consultorios de medicina general del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_12.png" /> Consultorios del sector p�blico de audiolog�a y de terapia ocupacional, f�sica y del lenguaje<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_13.png" /> Elaboraci�n de tortillas de harina de trigo de forma tradicional<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_14.png" /> Elaboraci�n de tortillas de ma�z y molienda de nixtamal<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_15.png" /> Escuelas comerciales y secretariales del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_16.png" /> Escuelas de educaci�n media superior del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_17.png" /> Escuelas de educaci�n preescolar del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_18.png" /> Escuelas de educaci�n primaria del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_19.png" /> Escuelas de educaci�n secundaria general del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_20.png" /> Escuelas del sector p�blico que combinan diversos niveles de educaci�n<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_21.png" /> Farmacias con minis�per<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_22.png" /> Farmacias sin minis�per<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_23.png" /> Museos del sector p�blico<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_24.png" /> Panificaci�n tradicional<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_25.png" /> Promotores del sector p�blico de espect�culos art�sticos, culturales, deportivos y similares que cuentan con instalaciones para presentarlos<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_26.png" /> Restaurantes con servicio de preparaci�n de alimentos a la carta o de comida corrida<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_27.png" /> Restaurantes con servicio de preparaci�n de pizzas, hamburguesas, hot dogs y pollos rostizados para llevar<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_28.png" /> Restaurantes con servicio de preparaci�n de tacos y tortas<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_29.png" /> Restaurantes de autoservicio<br />\
    <img src="styles/legend/UBICACIONESDEESTABLECIMIENTOS_1_30.png" /> Salones y cl�nicas de belleza y peluquer�as<br />' });

lyr_ESRIStandard_0.setVisible(true);lyr_UBICACIONESDEESTABLECIMIENTOS_1.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_UBICACIONESDEESTABLECIMIENTOS_1];
lyr_UBICACIONESDEESTABLECIMIENTOS_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'clee': 'clee', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_UBICACIONESDEESTABLECIMIENTOS_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'raz_social': 'TextEdit', 'codigo_act': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'nom_vial': 'TextEdit', 'tipo_v_e_1': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'tipo_v_e_2': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'tipo_v_e_3': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'TextEdit', 'letra_ext': 'TextEdit', 'edificio': 'TextEdit', 'edificio_e': 'TextEdit', 'numero_int': 'TextEdit', 'letra_int': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'tipoCenCom': 'TextEdit', 'nom_CenCom': 'TextEdit', 'num_local': 'TextEdit', 'cod_postal': 'TextEdit', 'cve_ent': 'TextEdit', 'entidad': 'TextEdit', 'cve_mun': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'telefono': 'TextEdit', 'correoelec': 'TextEdit', 'www': 'TextEdit', 'tipoUniEco': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_UBICACIONESDEESTABLECIMIENTOS_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - always visible', 'raz_social': 'hidden field', 'codigo_act': 'hidden field', 'nombre_act': 'inline label - visible with data', 'per_ocu': 'hidden field', 'tipo_vial': 'hidden field', 'nom_vial': 'hidden field', 'tipo_v_e_1': 'hidden field', 'nom_v_e_1': 'hidden field', 'tipo_v_e_2': 'hidden field', 'nom_v_e_2': 'hidden field', 'tipo_v_e_3': 'hidden field', 'nom_v_e_3': 'hidden field', 'numero_ext': 'hidden field', 'letra_ext': 'hidden field', 'edificio': 'hidden field', 'edificio_e': 'hidden field', 'numero_int': 'hidden field', 'letra_int': 'hidden field', 'tipo_asent': 'hidden field', 'nomb_asent': 'hidden field', 'tipoCenCom': 'hidden field', 'nom_CenCom': 'hidden field', 'num_local': 'hidden field', 'cod_postal': 'hidden field', 'cve_ent': 'hidden field', 'entidad': 'hidden field', 'cve_mun': 'hidden field', 'municipio': 'hidden field', 'cve_loc': 'hidden field', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'telefono': 'hidden field', 'correoelec': 'hidden field', 'www': 'hidden field', 'tipoUniEco': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_UBICACIONESDEESTABLECIMIENTOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});