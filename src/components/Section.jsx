const Section = ({ children, className }) => {
  return (
    <section
      className={`my-5 px-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 ${className} border border-blue-500`}
    >
      {children}
    </section>
  );
};

export default Section;
