import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import {ListItem, Text} from 'react-native-elements';

function HomeView({route, navigation}) {
  const {user} = route.params;
  const [airData, setAirData] = useState([]);

  const requestAirData = async () => {
    return axios
      .get('https://api.datos.gob.mx/v1/calidadAire')
      .then(response => {
        if (response.status === 200) {
          return {success: true, data: response.data};
        }
        return {success: false};
      })
      .catch(err => console.err(err));
  };

  useEffect(() => {
    (async function requestAsync() {
      const airDataResult = await requestAirData();
      console.log('DATA', airDataResult);
      if (airDataResult.success) {
        setAirData(airDataResult.data);
      } else {
        // TODO: Agregar alerta por error en consumo de API
      }
    })();
  }, [setAirData]);

  const readableDate = dateString => {
    return dateString.toLocaleString();
  };

  const renderListItem = ({item}) => {
    const station = item.stations[0];
    const indexes = station.indexes[0];
    return (
      <ListItem
        title={`${station.name} - ${station.source_id} | ${readableDate(
          indexes.calculationTime,
        )}`}
        subtitle={`${indexes.value} ${indexes.scale}`}
        bottomDivider
      />
    );
  };
  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <Text h3>Bienvenido {user}</Text>
        </View>
      }
      keyExtractor={item => item._id}
      data={airData.results}
      renderItem={renderListItem}
    />
  );
}

export default HomeView;
