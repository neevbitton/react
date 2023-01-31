import "./bizCard.css";
const BizCardComponent = ({
  bizName,
  bizDescription,
  bizImage,
  bizPhone,
  bizAddress,
  _id,
  onDelete,
  onEdit,
}) => {
  const handleDeleteBtnClick = () => {
    onDelete(_id);
  };
  const handleEditBtnClick = () => {
    onEdit(_id);
  };
  return (
      <div className="col mb-4">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">{bizName}</h5>
            <h6>{bizDescription}</h6>
            <img
              src={bizImage}
              className="card-img-top"
              alt={bizName}
            ></img>
            <p className="card-text">{bizAddress}</p>
            <button className="btn btn-info me-2" onClick={handleEditBtnClick}>
              Edit
            </button>
            <button className="btn btn-dark" onClick={handleDeleteBtnClick}>
              Delete
            </button>
          </div>
        </div>
      </div>

  );
};
export default BizCardComponent;
