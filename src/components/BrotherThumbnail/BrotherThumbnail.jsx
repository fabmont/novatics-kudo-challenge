import React from 'react';
import { Image, Box } from 'grommet';

import {
  Container,
  OverlayOptions,
  BrotherName,
  ThumbDescription,
  KudoButton,
} from './styles';

export default function BrotherThumbnail(brotherProps) {
  return (
    <Container>
      <Image
        className="brother-img"
        src={brotherProps.thumbName}
        fit="contain"
      />
      <OverlayOptions className="overlay-container">
        <div>
          <ThumbDescription>Dê um kudo para</ThumbDescription>
          <br />
          <BrotherName>{brotherProps.name}</BrotherName>
        </div>
        <Box direction="row" justify="around" align="center" width="70%">
          <KudoButton color="cornflowerBlue">
            <span role="img" aria-label="Aprendi">
              👨‍🎓
            </span>
          </KudoButton>
          <KudoButton color="yellow">
            <span role="img" aria-label="Incrível">
              👏
            </span>
          </KudoButton>
          <KudoButton color="deepPink">
            <span role="img" aria-label="Agradecido">
              🙏
            </span>
          </KudoButton>
        </Box>
      </OverlayOptions>
    </Container>
  );
}
