const Heading = ({ as: HeadingTag, children }) => {
  return (
    <HeadingTag className="text-center text-3xl font-black mb-4 text-indigo-500">
      {children}
    </HeadingTag>
  );
};
export default Heading;
