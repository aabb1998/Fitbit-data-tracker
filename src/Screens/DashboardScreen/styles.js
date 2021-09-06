import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
    Group1:{
        height: 49,
        marginLeft: 19,
        display: flex,
        alignItems: flex-start,
        minWidth: 204,
    },
    Text1:{
        // ${MontserratMediumStratos24px},
        minHeight: 49,
        letterSpacing: 0.24,
        lineHeight: 31.9,
    },
    Span0: {
        // ${MontserratMediumStratos24px},
        letterPacing: 0.06,
    },
    Span1: {
        fontFamily: font-family-montserrat,
        fontWeight: 500,
        color: stratos,
        fontSize: font-size-xs,
        letterSpacing: 0.02,
        lineHeight: 18.6,
    },
    OverlapGroup2: {
        width: 390,
        height: 608,
        position: relative,
        marginTop: 8,
        marginLeft: -7,
    },
    Chart05: {
        position: absolute,
        width: 390,
        height: 210,
        top: 126,
        left: 0,
    },
    Chart02:{
    position: absolute,
        width: 389,
        height: 168,
        top: 0,
        left: 1,
    },
    Chart8: {
        position: absolute,
        width: 214,
        height: 314,
        top: 294,
        left: 0,
    },
    Chart9:{
        position: absolute,
        width: 214,
        height: 314,
        top: 294,
        left: 175,
    },
    OverlapGroup1 :{
        width: 375,
        marginTop: 45,
        display: flex,
        flexDirection: column,
        alignItems: center,
        minHeight: 97,
    },
    OverlapGroup: {
        height: 64,
        marginTop: -1,
        display: flex,
        // padding: 21.1, 35,
        justifyContent: flex-end,
        alignTtems: center,
        minWidth: 357,
        backgroundColor: "#2d14c4",
        borderRadius: 31,
        // backdropFilter: blur(81.63946533203125px) brightness(100%);
        // -webkit-backdrop-filter: blur(81.63946533203125px) brightness(100%),
    },
    Frame: {
        width: 20,
        height: 19,
        margin_Top: 1,
    },
    Group: {
        marginLeft: 70,
        marginTop: 1,
        display: flex,
        alignItems: flex-end,
        minWidth: 18,
    },
    Rectangle:{
        width: 4,
        height: 19,
        // backgroundColor: var(--lily-white),
        borderRadius: 3,
    },
    Rectangle1: {
        width: 4,
        height: 15,
        marginLeft: 3,
        // background-color: var(--lily-white);
        borderRadius: 3,
    },
    Rectangle2:{
        width: 4,
        height: 8,
        marginLeft: 3,
        // background-color: var(--lily-white);
        borderRadius: 3,
    },
    Exclude:{
        width: 20,
        height: 21,
        alignSelf: flex-end,
        marginLeft: 70,
    },
    Group2:{
        width: 19,
        height: 21,
        alignSelf: flex-end,
        marginLeft: 70,
        marginBottom: 0.19,
    },
    OverlapGroup3: {
        width: 136,
        height: 8,
        position: relative,
        marginTop: 20,
        marginLeft: 1,
    },
    Rectangle3: {
        position: absolute,
        width: 136,
        height: 7,
        top: 1,
        left: 0,
        backgroundColor: "#ffffff",
        borderRadius: 100,
    },
    Rectangle4:{
        position: absolute,
        width: 136,
        height: 7,
        top: 0,
        left: 0,
        // backgroundColor: var(--black),
        borderRadius: 100,
    },

    // export const MontserratMediumStratos24px = css`
    // color: var(--stratos);
    // font-family: var(--font-family-montserrat);
    // font-size: var(--font-size-m);
    // font-weight: 500;
    // font-style: normal;
    // `;

    // :root {
    //     --black: 
    //   rgba(0, 0, 0, 1);
    //     --stratos: 
    //   rgba(0, 9, 62, 1);
    //     --lily-white: 
    //   rgba(230, 240, 255, 0.529);
      
    //     --font-size-xs: 14px;
    //     --font-size-s: 15px;
    //     --font-size-m: 24px;
      
    //     --font-family-montserrat: "Montserrat";
    //     --font-family-sf_pro_text-semibold: "SF Pro Text-Semibold";
});