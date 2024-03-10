import React from 'react';
import { View } from 'react-native';
import { SubHeading } from '../../shared/components/Typography';
import { Card } from '../../shared/components/Cards';
import { BoldSmallCopy } from '../../shared/components/Typography';
import { NewsCard } from './NewsCard';

export function NewsCarousel(props: any) {
  const news = props.data;
  return (
    <View>
      <SubHeading>Mira lo nuevo</SubHeading>
      {news.length > 0 ? (
        news.map((entry: any, index: any) => (
          <NewsCard
            key={index}
            newsTitle={entry.newsTitle}
            newsTagline={entry.newsTagline}
            coverURI={entry.coverURI}
          />
        ))
      ) : (
        <Card muted={true} centered={true}>
          <BoldSmallCopy>
            No hay noticias que mostar en este momento
          </BoldSmallCopy>
          {'\n'}
        </Card>
      )}
    </View>
  );
}
