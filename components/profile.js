import Image from 'next/image';

export default Profile = ({ height, width }) => (
  <Image
    src='/images/profile.jpg'
    height={height}
    width={width}
    alt='Sandeep Kumar Pandita'
  />
);
