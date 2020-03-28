import React from 'react';
import { StyleSheet } from 'react-native';
import Contstants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Contstants.statusBarHeight + 20,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    headerTextBold:{
        fontSize:15,
        color:'#737380'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight:'bold'
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color:'#737380'
    },
    incidentsItem:{
        marginTop:20,
        padding:24,
        borderRadius:8,
        backgroundColor:"#fff",
        marginBottom:16,
    },
    incidentInlineProperties:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    incidentInlineProperty:{
        flex:1
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380'
    },
    detailButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    detailButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:'bold'
    }
})

export default styles
