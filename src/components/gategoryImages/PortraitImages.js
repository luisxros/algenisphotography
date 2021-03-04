import { ImageGroup, Image } from 'react-fullscreen-image'
 
const images = [
  'https://unsplash.com/photos/Bkci_8qcdvQ',
  'https://unsplash.com/photos/hS46bsAASwQ',
  'https://unsplash.com/photos/2VDa8bnLM8c',
  'https://unsplash.com/photos/_LuLiJc1cdo',
  'https://unsplash.com/photos/1Z2niiBPg5A',
  'https://unsplash.com/photos/pHANr-CpbYM',
  'https://unsplash.com/photos/pQMM63GE7fo',
  'https://unsplash.com/photos/2VDa8bnLM8c',
  'https://unsplash.com/photos/MBkQKiH14ng',
]
 
export default function App() {
  return (
    <ImageGroup>
      <ul className="images">
        {images.map(i => (
          <li key={i}>
            <Image
              src={i}
              alt="nature"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </li>
        ))}
      </ul>
    </ImageGroup>
  )
}