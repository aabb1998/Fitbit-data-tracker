import React, { Component, useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";

import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	Dimensions,
	Alert,
	Button,
	ActivityIndicator,
} from "react-native";
import { render } from "react-dom";
import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAi3OxyKKck1xon1mFU-cDG1bMN16kAMe8",
	authDomain: "fitbit-data-tracker.firebaseapp.com",
	projectId: "fitbit-data-tracker",
	storageBucket: "fitbit-data-tracker.appspot.com",
	messagingSenderId: "890856216222",
	appId: "1:890856216222:web:889f2fdc72320094b7cd8f",
};

const PVTDetailsTest = () => {
	const [sd1, setSd1] = useState([]);
	const [sd2, setSd2] = useState([]);
	const [data, setData] = useState({});
	const [showData, setShowData] = useState(false);

	const labels1 = [];
	const data1 = [0];

	const labels2 = [];
	const data2 = [];

	useEffect(() => {
		const displayRes = async () => {
			const arr = [];
			// const citiesRef = firebase.firestore().collection("pvtRestults");
			// const snapshot = await citiesRef.get();
			// console.log(snapshot);
			// snapshot.forEach((doc) => {
			// 	console.log(doc.data());
			// 	arr.push(doc.data());
			// });
			const dataInfo = await firebase
				.firestore()
				.collection("pvtResults")
				.get();

			dataInfo.forEach((doc) => {
				// console.log(doc.data());
				sd1.push(doc.data().score);
				sd2.push(Math.floor(doc.data().testDateTime % 60));
				// console.log(doc.data().testDateTime);
			});
			setShowData(true);
		};
		displayRes();
	}, []);

	// useEffect(() => {
	// 	console.log(sd1);
	// }, [sd1]);

	useEffect(() => {
		console.log(sd2);
	}, [sd2]);

	const DisplayRes = async () => {
		var arr = [];
		const citiesRef = firebase.firestore().collection("pvtResults");
		const snapshot = await citiesRef.get();
		snapshot.forEach((doc) => {
			console.log(doc.data());
			arr.push(doc.data());
		});
		for (let i = 0; i < arr.length; i++) {
			// console.log(arr[i]);
			data1.push(arr[i].score);
			sd1.push(arr[i].score);
			//var date = Date.parse(arr[i].testDateTime);
			labels1.push(arr[i].testDateTime);
			// console.log(this.state.sd1);
		}

		for (let i = 0; i < data1.length; i++) {
			console.log(data1[i]);
		}
	};

	return (
		<View>
			<View
				style={{
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 25, marginTop: 70 }}>
					Daily Scores
				</Text>
			</View>

			<View style={{ alignItems: "center" }}>
				<LineChart
					data={{
						labels: [0, 1],
						datasets: [
							{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
								],
							},
						],
					}}
					width={Dimensions.get("window").width - 50} // from react-native
					height={220}
					chartConfig={{
						backgroundColor: "#e26a00",
						backgroundGradientFrom: "#D9D9D9",
						backgroundGradientTo: "#FFF",
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						labelColor: (opacity = 1) =>
							`rgba(0, 0, 0, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: "6",
							strokeWidth: "2",
							stroke: "#ffa726",
						},
					}}
					bezier
					style={{
						marginVertical: 5,
						borderRadius: 15,
					}}
				/>
			</View>

			<View
				style={{
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 25, marginTop: 70 }}>
					Test Breakdown
				</Text>
			</View>
			<View style={{ alignItems: "center" }}>
				{showData && (
					<LineChart
						data={{
							labels: sd2,
							datasets: [
								{
									data: sd1,
								},
							],
						}}
						width={Dimensions.get("window").width - 50} // from react-native
						height={220}
						chartConfig={{
							backgroundColor: "#e26a00",
							backgroundGradientFrom: "#D9D9D9",
							backgroundGradientTo: "#FFF",
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
							labelColor: (opacity = 1) =>
								`rgba(0, 0, 0, ${opacity})`,
							style: {
								borderRadius: 16,
							},
							propsForDots: {
								r: "6",
								strokeWidth: "2",
								stroke: "#ffa726",
							},
						}}
						bezier
						style={{
							marginVertical: 5,
							borderRadius: 15,
						}}
					/>
				)}
				{/* <LineChart
					data={{
						labels: sd1,
						datasets: [
							{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
								],
							},
						],
					}}
					width={Dimensions.get("window").width - 50} // from react-native
					height={220}
					chartConfig={{
						backgroundColor: "#e26a00",
						backgroundGradientFrom: "#D9D9D9",
						backgroundGradientTo: "#FFF",
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
						labelColor: (opacity = 1) =>
							`rgba(0, 0, 0, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: "6",
							strokeWidth: "2",
							stroke: "#ffa726",
						},
					}}
					bezier
					style={{
						marginVertical: 5,
						borderRadius: 15,
					}}
				/> */}
			</View>
			<Button title="End Test" onPress={() => this.DisplayRes()} />
		</View>
	);
};

export default PVTDetailsTest;

const styles = StyleSheet.create({});
