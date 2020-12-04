// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { colors } from '../../utils'

// const Riwayat = () => {
//     return (
//         <View style={styles.page}>
//             <Text>Riwayat</Text>
//         </View>
//     )
// }

// export default Riwayat

// const styles = StyleSheet.create({
//     page: {
//         backgroundColor: colors.white,
//         padding: 15,
//         flex: 1,
//     },
// })
import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { ListHistory, ListLelang } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const Riwayat = ({onPress}) => {
   const [History, SetHistory] = useState([]);
//    const [Jualan, SetJualan] = useState([]);


            useEffect(() => {
                Fire.database()
                .ref('History/')
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
                        SetHistory(data);
                        // SetJualan(data);
                    };
            });
        });

    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View>
            {History.map(history => {
                    return (
                    <ListHistory
                    key={history.id} 
                    // NamaIkan={history.data.namaIkan}
                    // BeratKG={history.data.berat} 
                    // pic={{uri: history.data.fotoIkan}}
                    hargaAkhir={history.data.hargaAkhir} 
                    TopBidder={history.data.topBidder}
                    nomorHP={history.data.nomorHP} 
                    onPress={onPress}
                    />
                    );
                })}
            </View>
     
        </ScrollView>
    )
}

export default Riwayat

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
    }
})