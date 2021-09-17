import React, { useState } from "react";
import { Image, View, StyleSheet, Text, SafeAreaView } from "react-native";
import DashboardMenu from "../Dashboard/DashboardMenu";
import journalIcon from "../../Assets/Journal/column.png";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Journal = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [sections, setSections] = useState([
    {
      name: "Chronological",
    },
    { name: "Biological" },
  ]);

  const getChartParentSize = (event) => {
    const { width, height } = event.nativeEvent.layout;

    setChartWidth((_) => width);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.mainContainer}>
        <Text style={styles.textHeader}>Biological Age</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textSmall}>
            It's your chronological & biological age
          </Text>
          <Image style={styles.journalIconSource} source={journalIcon} />
        </View>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardSmallText1}>Chronological</Text>
            <Text style={styles.cardLargeText}>35</Text>
            <Text style={styles.cardSmallText2}>Age</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardSmallText1}>Biological</Text>
            <Text style={styles.cardLargeText}>28</Text>
            <Text style={styles.cardSmallText2}>Age</Text>
          </View>
        </View>

        <View style={styles.graphCard}>
          <Text style={styles.graphCardTitle}>Body's Biological Age</Text>
          <View style={styles.graphCardList}>
            {sections.map((e, i) => (
              <Text
                key={i}
                onPress={(_) => setActiveSection((_) => i)}
                style={[
                  styles.graphCardListItem,
                  activeSection === i ? styles.graphCardListItemActive : {},
                ]}
              >
                {e.name}
              </Text>
            ))}
          </View>

          <View onLayout={getChartParentSize} style={styles.chart}>
            <LineChart
              data={{
                labels: [
                  "very",
                  "light",
                  "moderate",
                  "lightly",
                  "sedentary",
                  "treadmail",
                ],
                datasets: [
                  {
                    data: [30, 15, 45, 26, 60, 44],
                  },
                ],
              }}
              width={chartWidth + 50}
              height={160}
              chartConfig={{
                backgroundColor: "#ffffff00",
                backgroundGradientFrom: "#ffffff00",
                backgroundGradientTo: "#ffffff00",
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(105,121,248, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(105,121,248, ${opacity})`,
                propsForDots: {
                  r: 3,
                  strokeWidth: 2,
                  stroke: "#6979f8",
                },
                propsForBackgroundLines: {
                  backgroundColor: "red",
                },
              }}
              bezier
              style={{
                // marginVertical: 8,
                // borderRadius: 16,
                padding: 0,
                margin: 0,
              }}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <DashboardMenu />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Journal;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: "normal",
    marginTop: 40,
  },
  textSmall: {
    fontSize: 18,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "auto",
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgb(242,246,249)",
  },
  journalIconSource: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  statisticsLogo: {
    width: 19,
    height: 19,
    marginBottom: 6,
  },

  //   Card Design

  cards: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    padding: 20,
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "45%",
    shadowColor: "#bfc2c8",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9.84,

    elevation: 5,
  },

  cardSmallText1: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cardSmallText2: {
    fontSize: 16,
    color: "#999999",
  },

  cardLargeText: {
    fontSize: 34,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#6979f8",
  },

  // Graph Card

  graphCard: {
    padding: 20,
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%",
    shadowColor: "#bfc2c8",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 9.84,

    elevation: 5,
    marginTop: 40,

    alignItems: "flex-start",
  },

  graphCardTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  graphCardList: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },

  graphCardListItem: {
    fontSize: 17,
    color: "#6979f8",
    opacity: 0.6,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },

  graphCardListItemActive: {
    opacity: 1,
    borderBottomWidth: 6,
    borderBottomColor: "#6979f8",
  },

  chart: {
    overflow: "hidden",
    width: "100%",
    marginLeft: -20,
    marginTop: 20,
  },
});
