import React from "react";
import {transform} from "ol/proj";
import openlayers from "openlayers";
import * as ol from "openlayers";

import {
	layer,
	Map,
	Layers,
} from "react-openlayers";

import s from "./map.pcss";
import {Typography} from "@mui/material";
import {MapData} from "src/data/dataTypes";

type MapProps = MapData;

const myTileSource = new openlayers.source.OSM()

export function MapComponent(props: MapProps){
	return (
		<div className={s.mapWrapper}>
			<Typography variant="h4" component="p" gutterBottom>
				{props.title}
			</Typography>
			<OlMap {...props}/>
		</div>
	)
}

function OlMap(props: MapProps){
	const {
		lonlat
	} = props;


	const mapCenter = lonLanTransform(lonlat)
	const iconFeature = new ol.Feature(new ol.geom.Point(mapCenter));
	const source = new ol.source.Vector({ features: [iconFeature] });
	const markerStyle = new ol.style.Icon(({
		src: 'https://static.tildacdn.com/tild6231-6437-4236-a436-333437653564/pin-icon-on-white-ba.png',
		scale: 0.05,
	}));

	iconFeature.setStyle(new ol.style.Style({
		image: markerStyle,
	}));

	return (
		<Map
			view={{
				center: mapCenter,
				zoom: 12
			}}
		>
			<Layers>
				<layer.Tile source={myTileSource} />
				<layer.Vector source={source} />
			</Layers>
		</Map>
	);
}

function lonLanTransform(lonlat) {
	return transform([lonlat[1], lonlat[0]], "EPSG:4326", "EPSG:3857");
}
