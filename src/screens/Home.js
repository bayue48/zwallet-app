/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  // Button,
  // StyleSheet,
  // StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import IconF from 'react-native-vector-icons/Feather';
import MyStatusBar from '../components/MyStatusBar';
import Photo from '../assets/images/profile.png';
import styles from '../styles/homeStyles';

const Modal = ({hide, navigation}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={hide}
        style={{backgroundColor: '#00000090', width: '100%', height: '100%'}}
      />

      <View
        style={{
          backgroundColor: '#fff',
          elevation: 5,
          width: '70%',
          position: 'absolute',
          zIndex: 1,
          borderRadius: 14,
          alignItems: 'center',
          paddingVertical: 18,
        }}>
        <Text style={{fontSize: 18, marginBottom: 10}}>
          Phone Number Doesn't Exist
        </Text>
        <Text style={{paddingHorizontal: 30, textAlign: 'center'}}>
          {'tap the profile photo at the top \nto add a phone number \n\nor'}
        </Text>
        <TouchableOpacity
          onPress={navigation}
          style={{backgroundColor: '#6379F4', marginTop: 10, borderRadius: 10}}>
          <Text
            style={{
              color: '#fff',
              paddingHorizontal: 15,
              paddingVertical: 10,
              fontSize: 15,
            }}>
            Click Me
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: props.auth.login.data.phone,
      isModal: false,
    };
  }
  render() {
    const {phone, isModal} = this.state;
    return (
      <>
        <MyStatusBar />
        <ScrollView
          style={styles.container}
          scrollEnabled={isModal ? false : true}>
          {isModal && (
            <Modal
              hide={() => {
                this.setState({
                  isModal: !isModal,
                });
              }}
              navigation={() => {
                this.setState({
                  isModal: !isModal,
                });
                this.props.navigation.navigate('Add Phone Number');
              }}
            />
          )}
          <View style={styles.topArea}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Image source={Photo} style={styles.photo} />
            </TouchableOpacity>
            <View style={styles.nameArea}>
              <View style={styles.titleArea}>
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.name}>Robert Chandler</Text>
              </View>
              <TouchableOpacity style={styles.btnBell}>
                <IconF name="bell" color="#4D4B57" size={23} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoPadd}>
            <View style={styles.infoArea}>
              <Text style={styles.subtitle}>Balance</Text>
              <Text style={styles.balance}>Rp120.000</Text>
              <Text style={styles.subtitle}>+62 813-9387-7946</Text>
            </View>
          </View>
          <View style={styles.btnList}>
            <TouchableOpacity
              style={styles.btnType}
              onPress={() =>
                phone !== null
                  ? this.props.navigation.navigate('Contact')
                  : this.setState({isModal: !isModal})
              }>
              <IconF name="arrow-up" color="#608DE2" size={21} />
              <Text style={styles.btnTypeText}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnType}
              onPress={() =>
                phone !== null
                  ? this.props.navigation.navigate('Topup')
                  : this.setState({isModal: !isModal})
              }>
              <IconF name="plus" color="#608DE2" size={21} />
              <Text style={styles.btnTypeText}>Top Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowText}>
            <Text style={styles.btnTypeText}>Transaction History</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardList}>
            <TouchableOpacity>
              <View style={styles.cardBox}>
                <Image source={Photo} style={styles.photo} />
                <View style={styles.nameArea}>
                  <View>
                    <Text style={styles.cardTitle}>Samuel Suhi</Text>
                    <Text style={styles.cardSub}>Transfer</Text>
                  </View>
                  <Text style={styles.cardType1}>+Rp50.000</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardBox}>
                <Image source={Photo} style={styles.photo} />
                <View style={styles.nameArea}>
                  <View>
                    <Text style={styles.cardTitle}>Samuel Suhi</Text>
                    <Text style={styles.cardSub}>Transfer</Text>
                  </View>
                  <Text style={styles.cardType1}>+Rp50.000</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardBox}>
                <Image source={Photo} style={styles.photo} />
                <View style={styles.nameArea}>
                  <View>
                    <Text style={styles.cardTitle}>Samuel Suhi</Text>
                    <Text style={styles.cardSub}>Transfer</Text>
                  </View>
                  <Text style={styles.cardType1}>+Rp50.000</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapsStateToProps = ({auth}) => ({
  auth,
});

export default connect(mapsStateToProps)(Home);
