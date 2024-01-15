
import React from 'react'
import {StyleSheet, View} from 'react-native';
import { BtnIcon } from '../atoms/btnIcon';
import { mainColors } from '../../utils/colors';

interface footerFloatProps {
  btnAddOnPress: () => void;
}

const FooterFloat = ({ btnAddOnPress }: footerFloatProps) => {
  return (
    <View style={styles.container}>
        <BtnIcon
          iconName="plus"
          onPress={btnAddOnPress}
          backgroundColor={mainColors.secondary}
          size={60}
          />
    </View>
  )
}

export default FooterFloat;

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding:16,
            position:'absolute',
            bottom:0,
            width:'100%'
        }
    });