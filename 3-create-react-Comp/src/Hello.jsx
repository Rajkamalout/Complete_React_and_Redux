function Hello() {
  let myName = "";
  let number = 456;
  let fullName = () => {
    return "rajkamal yadav";
  };

  return (
    <p>
      MessageNo: {number} I am your master {fullName()}
    </p>
  );
}

export default Hello;
