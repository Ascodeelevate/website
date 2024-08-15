export const Modal = ({ isOpen, onClose, children } : any) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-2xl">&times;</button>
          </div>
          {children}
        </div>
      </div>
    );
  };