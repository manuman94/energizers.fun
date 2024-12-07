"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddGameModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#2A2F43] p-6 rounded-xl z-50">
        <h2 className="text-xl font-semibold text-white mb-4">Add a Game</h2>
        <p className="text-gray-300 mb-6">
          You can propose a new game in two ways:
        </p>
        <div className="space-y-4">
          <a
            href="mailto:support@energizers.fun"
            className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-[#F76C5E]/80 hover:bg-[#F76C5E] rounded-lg transition-colors duration-200"
          >
            Email us at support@energizers.fun
          </a>
          <a
            href="https://github.com/yourusername/energizers.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-[#4CAF9A]/80 hover:bg-[#4CAF9A] rounded-lg transition-colors duration-200"
          >
            Create a Pull Request on GitHub
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default AddGameModal;
