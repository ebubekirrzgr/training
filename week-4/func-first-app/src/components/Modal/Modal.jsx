import './modal.style.css';

const Modal = ({ setIsModalShow, renderCardBody, isModalShow }) => {
  const handleClose = (event) => {
    event.stopPropagation();
    setIsModalShow(false);
  };

  console.log('isModalShow', isModalShow);

  return (
    <div className='modalWrapper active'>
      <h1 className='pointer' onClick={handleClose}>
        X
      </h1>
      {renderCardBody()}
    </div>
  );
};

export default Modal;
