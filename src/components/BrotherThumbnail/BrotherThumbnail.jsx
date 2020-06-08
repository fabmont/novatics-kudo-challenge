import React from 'react';
import { Image, Box } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  OverlayOptions,
  BrotherName,
  ThumbDescription,
  KudoButton,
} from './styles';
import { giveKudo } from '.';

export default function BrotherThumbnail(brotherProps) {
  const dispatch = useDispatch();
  const { availableBrooches, uid } = useSelector(
    ({ firebase: { profile } }) => profile
  );

  return (
    <Container>
      <Image
        className="brother-img"
        src={brotherProps.photoURL}
        fit="contain"
      />
      <OverlayOptions className="overlay-container">
        <div>
          <ThumbDescription>Dê um kudo para</ThumbDescription>
          <br />
          <BrotherName>{brotherProps.displayName}</BrotherName>
        </div>
        <Box direction="row" justify="around" align="center" width="70%">
          <KudoButton
            color="cornflowerBlue"
            onClick={() =>
              dispatch(
                giveKudo({
                  myUid: uid,
                  receiverUid: brotherProps.id,
                  type: 'learned',
                  availableBrooches,
                })
              )
            }
          >
            <span role="img" aria-label="Aprendi">
              👨‍🎓
            </span>
          </KudoButton>
          <KudoButton
            color="yellow"
            onClick={() =>
              dispatch(
                giveKudo({
                  myUid: uid,
                  receiverUid: brotherProps.id,
                  type: 'thankful',
                  availableBrooches,
                })
              )
            }
          >
            <span role="img" aria-label="Incrível">
              👏
            </span>
          </KudoButton>
          <KudoButton
            color="deepPink"
            onClick={() =>
              dispatch(
                giveKudo({
                  myUid: uid,
                  receiverUid: brotherProps.id,
                  type: 'grateful',
                  availableBrooches,
                })
              )
            }
          >
            <span role="img" aria-label="Agradecido">
              🙏
            </span>
          </KudoButton>
        </Box>
      </OverlayOptions>
    </Container>
  );
}
