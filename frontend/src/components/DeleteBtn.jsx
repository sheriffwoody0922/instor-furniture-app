// Definiere die React-Komponente 'EditBtn'
const DeleteBtn = (props) => {
  const deleteItem = () => {};
  return (
    <>
      {/* Verwende die 'NavLink'-Komponente, um den 'Edit'-Button als Link zu definieren,
      der zu der spezifischen Seite '/furniture/${props.furnitureId}' navigiert */}

      <button className="edit-btn">Delete</button>
    </>
  );
};

// Exportiere die 'EditBtn'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default DeleteBtn;
