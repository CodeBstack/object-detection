const Modal = ({
  title,
  isOpen,
  close,
  hideHeader,
  children,
}: {
  title?: string;
  isOpen: boolean;
  hideHeader?: boolean;
  close?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed z-[100] top-0 left-0 w-full h-full transition-all ease-out duration-300 flex items-center justify-center opacity-0 pointer-events-none ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : ''
      }`}
      style={{ background: '#00000061' }}
      onClick={close}
    >
      <div
        className={`bg-[#F5F3FF] z-[100] !rounded-[18px] max-w-[472px] w-[95%] transition-all ease-out duration-300  no-scroll ${
          !isOpen
            ? 'translate-y-16 opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {!hideHeader && (
          <header className="p-3 md:px-6 flex items-center rounded-t-[18px] bg-[#755AE2] justify-between mb-4">
            <h4 className="text-[#fff] text-base font-medium">
              {title}
            </h4>
            <button
              onClick={close}
              className="bg-[#F5F3FF33] px-5 py-2 rounded-lg text-white font-medium text-xs"
            >
              Close
            </button>
          </header>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
