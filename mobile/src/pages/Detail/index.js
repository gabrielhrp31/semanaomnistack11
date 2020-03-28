import React from 'react'
import {Feather} from '@expo/vector-icons'
import { View, Text, Image,TouchableOpacity, Linking } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;

    const message  = `Olá ${incident.title} estou entrando em contato pois gostária de usar no caso ${incident.name} com o valor de ${Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}`;

    function sendMail(){
        MailComposer.composeAsync({
            subject:'Herói do Caso',
            recipients:[incident.email],
            body:message
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5537991243949&text=${message}`)
    }

    function navigateBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={25} color="#e02041" style={{fontWeight:'bolder'}} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.lightBox}>
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
                    <Text style={styles.incidentProperty}>DESCRICAO:</Text>
                    <Text style={styles.incidentValue}>{incident.description}</Text>
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>
                </View>
                <View style={styles.lightBox}>
                    <Text style={styles.heroTitle}>Salve o Dia.</Text>
                    <Text style={styles.heroTitle}>Seja o Herói deste Caso!</Text>
                    <Text style={styles.heroDescription}>Entre em Contato:</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}