import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { ListLelang } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const Beranda = ({onPress}) => {
   const [Jualan, SetJualan] = useState([]);

    useEffect(() => {
        Fire.database()
        .ref('fish/')
        .once('value')
        .then(res => {
            console.log('data: ', res.val());
            if (res.val()) {
                const oldData = res.val();
                const data = [];
                Object.keys(oldData).map(item => {
                    data.push({
                        id: item,
                        data: oldData[item],
                    });
                });
                console.log('parse list lelang: ', data);
                SetJualan(data);
            };
    });
});

    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View>
            {Jualan.map(jual => {
                    return (
                    <ListLelang
                    key={jual.id} 
                    NamaIkan={jual.data.namaIkan}
                    BeratKG={jual.data.berat} 
                    HargaAwal={jual.data.hargaAwal} 
                    AkanBerakhir={jual.data.akanBerakhir}
                    LelangBY={jual.data.lelangBY} 
                    TopBidder={jual.data.topBidder}
                    pic={{uri: jual.data.fotoIkan}}
                    nomorHP={jual.data.nomorHP} 
                    tes={jual.id}
                    onPress={onPress}
                    />
                    );
                })}
            </View>
        </ScrollView>
    )
}

export default Beranda

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
    }
})