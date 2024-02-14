// components/Specials.js

import React from 'react';
import { Stack } from 'react-bootstrap';

const PhotoGallery = () => {
  return (
    <section id="photoGallery">
      <h2>PhotoGallery</h2>
      <Stack direction="horizontal" gap={2}>
        <Stack direction="vertical" gap={2}>
        <div style={{ backgroundColor: 'lightgray', height: '200px' }}>Cell 1</div>
        <div style={{ backgroundColor: 'lightgray', height: '150px' }}>Cell 2</div>
        <div style={{ backgroundColor: 'lightgray', height: '250px' }}>Cell 3 new</div>
        </Stack>
        <Stack direction="vertical" gap={2}>
        <div style={{ backgroundColor: 'lightgray', height: '150px' }}>Cell 4</div>
        <div style={{ backgroundColor: 'lightgray', height: '250px' }}>Cell 5</div>
        <div style={{ backgroundColor: 'lightgray', height: '200px' }}>Cell 6</div>
        </Stack>
        <Stack direction="vertical" gap={2}>
        <div style={{ backgroundColor: 'lightgray', height: '250px' }}>Cell 7</div>
        <div style={{ backgroundColor: 'lightgray', height: '200px' }}>Cell 8</div>
        <div style={{ backgroundColor: 'lightgray', height: '150px' }}>Cell 9</div>
        </Stack>
      </Stack>
    </section>
  );
};

export default PhotoGallery;

/* import "./styles.css";
import { styled } from "@glitz/react";

const imageList = [] as any;
for (let i = 1; i < 52; i++) {
  imageList.push({
    id: `${i}`,
    url: `https://picsum.photos/500?random=${i}`
  });
}

const Wrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "80px",
  gap: "30px",
  gridAutoFlow: "row dense"
});

const ImageWrapper = styled.div({
  overflow: "hidden",
  position: "relative",
  borderRadius: "20px",
  gridRow: "span 2",
  gridColumn: "auto",
  ":nth-of-type(even)": {
    gridRow: "span 3"
  },
  ":nth-of-type(6n+5)": {
    gridColumn: "2"
  }
});

const ImageStyled = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});

export default function App() {
  return (
    <Wrapper>
      {imageList.map((image: any) => (
        <ImageWrapper key={image.id}>
          <ImageStyled src={image.url} alt={image.url} />
          <h4 style={{ position: "absolute", top: "16px", color: "white" }}>
            {image.id}
          </h4>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
} */