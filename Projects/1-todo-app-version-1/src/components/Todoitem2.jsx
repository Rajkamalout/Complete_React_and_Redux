function Todoitem2() {

    let todoName = 'Go to Collage';
    let tododate = '4/15/2025';

    return (
        <div className="container">
            <div class="row kg-row">
                <div class="col-6">
                    {todoName}
                </div>
                <div class="col-4">{tododate}</div>
                <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
            </div>
        </div>
    );
}
export default Todoitem2