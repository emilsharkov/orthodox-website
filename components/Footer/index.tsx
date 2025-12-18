const Footer = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} St. George Serbian Orthodox Church.
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
