import React,{useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import LikeCard from '../components/LikeCard';
import Card from '../components/Card';
import Constants from 'expo-constants';
import {firebase_db} from "../firebaseConfig"
import Loading from '../components/Loading';



export default function LikePage({navigation,route}){
    
    const [tip, setTip] = useState([])
    const [ready,setReady] = useState(true)

    useEffect(()=>{
        const user_id = Constants.installationId;
        navigation.setOptions({
            title:'꿀팁 찜'
        })
        firebase_db.ref('/like/'+user_id).once('value').then((snapshot) => {
            console.log("파이어베이스에서 데이터 가져옴")
            let tip = snapshot.val();
           // let tip_list = Object.values(tip);
            if(tip.length>0){
                setTip(tip)
                setReady(false)
            }
        });
        // setTimeout(()=>{
        //     let tip = data.tip;
        //     setState(tip)
        //     setCateState(tip)
        //     getLocation()
        //     setReady(false)
        // },500)
      },[])
      
    return ready ? <Loading/> : ( 
        <ScrollView style={styles.container}>
           {
               tip.map((content,i)=>{
                   return(<LikeCard key={i} content={content} navigation={navigation}/>)
               })
           }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})