import React from 'react'
import { StyleSheet, } from 'react-native'
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
    lightBox:{
        marginTop:25,
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
    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30,
    },
    heroDescription:{
        fontSize:14,
        color:'#737380',
        marginTop:16
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        fontWeight:'bold',
        fontSize:15,
        color:'#FFF',
    }
})

export default styles;
