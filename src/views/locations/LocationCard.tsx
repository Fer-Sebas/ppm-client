import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import { Paragraph, BoldSmallCopy } from '../../shared/components/Typography';
import { calcDimensions } from '../../shared/pixelPerfect';
import { DESIGN_TOKENS as $ } from '../../shared/designTokens';

interface LocationCardProps {
  data: {
    locationCoverURI: ImageSourcePropType;
    locationType: string;
    locationName: string;
  };
  onPress: () => void;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: $.card.background.regular,
    borderColor: $.card.border,
    borderWidth: calcDimensions(1),
    borderRadius: $.card.radius,
    marginBottom: calcDimensions($.card.marginBottom),
    overflow: 'hidden',
    flexDirection: 'row',
  },
  imageContainer: {
    width: calcDimensions(104),
    backgroundColor: '000000',
  },
  textContainer: {
    paddingTop: calcDimensions(14),
    paddingHorizontal: calcDimensions(16),
    height: calcDimensions(104),
    flex: 1,
    textTransform: 'capitalize',
  },
});

const LocationCard: FC<LocationCardProps> = ({ data, onPress }) => {
  return (
    <Pressable style={styles.base} onPress={onPress}>
      <Image style={styles.imageContainer} source={data.locationCoverURI} />
      <View style={styles.textContainer}>
        <BoldSmallCopy>{data.locationType}</BoldSmallCopy>
        <Paragraph>{data.locationName}</Paragraph>
      </View>
    </Pressable>
  );
};

export default LocationCard;
