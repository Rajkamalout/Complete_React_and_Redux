let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      this is the CurrentTime:{time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
