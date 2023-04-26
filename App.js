import React, {useState} from 'react';
import { Alert, Button, StyleSheet, TextInput, Text, View, Image, Switch, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

const transportation = require('./images/transportation.png');
const diet = require('./images/diet.png');
const waste = require('./images/waste.png');
const energy = require('./images/energy.png');

function HomeScreen({ navigation }) {
  const [transportationIsEnabled, setTransportationIsEnabled] = useState(true);
  const [wasteIsEnabled, setWasteIsEnabled] = useState(true);
  const [dietIsEnabled, setDietIsEnabled] = useState(true);
  const [energyIsEnabled, setEnergyIsEnabled] = useState(true);

  const toggleTransportation = () => setTransportationIsEnabled(previousState => !previousState);
  const toggleWaste = () => setWasteIsEnabled(previousState => !previousState);
  const toggleDiet = () => setDietIsEnabled(previousState => !previousState);
  const toggleEnergy = () => setEnergyIsEnabled(previousState => !previousState);

  return (
    <>
    <View style={styles.outerContainer}>
      <View>
        <Text style={styles.title}>Green Impact Home</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.pressableContainer}>
          <Pressable style={styles.button}>
            <View style={{borderWidth: 0, borderColor: "red"}}>
              <Image source={transportation} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row"}}>
              <View style={{ backgroundColor: "lightblue", alignItems: "flex-end", paddingRight: 10, width: 148, borderWidth: 0, borderColor: "orange"}}>
                <Text style={styles.imageLabel}>Transportation</Text>
              </View>
              <View style={{ borderWidth: 0, borderColor: "orange"}}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={transportationIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={toggleTransportation}
                  value={transportationIsEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={{ borderWidth: 0}}>
              <Image source={waste} style={styles.images} />
            </View>
            <View style={{ borderWidth: 0, flexDirection: "row"}}>
              <View style={{ backgroundColor: "lightBlue", paddingRight: 10, width: 70, borderWidth: 0, borderColor: "orange"}}>
                <Text style={styles.imageLabel}>Waste</Text>
              </View>
              <View style={{ borderWidth: 0, borderColor: "orange"}}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={wasteIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={toggleWaste}
                  value={wasteIsEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.pressableContainer}>
          <Pressable style={styles.button}>
            <View style={{ alignItems: "flex-start"}}>
              <Image source={diet} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row"}}>
              <View style={{ backgroundColor: "lightBlue", paddingRight: 10, width: 60, borderWidth: 0, borderColor: "blue"}}>
                <Text style={styles.imageLabel}>Diet</Text>
              </View>
              <View style={{ borderWidth: 0, borderColor: "orange"}}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={dietIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={toggleDiet}
                  value={dietIsEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={{ flexDirection: "row", alignItems: "flex-start"}}>
              <Image source={energy} style={styles.images} />
            </View>
            <View style={{ flexDirection: "row"}}>
              <View style={{ backgroundColor: "lightblue", alignItems: "flex-end", paddingRight: 10, width: 148, borderWidth: 0, borderColor: "orange"}}>
                <Text style={styles.imageLabel}>Energy</Text>
              </View>
              <View style={{ borderWidth: 0, borderColor: "orange"}}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={energyIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={toggleEnergy}
                  value={energyIsEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <Pressable onPress={() => navigation.navigate('Calculator')} style={{borderWidth: 0}}>
          <View style={{ backgroundColor: "lightblue", alignItems: "center", paddingRight: 10, height: 40, width: 148, borderWidth: 0, borderColor: "orange", justifyContent: "center"}}>
            <Text style={{fontSize: 24, fontWeight: "bold", borderWidth: 0}}>Next</Text>
          </View>
        </Pressable>
      </View>
    </View>
    </>
  );
}

function CalculatorScreen({ navigation }) {
  const [state, setState] = useState(null);
  const [transportationEmissionFactor, setTransportationEmissionFactor] = React.useState(0);
  const [dietEmissionFactor, setDietEmissionFactor] = React.useState(0);
  const [wasteEmissionFactor, setWasteEmissionFactor] = React.useState(0);
  const [energyEmissionFactor, setEnergyEmissionFactor] = React.useState(0);
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [selectedTransportation, setSelectedTransportation] = useState("car");
  const [selectedDiet, setSelectedDiet] = useState("beef");
  const [selectedWaste, setSelectedWaste] = useState("food");
  const [selectedEnergy, setSelectedEnergy] = useState("coal");
  const [totalCarbonFootPrint, setTotalCarbonFootPrint] = useState(0);

  const [transportationValue, setTransportationValue] = useState(0);
  const [dietValue, setDietValue] = useState(0);
  const [wasteValue, setWasteValue] = useState(0);
  const [energyValue, setEnergyValue] = useState(0);

  Alert.alert(`top`);
  let itemValue;
  let numberOfPeople = 1;

  //console.log(`in CalculatorScreen" ${transportationIsEnabled}`);
  const calculateFootPrint = () => {
    //console.log(`in calcFootPrint ${selectedTransportation}`);
    //console.log(`in xxx calcFootPrint ${selectedTransportation}, ${transportationEmissionFactor} `);
    //TotalCarbonFootPrint
    //(Total distance traveled per year x
    // Emission factor for transportation) / Number of passengers
    //let totalTransportation = Math.divide(Math.multiply(parsefloat(text), parsefloat(150)),1.5);

    //start transportation calculation
    //● Car: 0.118 g CO2e/passenger-km
    //● Bus: 0.023 g CO2e/passenger-km
    //● Train (electric): 0.007 g CO2e/passenger-km
    //● Train (diesel): 0.059 g CO2e/passenger-km
    //● Airplane: 0.233 g CO2e/passenger-km
    let tempTransportationFactor = 0;
    switch (selectedTransportation) {
      case 'car':
        tempTransportationFactor = 0.118;
        break;
      case 'bus':
        tempTransportationFactor = 0.023;
        break;
      case 'etrain':
        tempTransportationFactor = 0.007;
        break;
      case 'train':
        tempTransportationFactor = 0.059;
        break;
      case 'airplane':
        tempTransportationFactor = 0.223;
        break;
      default:
        console.log('Invalid input!');
        break;
    }
    //TODO: will be generalized later
    numberOfPeople = 1.5;
    let totalTransportation = (parseFloat(transportationValue) * parseFloat(tempTransportationFactor)/numberOfPeople);
    setTransportationEmissionFactor(tempTransportationFactor);

    //start diet calculations
    // ● Beef: 60 kg CO2e/kg
    // ● Lamb: 24 kg CO2e/kg
    // ● Pork: 7.0 kg CO2e/kg
    // ● Chicken: 6.0 kg CO2e/kg
    // ● Fish (farmed): 5.0 kg CO2e/kg
    // ● Eggs: 4.8 kg CO2e/kg
    // ● Milk: 1.9 kg CO2e/kg
    // ● Cheese: 13.5 kg CO2e/kg
    // ● Vegetables (seasonal, locally grown): 0.2 kg CO2e/kg
    // ● Grains (wheat, rice, etc.): 0.8 kg CO2e/kg
    let tempDietFactor = 0;
    switch (selectedDiet) {
      case 'beef':
        tempDietFactor = 60.0;
        break;
      case 'lamb':
        tempDietFactor = 24.0;
        break;
      case 'pork':
        tempDietFactor = 7.8;
        break;
      case 'chicken':
        tempDietFactor = 6.0;
        break;
      case 'eggs':
        tempDietFactor = 4.8;
        break;
      case 'milk':
        tempDietFactor = 1.9;
        break;
      case 'cheese':
        tempDietFactor = 13.5;
        break;
      case 'vegetables':
        tempDietFactor = 0.2;
        break;
      case 'grains':
        tempDietFactor = 0.8;
        break;
      default:
        console.log('Invalid input!');
        break;
    }
    //TODO: the number of people will need to be addressed.
    numberOfPeople = 1;
    let totalDiet = (parseFloat(dietValue) * parseFloat(tempDietFactor)/numberOfPeople);
    setDietEmissionFactor(tempDietFactor);

    //start waste calculations
    //● Food waste: ○ Formula: Carbon footprint of food waste = amount of food waste (kg) x emission factor (kg CO2e/kg)
    //○ Emission factor: 0.62 kg CO2e/kg of food waste (based on global average)
    //● Paper waste: ○ Formula: Carbon footprint of paper waste = amount of paper waste (kg) x emission factor (kg CO2e/kg)
    //○ Emission factor: 1.37 kg CO2e/kg of paper waste (based on global average)
    //● Plastic waste: ○ Formula: Carbon footprint of plastic waste = amount of plastic waste (kg) x emission factor (kg CO2e/kg)
    //○ Emission factor: 6 kg CO2e/kg of plastic waste (based on global average)
    //● Glass waste: ○ Formula: Carbon footprint of glass waste = amount of glass waste (kg) x emission factor (kg CO2e/kg)
    //○ Emission factor: 0.48 kg CO2e/kg of glass waste (based on global average)
    let tempWasteFactor = 0;
    switch (selectedWaste) {
      case 'food':
        tempWasteFactor = 0.62;
        break;
      case 'paper':
        tempWasteFactor = 1.37;
        break;
      case 'plastic':
        tempWasteFactor = 6.0;
        break;
      case 'glass':
        tempWasteFactor = 0.48;
        break;
      default:
        console.log('Invalid input!');
        break;
    }
    let totalWaste = parseFloat(wasteValue) * parseFloat(tempWasteFactor);
    setWasteEmissionFactor(tempWasteFactor);

    //start energy calculations
    //● Coal: 1000 g CO2e/kWh
    //● Natural gas: 500 g CO2e/kWh
    //● Oil: 800 g CO2e/kWh
    //● Nuclear: 16 g CO2e/kWh
    //● Wind: 10 g CO2e/kWh
    //● Solar: 40 g CO2e/kWh
    //● Hydro: 24 g CO2e/kWh
    //● Biomass: 230 g CO2e/kWh
    //● Geothermal: 2 g CO2e/kWh
    let tempEnergyFactor = 0;
    switch (selectedEnergy) {
      case 'coal':
        tempEnergyFactor = 1000.0;
        break;
      case 'natural':
        tempEnergyFactor = 500.0;
        break;
      case 'oil':
        tempEnergyFactor = 800.0;
        break;
      case 'nuclear':
        tempEnergyFactor = 16.0;
        break;
      case 'wind':
        tempEnergyFactor = 10.0;
        break;
      case 'solar':
        tempEnergyFactor = 40.0;
        break;
      case 'hydro':
        tempEnergyFactor = 24.0;
        break;
      case 'biomass':
        tempEnergyFactor = 230.0;
        break;
      case 'geothermal':
        tempEnergyFactor = 2.0;
        break;
      default:
        console.log('Invalid input!');
        break;
    }
    numberOfPeople = 2;
    let totalEnergy = (parseFloat(energyValue) * parseFloat(tempEnergyFactor))/numberOfPeople;
    setEnergyEmissionFactor(tempEnergyFactor);

    //setTotalCarbonFootPrint(totalTransportation);
    setTotalCarbonFootPrint( totalTransportation + totalDiet + totalWaste + totalEnergy);
  }

  return (
    <>
    <View style={{ flex: 1, height: "80%", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginRight: 30, flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Select Transportation Type</Text>
          <Picker
            selectedValue={selectedTransportation}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedTransportation(itemValue)
            }>
            <Picker.Item label="Car" value="car" />
            <Picker.Item label="Bus" value="bus" />
            <Picker.Item label="Electric Train" value="etrain" />
            <Picker.Item label="Diesel Train" value="train" />
            <Picker.Item label="Commercial Air Flight" value="airplane" />
          </Picker>
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Enter Amount</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={styles.input} onChangeText={setTransportationValue} value={transportationValue} />
            <Text>km</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginRight: 30, flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Select Food Type</Text>
          <Picker
            selectedValue={selectedDiet}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDiet(itemValue)
            }>
            <Picker.Item label="Beef" value="beef" />
            <Picker.Item label="Lamb" value="lamb" />
            <Picker.Item label="Pork" value="pork" />
            <Picker.Item label="Chicken" value="chicken" />
            <Picker.Item label="Fish" value="fish" />
            <Picker.Item label="Eggs" value="eggs" />
            <Picker.Item label="Milk" value="milk" />
            <Picker.Item label="Chese" value="cheese" />
            <Picker.Item label="Vegetables" value="vegetables" />
            <Picker.Item label="Grains" value="grains" />
          </Picker>
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Enter Amount</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={styles.input} onChangeText={setDietValue} value={dietValue} />
            <Text>g</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginRight: 30, flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Select Waste Type</Text>
          <Picker
            selectedValue={selectedWaste}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedWaste(itemValue)
            }>
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Paper" value="paper" />
            <Picker.Item label="Plastic" value="plastic" />
            <Picker.Item label="Glass" value="glass" />
          </Picker>
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Enter Amount</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={styles.input} onChangeText={setWasteValue} value={wasteValue} />
            <Text>g</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ marginRight: 30, flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Select Energy Type</Text>
          <Picker
            selectedValue={selectedEnergy}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedEnergy(itemValue)
            }>
            <Picker.Item label="Coal" value="coal" />
            <Picker.Item label="Natural Gas" value="natural" />
            <Picker.Item label="Oil" value="oil" />
            <Picker.Item label="Nuclear" value="nuclear" />
            <Picker.Item label="Wind" value="wind" />
            <Picker.Item label="Solar" value="solar" />
            <Picker.Item label="Hydro" value="hydro" />
            <Picker.Item label="Biomass" value="biomass" />
            <Picker.Item label="Geothermal" value="geothermal" />
          </Picker>
        </View>
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
          <Text>Enter Amount</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={styles.input} onChangeText={setEnergyValue} value={energyValue} />
            <Text>kWh</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20, flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <Pressable onPress={() => calculateFootPrint()} style={{borderWidth: 0}}>
          <View style={{ backgroundColor: "lightblue", alignItems: "center", paddingRight: 10, height: 40, width: 148, borderWidth: 0, borderColor: "orange", justifyContent: "center"}}>
            <Text style={{fontSize: 24, fontWeight: "bold", borderWidth: 0}}>Calculate</Text>
          </View>
        </Pressable>
      </View>
      <View style={{marginBottom: 200, flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center"}}>
      <Text>Total Carbon FootPrint {totalCarbonFootPrint}</Text>
      <Text><br/></Text>
      <Text>selectedTransportation {selectedTransportation}</Text>
      <Text>transportationEmissionFactor {transportationEmissionFactor}</Text>
      <Text>transportationValue {transportationValue}</Text>
      <Text>selectedDiet {selectedDiet}</Text>
      <Text>dietEmissionFactor {dietEmissionFactor}</Text>
      <Text>dietValue {dietValue}</Text>
      <Text>selectedWaste {selectedWaste}</Text>
      <Text>wasteEmissionFactor {wasteEmissionFactor}</Text>
      <Text>wasteValue {wasteValue}</Text>
      <Text>selectedEnergy {selectedEnergy}</Text>
      <Text>energyEmissionFactor {energyEmissionFactor}</Text>
      <Text>energyValue {energyValue}</Text>
      </View>
    </View>
    </>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  const [transportationIsEnabled, setTransportationIsEnabled] = useState(true);
  const [wasteIsEnabled, setWasteIsEnabled] = useState(true);
  const [dietIsEnabled, setDietIsEnabled] = useState(true);
  const [energyIsEnabled, setEnergyIsEnabled] = useState(true);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
              name="Calculator"
              component={CalculatorScreen}
              initialParams={{
                transportationIsEnabled,
                wasteIsEnabled,
                dietIsEnabled,
                energyIsEnabled
              }}
            />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginRight: 4,
  },
  outerContainer: {
    borderWidth: 0,
    width: "100%",
    borderColor: "black",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderWidth: 0,
    borderColor: "black",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableContainer: {
    borderWidth: 0,
    borderColor: "yellow",
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 25,
  },
  separator: {
    marginVertical: 10,
    width: '80%',
  },
  button: {
    height: 130,
    width: 200,
    backgroundColor: "lightblue",
    borderRadius: 24,
    borderWidth: 0,
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  switch: {
    borderWidth: 0,
    borderColor: "green",
    backgroundColor: "lightblue",
  },
  images: {
    height: 60,
    width: 60,
    marginTop: 6,
    borderWidth: 0,
    borderColor: "red",
    backgroundColor: "lightblue",
  },
  imageLabel: {
    borderWidth: 0,
    borderColor: "blue",
    backgroundColor: "lightblue",
  },
});