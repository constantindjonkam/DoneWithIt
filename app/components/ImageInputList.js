import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAdd, onRemove }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((imageUri) => (
            <View key={imageUri} style={styles.image}>
              <ImageInput
                imageUri={imageUri}
                onSelect={() => onRemove(imageUri)}
              />
            </View>
          ))}
          <ImageInput onSelect={(imageUri) => onAdd(imageUri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
