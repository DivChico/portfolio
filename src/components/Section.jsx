const Section = ({ children, className }) => {
  return (
    <section
      className={`my-5  grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 ${className} `}
    >
      {children}
    </section>
  );
};

export default Section;
