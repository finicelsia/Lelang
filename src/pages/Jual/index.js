import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILikan } from '../../assets'
import {Input, Gap, Button} from '../../components'
import { colors, getData, useForm } from '../../utils'
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import { Fire } from '../../config'
import DatePicker from './DatePicker'
import moment from 'moment'

const Jual = ({navigation}) => {
    const [user, setUser] = useState({});
    const [imgURI, setURI] = useState();
    const [imgName, setName] = useState();
    const [foto, setFoto] = useState(ILikan);
    
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, response => {
            console.log('response: ', response);
            if(response.didCancel || response.error){
                showMessage({
                    message: 'Maaf, sepertinya anda tidak memilih foto?',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                });
            } else {
                setURI(response.uri);
                setName(response.fileName);
                setFoto({uri: response.uri});
            }
          });
    }

    useEffect(() => {
        getDataUser();
    }, []);
    const getDataUser = () => {
        getData('user').then(res => {
            console.log('user login: ', res);
            setUser(res);
        })
    }
    
    const [Jualan, SetJualan] = useForm(
        {
            LelangBY: user.email,
            NamaIkan: '',
            BeratKG: '',
            HargaAwal: '',
            AkanBerakhir: '',
            TopBidder: '',
            pic: '',
            nomorHP: user.nomorHP,
    });

    const uploadJualan = () => {
        
        Fire.database().ref('fish/').push({
            lelangBY: user.email,
            topBidder: user.email,
            berat: Jualan.BeratKG,
            fotoIkan: imgURI,
            hargaAwal: parseInt(Jualan.HargaAwal),
            namaIkan: Jualan.NamaIkan,
            akanBerakhir:Jualan.AkanBerakhir,
            nomorHP: user.nomorHP
        })
        .then((data)=>{
            //success callback
            console.log('data ' , data)
            navigation.navigate('Beranda')
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    const dateField = ({ onChange }) => 
    <DatePicker onDateChange={AkanBerakhir => onChange(AkanBerakhir)} />;
    
    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>

        <View style={styles.content}>
            <View style={styles.fotoWrap}>
            <Image style={styles.foto} resizeMode={'stretch'} source={foto} />
            <View style={styles.tambahFoto} >
            <Button type="icon-only" icon="tambahFoto" value={Jualan.pic} onPress={getImage}/></View>
            </View> 
            </View>
            <View style={styles.content}>
            <Input label="Nama Ikan" value={Jualan.NamaIkan} onChangeText={value => SetJualan('NamaIkan',value)}/>
            <Gap height={20} />
            <Input label="Berat Ikan" value={Jualan.BeratKG} onChangeText={value => SetJualan('BeratKG', value)}/>
            <Gap height={20} />
            <Input label="Harga Awal" value={Jualan.HargaAwal} onChangeText={value => SetJualan('HargaAwal', value)}/>
            <Gap height={10} />
            {/* <DatePicker 
            component={dateField}
            value={onChange => SetJualan('AkanBerakhir', onChange)}
            /> */}
            <Input label="Jam Lelang Berakhir" value={Jualan.AkanBerakhir} onChangeText={value => SetJualan('AkanBerakhir', value)}/>
            <Gap height={20} />
            <Button title="JUAL" onPress={uploadJualan}/>
            </View>
           
            
        </ScrollView>
    )
}

export default Jual

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        
    },
    foto: {
        width: 340,
        height: 140,

    },
    fotoWrap: {
        width: 350,
        height: 150,
        borderWidth: 1,
        borderColor: colors.border.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    tambahFoto: {
        position: 'absolute',
        bottom: -30,
        right: 0,
    },
    content: {
        padding: 30,
        paddingTop: 0,
        alignItems: 'center',

    },
})
