function TodoItem2() {
  let todoName = "Go to Collage";
  let todoDate = "4/10/2025";
  return (
    <div>
      <div className="container">
        <div className="row space-body">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-1">
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
