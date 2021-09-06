import React, { useState } from "react";
import {View } from "react-native";
import styles from "./styles";

export default function DashboardScreen({ navigation }) {
  const {spanText, spanText2} = props;
  
  const onFooterLinkPress = () => {
    navigation.navigate("Dashboard");
};
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
			style={{ flex: 1, width: "100%" }}
			keyboardShouldPersistTaps="always"
		>
            <Group1>
                <Text1>
                    <Span0>{spanText}</Span0>
                    <Span1>{spanText2}</Span1>
                </Text1>
            </Group1>
            <OverlapGroup2>
                <Chart05
                    src="chart-05.svg"
                />
                <Chart02
                    src="chart-02.svg"
                />
                <Chart8
                    src="chart-8.svg"
                />
                <Chart9
                    src="chart-9.svg"
                />
            </OverlapGroup2>
            <OverlapGroup1>
                <OverlapGroup>
                    <Frame
                    src="frame.svg"
                    />
                    <Group>
                    <Rectangle></Rectangle>
                    <Rectangle1></Rectangle1>
                    <Rectangle2></Rectangle2>
                    </Group>
                    <Exclude
                    src="exclude.svg"
                    />
                    <Group2
                    src="group.svg"
                    />
                </OverlapGroup>
                <OverlapGroup3>
                    <Rectangle3></Rectangle3>
                    <Rectangle4></Rectangle4>
                </OverlapGroup3>
            </OverlapGroup1>
        </KeyboardAwareScrollView>
    </View>
  );
}

