var Mapifies;if(!Mapifies){Mapifies={}}Mapifies.MapObjects={};Mapifies.MapObjects.Set=function(B,A){var C=jQuery(B).attr("id");var D=new GMap2(B);Mapifies.MapObjects[C]=D;Mapifies.MapObjects[C].Options=A;return Mapifies.MapObjects[C]};Mapifies.MapObjects.Append=function(A,C,D){var B=jQuery(A).attr("id");Mapifies.MapObjects[B][C]=D};Mapifies.MapObjects.Get=function(A){return Mapifies.MapObjects[jQuery(A).attr("id")]};Mapifies.Initialise=function(B,A,F){function D(){return{language:"en",mapType:"map",mapCenter:[55.958858,-3.162302],mapZoom:12,mapControl:"small",mapEnableType:false,mapEnableOverview:false,mapEnableDragging:true,mapEnableInfoWindows:true,mapEnableDoubleClickZoom:false,mapEnableScrollZoom:false,mapEnableSmoothZoom:false,mapEnableGoogleBar:false,mapEnableScaleControl:false,mapShowjMapsIcon:true,debugMode:false}}A=jQuery.extend(D(),A);if(GBrowserIsCompatible()){var E=Mapifies.MapObjects.Set(B,A);var C=Mapifies.GetMapType(A.mapType);E.setCenter(new GLatLng(A.mapCenter[0],A.mapCenter[1]),A.mapZoom,C);if(A.mapShowjMapsIcon){/*Mapifies.AddScreenOverlay(B,{imageUrl:"http://hg.digitalspaghetti.me.uk/jmaps/raw-file/3228fade0b3c/docs/images/jmaps-mapicon.png",screenXY:[70,10],overlayXY:[0,0],size:[42,25]})}switch(A.mapControl){case"small":E.addControl(new GSmallMapControl());break;case"large":E.addControl(new GLargeMapControl());break}if(A.mapEnableType){E.addControl(new GMapTypeControl())}if(A.mapEnableOverview){E.addControl(new GOverviewMapControl())}if(!A.mapEnableDragging){E.disableDragging()}if(!A.mapEnableInfoWindows){E.disableInfoWindow()}if(A.mapEnableDoubleClickZoom){E.enableDoubleClickZoom()}if(A.mapEnableScrollZoom){E.enableScrollWheelZoom()}if(A.mapEnableSmoothZoom){E.enableContinuousZoom()}if(A.mapEnableGoogleBar){E.enableGoogleBar()}if(A.mapEnableScaleControl){E.addControl(new GScaleControl())}if(A.debugMode){console.log(Mapifies)}if(typeof F=="function"){return F(E,B,A)}}else{jQuery(B).text("Your browser does not support Google Maps.");return false}return};Mapifies.MoveTo=function(C,B,G){function E(){return{centerMethod:"normal",mapType:null,mapCenter:[],mapZoom:null}}var F=Mapifies.MapObjects.Get(C);B=jQuery.extend(E(),B);if(B.mapType){var D=Mapifies.GetMapType(B.mapType)}var A=new GLatLng(B.mapCenter[0],B.mapCenter[1]);switch(B.centerMethod){case"normal":F.setCenter(A,B.mapZoom,D);break;case"pan":F.panTo(A);break}if(typeof G=="function"){return G(A,B)}};Mapifies.SavePosition=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.savePosition();if(typeof D=="function"){return D(C)}};Mapifies.GotoSavedPosition=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.returnToSavedPosition();if(typeof D=="function"){return D(C)}};Mapifies.CreateKeyboardHandler=function(B,A,E){var C=Mapifies.MapObjects.Get(B);var D=new GKeyboardHandler(C);if(typeof E=="function"){return E(D)}};Mapifies.CheckResize=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.checkResize();if(typeof D=="function"){return D(B)}};Mapifies.SearchAddress=function(C,B,F){function D(){return{query:null,returnType:"getLatLng",cache:undefined,countryCode:"uk"}}var E=Mapifies.MapObjects.Get(C);B=jQuery.extend(D(),B);if(typeof E.Geocoder==="undefined"){if(typeof B.cache==="undefined"){var A=new GClientGeocoder()}else{var A=new GClientGeocoder(cache)}Mapifies.MapObjects.Append(C,"Geocoder",A);E=Mapifies.MapObjects.Get(C)}E.Geocoder[B.returnType](B.query,function(G){if(typeof F==="function"){return F(G,B)}});return};Mapifies.SearchDirections=function(D,I,H){function C(){return{query:null,panel:null,locale:"en_GB",travelMode:"driving",avoidHighways:false,getPolyline:true,getSteps:true,preserveViewport:false,clearLastSearch:false}}var G=Mapifies.MapObjects.Get(D);I=jQuery.extend(C(),I);var B={locale:I.locale,travelMode:I.travelMode,avoidHighways:I.avoidHighways,getPolyline:I.getPolyline,getSteps:I.getSteps,preserveViewport:I.preserveViewport};var A=$(I.panel).get(0);if(typeof G.Directions==="undefined"){Mapifies.MapObjects.Append(D,"Directions",new GDirections(G,A))}GEvent.addListener(G.Directions,"load",F);GEvent.addListener(G.Directions,"error",E);if(I.clearLastSearch){G.Directions.clear()}G.Directions.load(I.query,B);function F(){if(typeof H=="function"){return H(G.Directions,I)}}function E(){if(typeof H=="function"){return H(G.Directions,I)}}return};Mapifies.CreateAdsManager=function(C,B,F){function D(){return{publisherId:"",maxAdsOnMap:3,channel:0,minZoomLevel:6}}var E=Mapifies.MapObjects.Get(C);B=jQuery.extend(D(),B);var A={maxAdsOnMap:B.maxAdsOnMap,channel:B.channel,minZoomLevel:B.minZoomLevel};if(typeof E.AdsManager=="undefined"){Mapifies.MapObjects.Append(C,"AdsManager",new GAdsManager(E,B.publisherId,A))}if(typeof F=="function"){return F(E.AdsManager,B)}};Mapifies.AddFeed=function(B,A,F){function D(){return{feedUrl:null,mapCenter:[]}}var E=Mapifies.MapObjects.Get(B);A=jQuery.extend(D(),A);var C=new GGeoXml(A.feedUrl);E.addOverlay(C);if(A.mapCenter[0]&&A.mapCenter[1]){E.setCenter(new GLatLng(A.mapCenter[0],A.mapCenter[1]))}if(typeof F=="function"){return F(C,A)}return};Mapifies.RemoveFeed=function(A,B,D){var C=Mapifies.MapObjects.Get(A);C.removeOverlay(B);if(typeof D=="function"){return D(B)}return};Mapifies.AddGroundOverlay=function(B,A,F){function D(){return{overlaySouthWestBounds:undefined,overlayNorthEastBounds:undefined,overlayImage:undefined}}var E=Mapifies.MapObjects.Get(B);A=jQuery.extend(D(),A);var C=new GLatLngBounds(new GLatLng(A.overlaySouthWestBounds[0],A.overlaySouthWestBounds[1]),new GLatLng(A.overlayNorthEastBounds[0],A.overlayNorthEastBounds[1]));groundOverlay=new GGroundOverlay(A.overlayImage,C);E.addOverlay(groundOverlay);if(typeof F=="function"){return F(groundOverlay,A)}return};Mapifies.RemoveGroundOverlay=function(A,C,D){var B=Mapifies.MapObjects.Get(A);B.removeOverlay(C);if(typeof D==="function"){return D(C)}return};Mapifies.AddMarker=function(D,C,G){function E(){var H={pointLatLng:undefined,pointHTML:undefined,pointOpenHTMLEvent:"click",pointIsDraggable:false,pointIsRemovable:false,pointRemoveEvent:"dblclick",pointMinZoom:4,pointMaxZoom:17,pointIcon:undefined,centerMap:false,centerMoveMethod:"normal"};return H}var F=Mapifies.MapObjects.Get(D);C=jQuery.extend({},E(),C);var B={};if(typeof C.pointIcon=="object"){jQuery.extend(B,{icon:C.pointIcon})}if(C.pointIsDraggable){jQuery.extend(B,{draggable:C.pointIsDraggable})}if(C.centerMap){switch(C.centerMoveMethod){case"normal":F.setCenter(new GLatLng(C.pointLatLng[0],C.pointLatLng[1]));break;case"pan":F.panTo(new GLatLng(C.pointLatLng[0],C.pointLatLng[1]));break}}var A=new GMarker(new GLatLng(C.pointLatLng[0],C.pointLatLng[1]),B);if(C.pointHTML){GEvent.addListener(A,C.pointOpenHTMLEvent,function(){A.openInfoWindowHtml(C.pointHTML,{maxContent:C.pointMaxContent,maxTitle:C.pointMaxTitle})})}if(C.pointIsRemovable){GEvent.addListener(A,C.pointRemoveEvent,function(){F.removeOverlay(A)})}if(F.MarkerManager){F.MarkerManager.addMarker(A,C.pointMinZoom,C.pointMaxZoom)}else{F.addOverlay(A)}if(typeof G=="function"){return G(A,C)}return};Mapifies.RemoveMarker=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.removeOverlay(A);if(typeof D==="function"){return D(A)}return};Mapifies.CreateMarkerManager=function(C,A,G){function D(){return{markerManager:"GMarkerManager",borderPadding:100,maxZoom:17,trackMarkers:false}}var F=Mapifies.MapObjects.Get(C);A=jQuery.extend(D(),A);var E={borderPadding:A.borderPadding,maxZoom:A.maxZoom,trackMarkers:A.trackMarkers};var B=new window[A.markerManager](F,A);Mapifies.MapObjects.Append(C,"MarkerManager",B);if(typeof G=="function"){return G(B,A)}};Mapifies.AddPolygon=function(E,C,H){function F(){return{polygonPoints:[],polygonStrokeColor:"#000000",polygonStrokeWeight:5,polygonStrokeOpacity:1,polygonFillColor:"#ff0000",polygonFillOpacity:1,mapCenter:undefined,polygonClickable:true}}var G=Mapifies.MapObjects.Get(E);C=jQuery.extend(F(),C);var A={};if(!C.polygonClickable){A=jQuery.extend(A,{clickable:false})}if(typeof C.mapCenter!=="undefined"&&C.mapCenter[0]&&C.mapCenter[1]){G.setCenter(new GLatLng(C.mapCenter[0],C.mapCenter[1]))}var B=[];jQuery.each(C.polygonPoints,function(J,I){B.push(new GLatLng(I[0],I[1]))});var D=new GPolygon(B,C.polygonStrokeColor,C.polygonStrokeWeight,C.polygonStrokeOpacity,C.polygonFillColor,C.polygonFillOpacity,A);G.addOverlay(D);if(typeof H=="function"){return H(D,A,C)}return};Mapifies.RemovePolygon=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.removeOverlay(A);if(typeof D==="function"){return D(A)}return};Mapifies.AddPolyline=function(D,C,H){function F(){return{polylinePoints:[],polylineStrokeColor:"#ff0000",polylineStrokeWidth:10,polylineStrokeOpacity:1,mapCenter:[],polylineGeodesic:false,polylineClickable:true}}var G=Mapifies.MapObjects.Get(D);C=jQuery.extend(F(),C);var E={};if(C.polylineGeodesic){jQuery.extend(E,{geodesic:true})}if(!C.polylineClickable){jQuery.extend(E,{clickable:false})}if(C.mapCenter[0]&&C.mapCenter[1]){G.setCenter(new GLatLng(C.mapCenter[0],C.mapCenter[1]))}var B=[];jQuery.each(C.polylinePoints,function(J,I){B.push(new GLatLng(I[0],I[1]))});var A=new GPolyline(B,C.polylineStrokeColor,C.polylineStrokeWidth,C.polylineStrokeOpacity,E);G.addOverlay(A);if(typeof H=="function"){return H(A,E,C)}return};Mapifies.RemovePolyline=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.removeOverlay(A);if(typeof D==="function"){return D(A)}return};Mapifies.AddScreenOverlay=function(C,B,F){function D(){return{imageUrl:"",screenXY:[],overlayXY:[],size:[]}}var E=Mapifies.MapObjects.Get(C);B=jQuery.extend(D(),B);var A=new GScreenOverlay(B.imageUrl,new GScreenPoint(B.screenXY[0],B.screenXY[1]),new GScreenPoint(B.overlayXY[0],B.overlayXY[1]),new GScreenSize(B.size[0],B.size[1]));E.addOverlay(A);if(typeof F=="function"){return F(A,B)}};Mapifies.RemoveScreenOverlay=function(B,A,D){var C=Mapifies.MapObjects.Get(B);C.removeOverlay(A);if(typeof D==="function"){return D(A)}return};Mapifies.CreateStreetviewPanorama=function(E,D,H){function F(){return{overideContainer:"",latlng:[40.75271883902363,-73.98262023925781],pov:[]}}var G=Mapifies.MapObjects.Get(E);D=jQuery.extend(F(),D);var A=null;if(D.overideContainer!==""){A=jQuery(D.overideContainer).get(0)}else{A=jQuery(E).get(0)}var B={};if(D.pov.length>0){jQuery.extend(B,{pov:new GPov(D.latlng[0],D.latlng[1],D.latlng[2])})}if(D.latlng.length>0){jQuery.extend(B,{latlng:new GLatLng(D.latlng[0],D.latlng[1])})}var C=new GStreetviewPanorama(A,B);if(typeof H=="function"){return H(C,D)}return};Mapifies.RemoveStreetviewPanorama=function(B,A,D){var C=Mapifies.MapObjects.Get(B);A.remove();if(typeof D=="function"){return D(A)}return};Mapifies.AddTrafficInfo=function(B,A,F){function D(){return{mapCenter:[]}}var E=Mapifies.MapObjects.Get(B);A=jQuery.extend(D(),A);var C=new GTrafficOverlay;E.addOverlay(C);if(A.mapCenter[0]&&A.mapCenter[1]){E.setCenter(new GLatLng(A.mapCenter[0],A.mapCenter[1]))}if(typeof F=="function"){return F(C,A)}};Mapifies.RemoveTrafficInfo=function(A,B,D){var C=Mapifies.MapObjects.Get(A);C.removeOverlay(B);if(typeof D==="function"){return D(B)}return};Mapifies.SearchCode=function(A){switch(A){case G_GEO_SUCCESS:return{code:G_GEO_SUCCESS,success:true,message:"Success"};case G_GEO_UNKNOWN_ADDRESS:return{code:G_GEO_UNKNOWN_ADDRESS,success:false,message:"No corresponding geographic location could be found for one of the specified addresses. This may be due to the fact that the address is relatively new, or it may be incorrect"};break;case G_GEO_SERVER_ERROR:return{code:G_GEO_UNKNOWN_ADDRESS,success:false,message:"A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known."};break;case G_GEO_MISSING_QUERY:return{code:G_GEO_UNKNOWN_ADDRESS,success:false,message:"The HTTP q parameter was either missing or had no value. For geocoder requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input."};break;case G_GEO_BAD_KEY:return{code:G_GEO_UNKNOWN_ADDRESS,success:false,message:"The given key is either invalid or does not match the domain for which it was given."};break;case G_GEO_BAD_REQUEST:return{code:G_GEO_UNKNOWN_ADDRESS,success:false,message:"A directions request could not be successfully parsed."};break;default:return{code:null,success:false,message:"An unknown error occurred."};break}};Mapifies.GetMapType=function(A){switch(A){case"map":A=G_NORMAL_MAP;break;case"sat":A=G_SATELLITE_MAP;break;case"hybrid":A=G_HYBRID_MAP;break}return A};Mapifies.GetTravelMode=function(A){switch(A){case"driving":A=G_TRAVEL_MODE_DRIVING;break;case"walking":A=G_TRAVEL_MODE_WALKING;break}return A};Mapifies.createIcon=function(A){function C(){return{iconImage:undefined,iconShadow:undefined,iconSize:undefined,iconShadowSize:undefined,iconAnchor:undefined,iconInfoWindowAnchor:undefined,iconPrintImage:undefined,iconMozPrintImage:undefined,iconPrintShadow:undefined,iconTransparent:undefined}}A=jQuery.extend(C(),A);var B=new GIcon(G_DEFAULT_ICON);if(A.iconImage){B.image=A.iconImage}if(A.iconShadow){B.shadow=A.iconShadow}if(A.iconSize){B.iconSize=A.iconSize}if(A.iconShadowSize){B.shadowSize=A.iconShadowSize}if(A.iconAnchor){B.iconAnchor=A.iconAnchor}if(A.iconInfoWindowAnchor){B.infoWindowAnchor=A.iconInfoWindowAnchor}return B};Mapifies.getCenter=function(A){var B=Mapifies.MapObjects.Get(A);return B.getCenter()};Mapifies.getBounds=function(A){var B=Mapifies.MapObjects.Get(A);return B.getBounds()};var Mapifies;if(!Mapifies){Mapifies={}}(function(A){A.fn.jmap=function(D,B,C){return this.each(function(){if(D=="init"&&typeof B=="undefined"){new Mapifies.Initialise(this,{},null)}else{if(D=="init"&&typeof B=="object"){new Mapifies.Initialise(this,B,C)}else{if(D=="init"&&typeof B=="function"){new Mapifies.Initialise(this,{},B)}else{if(typeof D=="object"||D==null){new Mapifies.Initialise(this,D,B)}else{try{new Mapifies[D](this,B,C)}catch(E){throw Error("Mapifies Function Does Not Exist")}}}}}})}})(jQuery);