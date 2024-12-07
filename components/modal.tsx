type Props = {
  children: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
};
const Modal = ({ children, closeModal, isModalOpen = false }: Props) => {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen justify-center bg-black bg-opacity-40"
          onClick={closeModal}
        >
          <div onClick={handleContentClick} className="relative top-1/4">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
