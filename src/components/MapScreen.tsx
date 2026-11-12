import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'; 
export default function MapScreen() {
  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>
        <style>
            html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
        </style>
        <script type="text/javascript">
            DG.then(function () {
                var map, marker;
                map = DG.map('map', {
                    center: [43.238293, 76.945465], // Алматы қаласының координаталары
                    zoom: 13
                });
                
                map.on('click', function(e) {
                    if (marker) {
                        marker.setLatLng(e.latlng);
                    } else {
                        marker = DG.marker(e.latlng).addTo(map);
                    }
                });
            });
        </script>
    </head>
    <body>
        <div id="map"></div>
    </body>
    </html>
  `;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Жеткізу орнын таңдаңыз (2GIS)</Text>
      </View>
      <WebView source={{ html: mapHtml }} style={styles.map} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 16, alignItems: 'center', backgroundColor: '#F8F9FA' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#181C2E' },
  map: { flex: 1 },
});