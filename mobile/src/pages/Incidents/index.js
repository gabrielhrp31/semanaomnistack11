import React,{useState,useEffect} from 'react'
import {Feather} from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

import api from '../../services/api'

export default function Incidents(){
    const [incidents,setIncidents] = useState([]);
    const [total,setTotal] = useState(0);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail',{ incident });
    }

    async function loadIncidents(){
        if(!loading){
            if(!(total>0) || incidents.length!=total){
                try{
                    setLoading(true);

                    const response =  await api.get('incidents',{
                        params:{page}
                    });
                    
                    setIncidents([...incidents,...response.data]);
                    setLoading(false);
                    setPage(page + 1);
                    setTotal(response.headers['x-total-count']);
                }catch(err){
                    console.log(err);
                }
            }
        }
    }

    useEffect(()=>{
        loadIncidents();
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text>
                    Total de <Text style={styles.headerText}>{total} Casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>
               Bem Vindo!
            </Text>
            <Text style={styles.description}>
               Escolha um dos casos abaixo e salve o dia!
            </Text>
            <FlatList 
                data={incidents}
                keyExtractor={incident=>String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item:incident})=>(
                <View style={styles.incidentsItem}>
                    <View style={styles.incidentInlineProperties}>
                        <View style={styles.incidentInlineProperty}>
                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>
                        </View>
                        <View style={{ paddingLeft:10}}>
                            <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>{incident.name}</Text>
                        </View>
                    </View>
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>
                    <TouchableOpacity 
                        style={styles.detailButton}
                        onPress={ () => navigateToDetail(incident) }
                    >
                        <Text style={styles.detailButtonText}>Ver Mais Detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    )
}
