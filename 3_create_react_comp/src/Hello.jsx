function Hello() {

    let myName = 'Prashant';
    let number = 456;
    let fullName = () => {
      return 'Rajkamal Yadav';
    }
  
    return <p>
      MessageNo: {number} my Name is {fullName()}
    </p>
  }
  
  export default Hello;