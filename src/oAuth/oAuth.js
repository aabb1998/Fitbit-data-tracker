import React from "react";
import { authorize, refresh, revoke } from "react-native-app-auth";

export const oAuth = async () => {
	const config = {
		clientId: "23BBK5",
		clientSecret: "69cfc7c0381aa053c07bf17bb508cd21",
		redirectUrl: "http://localhost", //note: path is required
		scopes: ["activity", "sleep"],
		serviceConfiguration: {
			authorizationEndpoint: "https://www.fitbit.com/oauth2/authorize",
			tokenEndpoint: "https://api.fitbit.com/oauth2/token",
			revocationEndpoint: "https://api.fitbit.com/oauth2/revoke",
		},
	};

	const authState = await authorize(config);
	const refreshedState = await refresh(config, {
		refreshToken: authState.refreshToken,
	});

	await revoke(config, {
		tokenToRevoke: refreshedState.refreshToken,
		includeBasicAuth: true,
	});
};
