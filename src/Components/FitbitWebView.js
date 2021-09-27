import React, { useEffect, useState, FunctionComponent } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Linking,
} from "react-native";

import qs from "qs";
import { ScrollView } from "react-native-gesture-handler";
import URL from "url-parse";
import { WebView, WebViewNavigation } from "react-native-webview";
import URLParse from "url-parse";

const FitbitWebView = () => {
	const [accessToken, setAccessToken] = useState();
	const [accountToken, setAccountToken] = useState();

	useEffect(() => {
		var regex = /[#?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
		while ((match = regex.exec(accessToken))) {
			params[match[1]] = match[2];
		}
		// console.log(params.access_token);
		if (params.access_token) {
			setAccountToken(params.access_token);
		}
	}, [accessToken]);

	useEffect(() => {
		console.log(accountToken);
		// getData(accountToken);
	}, [accountToken]);

	const onNavigationStateChange = (navigationState) => {
		const url = navigationState.url;
	};

	return (
		<WebView
			source={{
				uri: `https://www.fitbit.com/oauth2/authorize?${qs.stringify({
					client_id: "23BBK5",
					response_type: "token",
					scope: "heartrate activity activity profile sleep",
					redirect_uri: "http://localhost",
					expires_in: "31536000",
				})}`,
			}}
			onNavigationStateChange={onNavigationStateChange}
			onError={(syntheticEvent) => {
				const { nativeEvent } = syntheticEvent;
				// console.log("WebView error: ", nativeEvent);
				// console.log(nativeEvent.url);
				if (!accessToken) {
					setAccessToken(nativeEvent.url);
				}
			}}
		/>
	);
};

export default FitbitWebView;

const styles = StyleSheet.create({});
