const Image = ({ src, alt, ...delegated }) => {
  return <img src={src} alt={alt} {...delegated} />;
};
export default Image;
