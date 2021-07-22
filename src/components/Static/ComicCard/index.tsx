/* eslint-disable @next/next/no-img-element */
import { Container } from './styles';

export default function ComicCard({ image, title }: any) {
  return (
    <Container>
      <div>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </Container>
  );
}