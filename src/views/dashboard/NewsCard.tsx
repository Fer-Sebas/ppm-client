import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { Paragraph, BoldSmallCopy } from '../../shared/components/Typography';
import { calcDimensions } from '../../shared/pixelPerfect';
import { DESIGN_TOKENS as $ } from '../../shared/designTokens';

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
  },
});

export function NewsCard(props: any) {
  return (
    <Pressable style={styles.base}>
      <Image style={styles.imageContainer} source={{ uri: props.coverURI }} />
      <View style={styles.textContainer}>
        <BoldSmallCopy>{props.newsTagline}</BoldSmallCopy>
        <Paragraph>{props.newsTitle}</Paragraph>
      </View>
    </Pressable>
  );
}
