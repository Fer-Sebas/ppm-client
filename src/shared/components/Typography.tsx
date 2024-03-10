import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { calcDimensions } from '../pixelPerfect';
import { DESIGN_TOKENS as $ } from '../designTokens';

interface TextStyles {
  [key: string]: TextStyle;
}

const styles: TextStyles = StyleSheet.create({
  heroHeader: {
    color: $.text.hero.color,
    fontSize: calcDimensions(32),
    fontFamily: $.text.hero.font,
    marginBottom: calcDimensions(16),
  },

  heading: {
    color: $.text.heading.color,
    fontSize: calcDimensions(24),
    fontFamily: $.text.heading.font,
    marginBottom: calcDimensions(16),
  },

  subheading: {
    color: $.text.subheading.color,
    fontSize: calcDimensions(14),
    fontFamily: $.text.subheading.font,
    marginBottom: calcDimensions(16),
    textTransform: 'uppercase',
  },

  paragraph: {
    color: $.text.paragraph.color,
    fontSize: calcDimensions(20),
    fontFamily: $.text.paragraph.font,
    marginBottom: calcDimensions(40),
  },

  smallCopy: {
    fontSize: calcDimensions(14),
    fontFamily: $.text['small-copy'].font,
    marginBottom: calcDimensions(8),
  },

  boldSmallCopy: {
    fontSize: calcDimensions(14),
    fontFamily: $.text['bold-small-copy'].font,
    marginBottom: calcDimensions(4),
  },
});

interface TextComponentProps {
  children: ReactNode;
}

export function HeroHeader(props: TextComponentProps) {
  return <Text style={styles.heroHeader}>{props.children}</Text>;
}

export function Heading(props: TextComponentProps) {
  return <Text style={styles.heading}>{props.children}</Text>;
}

export function SubHeading(props: TextComponentProps) {
  return <Text style={styles.subheading}>{props.children}</Text>;
}

export function Paragraph(props: TextComponentProps) {
  return (
    <Text style={styles.paragraph} numberOfLines={0}>
      {props.children}
    </Text>
  );
}

export function SmallCopy(props: TextComponentProps) {
  return <Text style={styles.smallCopy}>{props.children}</Text>;
}

export function BoldSmallCopy(props: TextComponentProps) {
  return <Text style={styles.boldSmallCopy}>{props.children}</Text>;
}
