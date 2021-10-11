import React, { useState } from "react";
import { Image, View, StyleSheet, Text, SafeAreaView } from "react-native";
import DashboardMenu from "../Dashboard/DashboardMenu";
import journalIcon from "../../Assets/Journal/column.png";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Journal ({ navigation }) {
    const [chartWidth, setChartWidth] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [sections, setSections] = useState([
      {
        name: "Distance(km)",
      },
      { name: "Steps" },
    ]);

    const getChartParentSize = (event) => {
      const { width, height } = event.nativeEvent.layout;

      setChartWidth((_) => width);
    };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.mainContainer}>
          <Text style={styles.textHeader}>Summary</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textSmall}>How is your work out</Text>
            <Image style={styles.journalIconSource} source={journalIcon} />
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.cardSmallText1}>In</Text>
              <Text style={styles.cardLargeText}>1913</Text>
              <Text style={styles.cardSmallText2}>Calories</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardSmallText1}>Out</Text>
              <Text style={styles.cardLargeText}>2143</Text>
              <Text style={styles.cardSmallText2}>Calories</Text>
            </View>
          </View>

          <View style={styles.graphCard}>
            <Text style={styles.graphCardTitle}>Activity</Text>
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
                      data: [30, 15, 45, 26, 60, 30],
                    },
                  ],
                }}
                width={chartWidth + 50}
                height={180}
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
                  padding: 0,
                  margin: 0,
                  // overflow: "hidden",
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
}

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
    fontSize: 22,
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
    // overflow: "hidden",
    width: "100%",
    marginLeft: -35,
    marginTop: 20,
    backgroundColor: "#ffffff00",
  },
});
